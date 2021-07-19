---
layout: post
title: Javascript 변수 var, let, const & TDZ(Temporal Dead Zone)
date: 2021-07-20 01:20:55 +0900
image: /assets/images/blog/post-2.jpg
author: h3yon
tags: javascript
categories: Javascript
---

{{page.categories | capitalize | join: ', '}}

<h4>출처</h4>
[자바스크립트 변수 선언 방식 차이: var/let/const](https://curryyou.tistory.com/192)
[TDZ(Temporal Dead Zone)이란?](https://noogoonaa.tistory.com/78)

<h4> Javascript 변수 var, let, const & TDZ(Temporal Dead Zone) </h4>

오늘은 기초적인 var, let, const에 대한 차이를 알아보았다
일단 변수 선언의 3단계는 선언 -> 초기화 -> 할당 과정으로 이루어져 있다.

> 선언: 변수를 실행 context의 변수 객체에 등록하는 단계. 해당 변수 객체는 scope가 참조하는 대상이 됨
> 초기화: 선언 단계의 변수를 위한 메모리를 만드는 단계. 할당된 메모리에는 undefined로 초기화
> 할당: undefined로 초기화된 메모리의 다른 값을 할당

1. var
   일단 var을 봐보자.

```javascript
var time;
console.log(time); // undefined
time;
```

var은 선언과 초기화 단계가 동시에 진행된다.
때문에 저렇게 값을 할당하지 않아도 undefined로 호출되는 호이스팅이 발생한다.

2. let
