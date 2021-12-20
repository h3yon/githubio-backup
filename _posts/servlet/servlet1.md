스프링 mvc 1편을 듣고 정리한 내용입니다.

# 1 Servlet이해하기

서블릿을 자동 등록하는 경우,
`@ServletComponentScan`어노테이션을 사용한다.

예제를 보면서 이해해보자
```java
@WebServlet(name = "helloServlet", urlPatterns = "/hello")
public class HelloServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("request = " + request);
        System.out.println("response = " + response);

        String username = request.getParameter("username");
        System.out.println("username = " + username);

        response.setContentType("text/plain");
        response.setCharacterEncoding("utf-8");
        response.getWriter().write("hello " + username);
    }
}
```
서블릿을 보면 이렇게 request, response로 구성되어 있으며,  
파라미터를 추출해낼 수 있고,  
response의 contentType, CharacterEncoding을 설정 가능하며  
write로 원하는 내용을 뿌려줄 수 있다  

```java

```

```java

```

```java

```

```java

```


```java

```

```java

```

```java

```

```java

```

```java

```


```java

```

```java

```

```java

```

```java

```

```java

```


```java

```

```java

```

```java

```

```java

```

```java

```


```java

```

```java

```

```java

```

```java

```

```java

```

