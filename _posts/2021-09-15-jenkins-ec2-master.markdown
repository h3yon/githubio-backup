---
title: "[Jenkins]AWS EC2 Ubuntu에 Jenkins 연동하기"
excerpt: "AWS EC2와 Jenkins를 연동해보자"

toc: true
toc_sticky: true

categories:
  - Jenkins
tags:
  - Jenkins
---

### 1. AWS EC2 Ubuntu에 Jenkins를 연동해보자

#### 관련 패키지 설치

# Using Ubuntu

curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
출처: https://github.com/nodesource/distributions/blob/master/README.md

ubuntu@ip-172-31-35-209:~/jenkins-test$ sudo apt install libssl1.0-dev
Reading package lists... Done
Building dependency tree  
Reading state information... Done
The following additional packages will be installed:
libssl1.0.0
E: Could not get lock /var/cache/apt/archives/lock - open (11: Resource temporarily unavailable)
E: Unable to lock directory /var/cache/apt/archives/
ubuntu@ip-172-31-35-209:~/jenkins-test$ sudo rm /var/lib/apt/lists/lock
ubuntu@ip-172-31-35-209:~/jenkins-test$ sudo rm /var/cache/apt/archives/lock
ubuntu@ip-172-31-35-209:~/jenkins-test$ sudo rm /var/lib/dpkg/lock\*

버전 변경 이슈

ubuntu@ip-172-31-35-209:~/jenkins-test$ sudo su
root@ip-172-31-35-209:/home/ubuntu/jenkins-test# sudo n 12.14.1
sudo: n: command not found
root@ip-172-31-35-209:/home/ubuntu/jenkins-test# n 12.14.1
n: command not found
root@ip-172-31-35-209:/home/ubuntu/jenkins-test# npm install -g n
/usr/bin/n -> /usr/lib/node_modules/n/bin/n

- n@7.4.1
  added 1 package from 2 contributors in 0.261s
  root@ip-172-31-35-209:/home/ubuntu/jenkins-test# n 12.14.1
  installing : node-v12.14.1
  mkdir : /usr/local/n/versions/node/12.14.1
  fetch : https://nodejs.org/dist/v12.14.1/node-v12.14.1-linux-x64.tar.xz
  installed : v12.14.1 (with npm 6.13.4)

Note: the node command changed location and the old location may be remembered in your current shell.
old : /usr/bin/node
new : /usr/local/bin/node
To reset the command location hash either start a new shell, or execute PATH="$PATH"
root@ip-172-31-35-209:/home/ubuntu/jenkins-test# PATH="$PATH"

구축 따라한 곳: https://velog.io/@dlawogus/AWS-ec2-%EC%84%9C%EB%B2%84-%EB%93%B1%EB%A1%9D
