---
layout: post
title: jekyll 코드 블럭 테마 꾸미기
date: 2021-07-19 00:30:55 +0300
author: h3yon
tags: jekyll
categories: jekyll
---

{{page.categories | capitalize | join: ', '}}

<h3>jekyll 코드 블럭 테마 꾸미기</h3>

```python
   # This program adds up integers in the command line
import sys
try:
    total = sum(int(arg) for arg in sys.argv[1:])
    print 'sum =', total
except ValueError:
    print 'Please supply integer arguments'
```

위는 파이썬 코드 예시입니다
