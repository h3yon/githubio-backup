var store = [{
        "title": "JAVA#1 ORM과 JPA, REST API",
        "excerpt":"ORM(Object-relational mapping) 이란 Object-Relational Mapping (객체 관계 매핑) 객체는 객체대로 설계하고, 관계형 데이터베이스는 관계형 데이터베이스대로 설계한다. ORM 프레임워크가 중간에서 매핑해준다. 대중적인 언어에는 대부분 ORM 기술이 존재한다. ORM은 객체와 RDB 두 기둥 위에 있는 기술 이다. JPA(Java Persistence API)란? EJB: 과거의 자바 표준(Entity Bean) 과거의 ORM → 코드가 매우 지저분하다. API...","categories": ["Java"],
        "tags": ["개념"],
        "url": "/java/java-1_orm-jpa-rest-api/",
        "teaser": null
      },{
        "title": "JAVA#2 Lambok",
        "excerpt":"Lombok   Lombok : Getter/Setter 그리고 생성자들을 어노테이션으로 간편하게 사용할 수 있게 해주는 플러그인   setter 메서드가 필요 없는 필드에 대해서도 setter 메서드를 강제로 생성하게 되므로, 필드 값이 변경될 위험이 생김   -&gt; 나중에 리팩토링 대상이 될 수 있다     출처: http://wonit.tistory.com/38?category=738059  ","categories": ["Java"],
        "tags": ["Java"],
        "url": "/java/java-2-lombok/",
        "teaser": null
      },{
        "title": "어노테이션 정리",
        "excerpt":"Slf4j : 1. Slf4j: redirect logging https://gmlwjd9405.github.io/2019/01/04/logging-with-slf4j.html → SLF4J Bridging Modules: 다른 로깅 API로의 로거 호출을 SLF4J 인터페이스로 연결(redirect)하여 SLF4J API가 대신 처리할 수 있도록 하는 일종의 어댑터 역할을 하는 라이브러리 → SLF4J API: 로깅에 대한 추상 레이어를 제공, 사용자가 이 인터페이스를 통해 logging 코드를 작성 → SLF4J 특징: 배포시...","categories": ["Java"],
        "tags": ["Java"],
        "url": "/java/java-3-annotation/",
        "teaser": null
      },{
        "title": "Swagger 적용",
        "excerpt":"[“java”] Swagger 적용하기 build.gradle compileOnly group: 'io.springfox', name: 'springfox-swagger2', version: '2.9.2' compileOnly group: 'io.springfox', name: 'springfox-swagger-ui', version: '2.9.2' swagger 파일 class 밖에 @Configuration, @EnableSwagger2 class 안에 @Bean @Bean @Configuration으로 정의된 클래스는 @Bean으로 정의된 메소드들을 포함 .consume(), .produces(): 각각 Request Content-Type, Response Content-Type에 대한 설정(선택) .apiinfo(): Swagger API 문서에 대한 설명을...","categories": ["Java"],
        "tags": ["Swagger"],
        "url": "/java/java-4-swagger/",
        "teaser": null
      },{
        "title": "[Springboot] kakao api 구현",
        "excerpt":"스프링부트로 kakao API 구현해보기 https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api 일단, 위의 사이트에서 kakao API의 흐름을 살펴보자. 보면 인가코드를 우선 받아야 함을 알 수 있다. 일단 그러면 어플리케이션 키를 받아야 한다. 위의 이미지처럼 상단의 ‘내 애플리케이션’ 버튼을 누른다. 아무 애플리케이션이나 만들고, 원하는 앱키를 복사해놓는다. 또 옆에 플랫폼으로 들어가, 원하는 플랫폼에 대한 플랫폼을 등록한다. 위처럼 등록해도...","categories": ["Java"],
        "tags": ["소셜로그인"],
        "url": "/java/java-5-kakao-api/",
        "teaser": null
      },{
        "title": "정보처리기사 실기 벼락치기",
        "excerpt":"정보처리기사 실기 벼락치기 시도해보기 요구사항 확인 현행 시스템 파악: 현재 개발하고자 하는 시스템의 개발 범위를 설정하기 위해 구성과 기능, 연계 정보, 소프트웨어, 하드웨어, 네트워크 구성을 파악하는 과정 현행시스템 파악 절차 현행 시스템 구성 파악: 기간 업무, 지원 업무 현행 시스템 기능 파악: 제공 기능 파악, 계층형 표시 인터페이스 현황 평가:...","categories": ["IT"],
        "tags": ["정보처리기사"],
        "url": "/it/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC-%EC%8B%A4%EA%B8%B0-%EB%B2%BC%EB%9D%BD%EC%B9%98%EA%B8%B0-%EC%8B%9C%EB%8F%84/",
        "teaser": null
      },{
        "title": "MySQL User 추가 및 권한 부여하기",
        "excerpt":"MySQL User 추가 및 권한 부여하기 mysql 사용자 추가하기 사용자 추가(비밀번호 X) $ create user 사용자; 사용자 추가 및 패스워드 설정 $ create user 사용자@localhost identified by 비밀번호; 사용자 추가 및 패스워드 설정부터 외부에서의 접근 허용 $ create user 사용자@’%’ identified by 비밀번호; 사용자 삭제1 $ drop user 사용자; 사용자...","categories": ["MySQL"],
        "tags": ["mysql"],
        "url": "/mysql/mysql-user/",
        "teaser": null
      },{
        "title": "Javascript 기초지식",
        "excerpt":"출처: https://velog.io/@dongha1992/javascript-%EB%82%B4%EB%B6%80%ED%95%A8%EC%88%98-%EC%99%B8%EB%B6%80%ED%95%A8%EC%88%98 자바스크립트 기초 지식 쌓기 아래의 코드가 있다고 가정하자. function out(){ const name = \"aaa\" return function(){ console.log(name); } } const in = out() in() 함수 안에 함수가 있을 때 응집성이 높아진다. 위의 코드를 보면 out()은 외부함수, in()은 내부함수를 말한다. in()함수에서 name에 대한 로그를 찍는데, name은 out()에만 있기 대문에...","categories": ["Javascript"],
        "tags": ["Javascript"],
        "url": "/javascript/javascript/",
        "teaser": null
      },{
        "title": "Javascript 변수 var, let, const & TDZ(Temporal Dead Zone)",
        "excerpt":"출처 자바스크립트 변수 선언 방식 차이: var/let/const TDZ(Temporal Dead Zone)이란? Hoisting and TDZ Javascript 변수 var, let, const &amp; TDZ(Temporal Dead Zone) 오늘은 기초적인 var, let, const에 대한 차이를 알아보았다 일단 변수 선언의 3단계는 선언 -&gt; 초기화 -&gt; 할당 과정으로 이루어져 있다. 선언: 변수를 실행 context의 변수 객체에 등록하는 단계....","categories": ["Javascript"],
        "tags": ["Javascript"],
        "url": "/javascript/javascript1/",
        "teaser": null
      },{
        "title": "Javascript 배우기",
        "excerpt":"Javascript 배우기 Javascript는 웹 브라우저에서 실행된다.(클라이언트 측) JSP, Servlet, ASP는 웹서버에서 해석되고 실행되어 결과만 HTML로 변환되어 웹 브라우저에 보여준다.(서버측) 웹서버에서 실행되기 때문에 즉각적인 반응을 하지 못하고 시간이 오래 걸린다. 프로토타입 기반 객체 지향 자바스크립트는 프로토타입 기반 객체지향 언어로, 자바처럼 클래스로부터 내용을 상속 받아서 객체 만드는 것이 아니라, 그냥 간단하게 객체를...","categories": ["Javascript"],
        "tags": ["Javascript"],
        "url": "/javascript/javascript2/",
        "teaser": null
      },{
        "title": "Javascript - forEach, map, filter, reduce 총정리",
        "excerpt":"Javascript - forEach, map, filter, reduce 총정리 참고 자료: ES6의 map, filter, reduce 정리 reduce 참고 링크 forEach 가장 기본적인 Loop 메소드 const arr = [\"a\", \"bb\", \"ccc\", \"ddddd\"]; var arr2 = []; arr.forEach(function (str) { arr2.push(str.length); }); console.log(arr2); // [1, 2, 3, 5]] forEach문과 아래 map() 기능이 완전 똑같음을...","categories": ["Javascript"],
        "tags": ["Javascript"],
        "url": "/javascript/map-filter-reduce/",
        "teaser": null
      },{
        "title": "Nodejs 스레드",
        "excerpt":"Nodejs 스레드 자바스크립트 코드가 실행될 때 보다, IO 이벤트가 발생할 때 까지 기다리는 시간이 훨씬 더 많다. node index.js 한 후, lsof -i:[사용하는 포트 번호] ex) lsof -i:3000 하면 해당 프로세스의 pId를 확인할 수 있다. ps -M [pId] -&gt; 스레드의 개수를 확인 가능 USER PID TT %CPU STAT PRI STIME...","categories": ["Javascript"],
        "tags": ["Javascript"],
        "url": "/javascript/nodejs-thread/",
        "teaser": null
      },{
        "title": "멀티스레드",
        "excerpt":"[“it”] 출처: [병렬프로그래밍] 프로세스, 스레드 개념 [병렬프로그래밍] 스레드 이해하기 스레드 리마인드 프로세스는 실행중인 프로그램이며, 하나의 실행 흐름을 스레드라고 한다. 하나의 프로세스 안에 스레드 여러개 있는 것이 멀티 스레드. 게임/네트워크 프로그래밍에서 멀티 스레드 많이 사용. (캐릭터를 움직이게 하거나, 데이터를 기다릴 때, 흐름 담당할 때 사용) 멀티 프로그래밍 여러 개의 프로그램들이 단일...","categories": ["IT"],
        "tags": ["IT"],
        "url": "/it/multi-thread/",
        "teaser": null
      },{
        "title": "스레드",
        "excerpt":"[“it”] 출처: [병렬프로그래밍] 자바 병렬 프로그래밍 소개 스레드 사용 안전성 위해 요소 UnsafeSequence는 비표준 어노테이션인 @NotThreadSafe를 사용.(@ThreadSafe와 @Immutable도 존재) @Immutable은 해당 클래스가 불변 클래스임을 나타내기 때문에 ThreadSafe 만약 @ThreadSafe라고 표시하면 클래스를 사용하는 사람은 멀티스레드 환경에서 문제가 없다는 점을 명확히 알 수 있고, 스레드 안전성이 계속 보장돼야 한다는 점에 주의할 수...","categories": ["IT"],
        "tags": ["IT"],
        "url": "/it/thread/",
        "teaser": null
      },{
        "title": "Nodejs에서의 멀티스레드, 멀티코어프로세스",
        "excerpt":"Nodejs에서의 멀티스레드, 멀티코어프로세스 출처: How to run many parallel HTTP requests using Node.js ? nodejs는 싱글 스레드로, 10초가 소요되는 요청 A가 포함되는 경우, 다음 요청을 처리 하기 위해 10초를 기다리는 건 X! NodeJS 이벤트 루프가 단일 스레드일 뿐이기 때문. 여러 클라이언트 요청을 수신하여 EventQueue에 배치. 이벤트루프 NodeJS는 이벤트 중심 아키텍처의...","categories": ["Javascript"],
        "tags": ["Javascript"],
        "url": "/javascript/nodejs-requests/",
        "teaser": null
      },{
        "title": "멀티 프로세스 & IPC & 세마포어,뮤텍스",
        "excerpt":"멀티 프로세스 &amp; IPC &amp; 세마포어,뮤텍스 출처: multi process vs multi thread 컨텍스트 스위칭 한 task가 끝날 때까지 기다리는 게 아니라 여러 작업을 번갈아가며 동시에 처리한다. 인터럽트 발생 시 프로세스 상태를 PCB에 저장하고 새로운 프로세스 상태를 레지스터에 저장한다. 이때 CPU는 아무런 일을 하지 않기 때문에 잦은 컨텍스트 스위칭은 성능저하를 야기한다....","categories": ["IT"],
        "tags": ["IT"],
        "url": "/it/%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C/",
        "teaser": null
      },{
        "title": "Node.js의 ORM, sequeliz",
        "excerpt":"Node.js의 ORM, sequelize 다들 ORM에 대해서 들어봤을 것 같다. ORM이란? Object-Relational Mapping으로 객체와 관계형 데이터베이스의 데이터를 매핑(연결)시켜주는 것 ORM은 객체-관계 매핑의 줄임말이다. 객체 개념을 구현한 class와 RDB(Relational DB)에서 쓰이는 테이블을 자동으로 매핑하는 것이다. ORM 프레임워크의 경우, JPA/Hibernate JPA(Java Persistence API)는 자바의 ORM 기술 표준으로 인터페이스의 모음이다. 이러한 JPA 표준 명세를...","categories": ["Javascript"],
        "tags": ["Javascript"],
        "url": "/javascript/sequelize/",
        "teaser": null
      },{
        "title": "스프링부트 Naver Login 구현하기",
        "excerpt":"스프링부트 Naver Login 구현하기 출처: 이동욱 님의 스프링 부트와 AWS로 혼자 구현하는 웹 서비스 스프링 부트와 OAuth2 Naver 사용한 방식 저번에 카카오 로그인을 구현하였을 때는 restTemplate을 사용했었다. 그런데 이번에는 spring-security-oauth2 부분을 알아보고 사용해보고자 했다. 라이브러리 중에 spring-security-auth2-autoconfigure이 있는데, 스프링부트2에서 기존 설정을 그대로 사용할 수 있어 많은 개발자가 이 방식을 사용했다고...","categories": ["Java"],
        "tags": ["Java","소셜로그인"],
        "url": "/java/spring-naver-login/",
        "teaser": null
      },{
        "title": "[node.js]http2 적용과 발생한 에러",
        "excerpt":"[node.js]http2 적용과 발생한 에러 리액트 웹페이지에 적용시킬 백엔드 서버를 구동하는 코드를 원래는 아래처럼 작성해놓았었다. # index.js ... express().listen(PORT); console.info(`${NODE_ENV} - API Server Start At Port ${PORT}`); http2의 장점을 알고, 해당 코드를 http2로 변경해주었다. const express = require(\"./config/express\"); const { readFileSync } = require(\"fs\"); const http2 = require(\"http2\"); const { NODE_ENV,...","categories": ["Javascript"],
        "tags": ["Javascript","http2"],
        "url": "/javascript/http2/",
        "teaser": null
      },{
        "title": "[Java]자바의 정석 벼락치기",
        "excerpt":"자바의 정석 벼락치기 정보처리기사 실기 2일인지 3일인지 잘 기억은 안 나는데 이번에 이틀의 전사? 3일의 전사 기념으로 자바의 정석도 벼락치기 해도 될 것 같다! ch2 변수 명명규칙 대소문자 구분. 길이에 제한 X 예약어 사용해선 X 예약어란? 자바에서 자체적으로 사용하는 단어 - true는 예약어. 하지만 True는 가능 숫자로 시작해선 X 특수문자는...","categories": ["Java"],
        "tags": ["Java"],
        "url": "/java/JAVA/",
        "teaser": null
      },{
        "title": "[Github]올라간 파일/디렉토리 삭제하기",
        "excerpt":"올라간 파일/디렉토리 삭제하기 .gitignore에 안 올릴 파일을 명시하고 올렸어야 했는데, 까먹고 그냥 올려버렸다. 로컬 디렉토리와 git 저장소에서 모두 삭제 $ git rm a.txt $ git commit -m \"chore: delete a.txt\" $ git push git에서만 삭제 로컬 디렉토리에서는 유지해야 할 때 $ git rm --cached a.txt $ git commit -m \"chore:...","categories": ["IT"],
        "tags": ["Github"],
        "url": "/it/github-delete/",
        "teaser": null
      },{
        "title": "[Github]커밋 되돌리기",
        "excerpt":"커밋 되돌리기 일단 로그를 먼저 봐야 한다. 아래 명령어를 쳐서 되돌아갈 부분을 보자. % git log --oneline 4170f95 (HEAD -&gt; master, origin/master) Delete replication/slave/data directory dd16435 Delete replication/master/data directory b2e987b .gitignore 8a550be .gitignore 4ce5b09 feat: replication 4f40e6f fin: server 나는 b2e987b로 돌아가면 된다. 여러가지 옵션이 있는데, 아래 부분을 보고 하나...","categories": ["IT"],
        "tags": ["Github"],
        "url": "/it/revert-commit/",
        "teaser": null
      },{
        "title": "[Javascript]자바스크립트 Again",
        "excerpt":"자바스크립트 복습 출처: 제주코딩베이스캠프 중간에 추가하기 아래처럼 만드려면? var arr = [200, 100, 300]; [200, 100, 10000, 300]; 답: arr.splice(2,0,10000); 다음 출력 값으로 올바른 것은? var arr = [100, 200, 300]; console.log(typeof arr); 답: object 객체의 키 이름 중복 var d = { \"height\": 180, \"weight\": 78, \"weight\": 84, };...","categories": ["Javascript"],
        "tags": ["Javascript"],
        "url": "/javascript/javascript-again/",
        "teaser": null
      },{
        "title": "[Javascript]자바스크립트 Again2",
        "excerpt":"자바스크립트 복습2 출처: 제주코딩베이스캠프 merge sort 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다. 두 부분 리스트를 다시...","categories": ["Javascript"],
        "tags": ["Javascript"],
        "url": "/javascript/javascript-again2/",
        "teaser": null
      },{
        "title": "[Jenkins]AWS EC2 Ubuntu에 Jenkins 연동하기",
        "excerpt":"1. AWS EC2 Ubuntu에 Jenkins를 연동해보자 관련 패키지 설치 Jenkins 설치를 위해 Repository key 추가 $ wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add - 서버의 sources.list에 Jenkins 패키지 저장소를 추가 $ sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ &gt; \\ /etc/apt/sources.list.d/jenkins.list' 패키지 업데이트 및 Jenkins 설치 $ sudo...","categories": ["Jenkins"],
        "tags": ["Jenkins"],
        "url": "/jenkins/jenkins-ec2/",
        "teaser": null
      },{
        "title": "h2 database 에러 해결하기",
        "excerpt":"h2 database 에러 해결하기 오늘 아래의 에러가 계속 괴롭혀서 해결 방법을 써보고자 한다 h2 Database not found, either pre-create it or allow remote database creation (not recommended in secure environments) jdbc:h2:tcp://localhost/~/test를 아래처럼 계속 눌렀는데, 이 에러가 계속 나타났다. h2 Database not found, either pre-create it or allow remote database creation...","categories": ["Jenkins"],
        "tags": ["Jenkins"],
        "url": "/jenkins/h2-error/",
        "teaser": null
      },{
        "title": "You dont know js up & going 정복하기",
        "excerpt":"You dont know js 1st Edition up &amp; going 정복하기 You dont know 책을 접해보게 되었는데, 뭔가 탄탄해보여서 읽어보기로 결정했다! (기본 지식을 가졌다고 가정하고 정리해보겠습니다!) Chapter 1: Into Programming Input let age = prompt(\"나이를 입력해주세요\"); console.log(age); Converting Between Types var a = \"42\"; var b = Number(a); console.log(a); // \"42\"...","categories": ["Javascript"],
        "tags": ["Javascript"],
        "url": "/javascript/you-dont-know-js/",
        "teaser": null
      },{
        "title": "[TIL]스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술",
        "excerpt":"[TIL] 스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술 (주의) 주관적으로 정리하고 싶은 부분만 정리했습니다! 요약본을 보고 싶으신 분은 다른 게시글을 보시는 걸 추천합니다~! 본 강의: 인프런 - 스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술 객체를 계속 생성하는 것보다는 의존성 주입으로...","categories": ["Java"],
        "tags": ["Java"],
        "url": "/java/TIL%EC%A0%95%EB%A6%AC/",
        "teaser": null
      }]
