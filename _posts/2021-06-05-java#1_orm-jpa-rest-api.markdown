---
layout: post
title: JAVA#1 ORM과 JPA, REST API
date: 2021-06-06 21:50:55 +0300
image: /assets/images/blog/post-2.jpg
author: h3yon
categories: Java
tags: Java
---

<h4>ORM(Object-relational mapping) 이란</h4>

- Object-Relational Mapping (객체 관계 매핑)
- 객체는 객체대로 설계하고, 관계형 데이터베이스는 관계형 데이터베이스대로 설계한다.
- ORM 프레임워크가 중간에서 매핑해준다.
- 대중적인 언어에는 대부분 ORM 기술이 존재한다.
- ORM은 객체와 RDB 두 기둥 위에 있는 기술 이다.

<h4>JPA(Java Persistence API)란?</h4>

- EJB: 과거의 자바 표준(Entity Bean)
- 과거의 ORM → 코드가 매우 지저분하다. API 복잡성이 높고 속도가 느리다
- Hibernate: ORM 프레임워크. Open Source SW
- JPA: 자바 진영의 ORM 기술 표준으로 인터페이스의 모음
  → JPA 인터페이스를 구현한 대표적인 오픈소스가 Hibernate라고 할 수 있다.
- JPA의 동작 과정: JPA는 애플리케이션과 JDBC 사이에서 동작
  → JDBC API를 사용하여 SQL을 호출하여 DB와 통신
  → 개발자가 직접 JDBC API를 쓰는 것이 아님

<h4>오늘의 어노테이션 예제 코드</h4>

<script src="https://gist.github.com/h3yon/d02699888a7d30dc9221826332c9d5ec.js"></script>

@RestController: @Controller 어노테이션과 @ResponseBody 어노테이션을 합쳐놓은 어노테이션으로 클래스 상단에 @RestController 어노테이션을 선언하면 메서드마다 @ResponseBody를 붙여주지 않아도 된다.

@RequestMapping("/api"); //URL을 컨트롤러의 메서드와 매핑할 때 사용하는 스프링 어노테이션

@GetMapping("/getParameter") //getMapping으로 Paramerter를 받아준다.

<h4>Model(Model of MVC)</h4>
:컨트롤러를 설치한 경로에 model이라는 패키지를 생성하고 SearchParam이라는 클래스 생성

<script src="https://gist.github.com/h3yon/470ba178de7c6dd7dd8791a430fdf88a.js"></script>

controller로 돌아와서 @RequestParam 어노테이션으로 매핑하는 게 아니라 객체 형식으로 매핑 시켜줌

<script src="https://gist.github.com/h3yon/83d8d094db477d78429aca456b5e2aec.js"></script>

출처: http://wonit.tistory.com/37?category=738059
