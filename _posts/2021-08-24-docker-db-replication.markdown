---
layout: post
title: [Docker]docker-compose와 DB replication
date: 2021-08-24 18:40:55 +0900
image: /assets/images/blog/post-2.jpg
author: h3yon
tags: it
categories: Docker
---

{{page.categories | capitalize | join: ', '}}

<h3> Docker로 MySQL DB Replication 진행해보기 </h3>

출처:
[Docker MySQL Master-Slave Replication Setup](https://medium.com/@vbabak/docker-mysql-master-slave-replication-setup-2ff553fceef2)

<br>

우선 작업할 디렉토리를 만든 후,<br>
sh파일을 clone 받는다.

```
$ mkdir mysql-master-slave
$ cd mysql-master-slave
$ git clone https://github.com/vbabak/docker-mysql-master-slave ./
```

<br>

### - 클론 받은 부분 살펴보기


클론 받은 디렉토리의 구조는 아래와 같다.

```
mysql-master-slave
├── README.md
├── build.sh
├── docker-compose.yml
├── master
└── slave
```

build.sh를 대충 보면 알겠지만,
docker-compose가 사용되었음을 알 수 있다.
<br>
+ docker compose는 다중 컨테이너 application들을 정의하고
공유할 수 있도록 개발된 도구

<br>
 
docker-compose를 보면, <br>
아래처럼 mysql_master, mysql_slave 컨테이너로 구성되어 있으며,
포트가 각각 다르게 설정되어 있음을 알 수 있다.

```
version: '3'
services:
  mysql_master:
    image: mysql:5.7
    env_file:
      - ./master/mysql_master.env
    container_name: "mysql_master"
    restart: "no"
    ports:
      - [사용할 포트 번호]:3306
    volumes:
      - ./master/conf/mysql.conf.cnf:/etc/mysql/conf.d/mysql.conf.cnf
      - ./master/data:/var/lib/mysql
    networks:
      - overlay
  
  mysql_slave: ... (위와 형태 같음)

networks:
 overlay:
```

위를 보면 우리가 알아야 할 파일이 한 3가지 정도 있는 듯 싶다.
- ./master/mysql_master.env
- ./master/conf/mysql.conf.cnf
- ./master/data(생략)

특히 2번째 같은 경우는 해당 컨테이너의 파일 안으로 복사되니,<br>
잘 알아두면 좋을 것 같다.

1. mysql_master.env
    <br> <br>
    mysql 유저에 대한 정보와 DB 정보를 알 수 있다.
    <br> 여기서 slave.env는 USER, PASSWORD만 좀 다르다.
   
    ```
    MYSQL_ROOT_PASSWORD=111
    MYSQL_PORT=3306
    MYSQL_USER=mydb_user
    MYSQL_PASSWORD=mydb_pwd
    MYSQL_DATABASE=mydb
    MYSQL_LOWER_CASE_TABLE_NAMES=0
    ```

2. conf/mysql.conf.cnf
    
    ```
    [mysqld]
   
    skip-host-cache     # 캐시 비활성화
    skip-name-resolve   # IP 기반으로 접속 시, hostname lookup 과정 생략 -> 좀더 빠른 접속 가능
    
    server-id = 1       # 복제에 사용되는 서버의 경우 고유한 서버 ID
    log_bin = /var/log/mysql/mysql-bin.log  # bin 로그를 활성화하고 바이너리 로그 파일 기본 이름, 경로 설정
    
    binlog_format = ROW 
        # ROW(복제본 재생은 행의 실제 변경 사항만 재생), 
        # STATEMENT(복제본은 데이터를 변경하는 모든 쿼리 재생), 
        # MIXED(서버가 행 기반 복제만 적절하다고 결정하지 않는 한 명령문 기반 복제가 사용됨)
   
    binlog_do_db = mydb # 어떤 문장이 기록될 데이터베이스
    ```

<br>
해당 정보를 바탕으로 유지할 부분은 유지하고,<br>
수정할 부분은 수정하자.

```
$ ./build.sh
```

이제 sh 파일을 실행시킴으로써<br>
해당 컨테이너를 만들어준다.
<br>
<br>

이제 터미널 하나를 열고, <br>
master 컨테이너에 접속하여 테이블을 하나 만들어주자.

그 다음, slave user의 유저명과 pwd를 넣어 사용자를 추가해준다.

```
docker exec -it mysql_master bash
mysql -u root -p'111' mydb
mysql> create table if not exists code(code int);
# Query OK, 0 rows affected, 1 warning (0.01 sec)
mysql> insert into code values (100), (200);
# Query OK, 2 rows affected (0.01 sec)


# REPLICATION 사용자를 추가(생성될 때 만들었던 user, pwd 입력)
mysql> GRANT REPLICATION SLAVE ON *.* TO "mydb_slave_user"@"%" IDENTIFIED BY "mydb_slave_pwd";
mysql> FLUSH PRIVILEGES;
```

새로운 터미널 창을 열어,<br>
해당 정보를 확인해주었다.

```
$ docker exec -it mysql_master cat '/etc/hosts'
```

그럼 127.0.0.1 같은 IP 주소를 알 수 있고,
그게 MASTER_HOST임을 알 수 있다.

```
docker exec mysql_master sh -c 'export MYSQL_PWD=111; mysql -u root -e "SHOW MASTER STATUS \G"'

# *************************** 1. row ***************************
#              File: [로그 파일명]
#          Position: [로그 포지션 번호]
#      Binlog_Do_DB: mydb
#   Binlog_Ignore_DB: 
#  Executed_Gtid_Set: 

```

그럼 위처럼 파일명과 포지션이 나온다.

MASTER 부분 mysql을 틀어놓은 곳으로 가서<br>
아래의 명령어를 쳐준다.

```
mysql> CHANGE MASTER TO MASTER_HOST='${위에서 안 IP 주소}', MASTER_USER='mydb_slave_user', MASTER_PASSWORD='mydb_slave_pwd', MASTER_LOG_FILE='${위에서의 로그 파일}', MASTER_LOG_POS=${위에서의 로그 포지션 번호};
mysql> START SLAVE;
```

그 후, master 부분 mysql에 정보를 추가하고,<br>
slave 부분 mysql에서 정보를 select 하면 잘 복제되어 있음을 알 수 있다.