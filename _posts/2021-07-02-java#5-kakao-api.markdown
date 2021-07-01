---
layout: post
title: JAVA#2 kakao api
date: 2021-07-02 19:04:55 +0300
image: /assets/images/blog/post-2.jpg
author: h3yon
tags: java
categories: Java
---

{{page.categories | capitalize | join: ', '}}


<h4>스프링으로 kakao API 구현해보기</h4>


https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api

일단, 위의 사이트에서 kakao API의 흐름을 살펴보자.
보면 인가코드를 우선 받아야 함을 알 수 있다.


<img src = "https://user-images.githubusercontent.com/46602874/124142896-9a798600-dac5-11eb-8cc3-1ebab94bd2b1.png" width="50%" height="50%%">

일단 그러면 어플리케이션 키를 받아야 한다.
위의 이미지처럼 상단의 '내 애플리케이션' 버튼을 누른다.


<img src = "https://user-images.githubusercontent.com/46602874/124144091-9d28ab00-dac6-11eb-8d3a-f73b5e1f40e0.png" width="50%" height="50%%">

아무 애플리케이션이나 만들고,
원하는 앱키를 복사해놓는다.

<pre>
<code>
my test
</pre>
</code>
