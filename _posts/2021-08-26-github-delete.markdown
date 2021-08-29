---
layout: post
title: [Github]올라간 파일/디렉토리 삭제하기
date: 2021-08-26 15:40:55 +0900
image: /assets/images/blog/post-2.jpg
author: h3yon
tags: it
categories: Github
---

{{page.categories | capitalize | join: ', '}}

<h3> 올라간 파일/디렉토리 삭제하기  </h3>

.gitignore에 안 올릴 파일을 명시하고 올렸어야 했는데,<br>
까먹고 그냥 올려버렸다.

1. 로컬 디렉토리와 git 저장소에서 모두 삭제

   ```
   $ git rm a.txt
   $ git commit -m "chore: delete a.txt"
   $ git push
   ```

2. git에서만 삭제
   로컬 디렉토리에서는 유지해야 할 때

   ```
   $ git rm --cached a.txt
   $ git commit -m "chore: delete a.txt in git"
   $ git push
   ```
