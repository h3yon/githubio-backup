---
layout: post
title: Javascript 배우기
date: 2021-07-20 01:20:55 +0900
image: /assets/images/blog/post-2.jpg
author: h3yon
tags: javascript
categories: Javascript
---

{{page.categories | capitalize | join: ', '}}

<h4> Javascript 배우기 </h4>

Javascript는 웹 브라우저에서 실행된다.(클라이언트 측)
JSP, Servlet, ASP는 웹서버에서 해석되고 실행되어 결과만 HTML로 변환되어 웹 브라우저에 보여준다.(서버측)
웹서버에서 실행되기 때문에 즉각적인 반응을 하지 못하고 시간이 오래 걸린다.

<h5>프로토타입 기반 객체 지향</h5>

자바스크립트는 프로토타입 기반 객체지향 언어로,
자바처럼 클래스로부터 내용을 상속 받아서 객체 만드는 것이 아니라,
그냥 간단하게 객체를 생성하고, 속성과 값을 추가, 변경, 삭제 가능하다.

```javascript
var person = { name: "h3yon", age: 20 };
console.log(person);
// Object
//  age: 20
//  name: "h3yon"
//  __proto__: Object
```

<h5>eval</h5>

```javascript
eval("var a = 1, b = 2;");
console.log(a, b); // 1 2
```

eval()을 통해 프로그램 실행 도중에도 동적으로 코드 실행이 가능하다.

<h5>고차 함수</h5>

간단하게 파라미터가 함수이거나,
함수를 반환할 수 있는 함수이다.

```javascript
function (param_func) => {
   param_func();
   return function test(){
      ...
   }
}
```

<h5>자바스크립트 엔진</h5>

자바스크립트 엔진은 개발자가 작성한 js 코드를 해석하고 실행시켜주는 것이다.
목표는 가능한 짧은 시간 내에 가장 최적화된 코드를 생성하는 것이다.

자바스크립트 엔진은

> 코드를 실행하는 프로그램 혹은 인터프리터

자바스크립트 엔진의 종류는 아래와 같다.

```
V8: 구글에서 개발한 오픈소스. C++로 작성, 구글 크롬과 Node.js에서 사용(가장 유명)
SpiderMonkey: 최초의 자바스크립트 엔진
Rhino: 모질라재단의 오픈소스. 자바로 구현.
JavaScriptCore: 애플이 사파리를 위해 개발
Chakra: 인터넷 익스플로러/마이크로소프트 엣지용
Nashron: 오픈 JDK의 일환으로 오픈소스. Oracle ~이 개발
JerryScript: 사물인터넷 위한 엔진
```

출처: [한 눈에 끝내는 nodejs](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js)
