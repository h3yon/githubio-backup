---
title: "[Java]자바의 정석 Chapter5-6"
excerpt: "[Java]자바의 정석 Chapter5-6"

toc: true
toc_sticky: true

categories:
  - Java
tags:
  - Java
---

# 자바의 정석 Chapter5,6

생성일: 2022년 1월 4일 오후 12:46
태그: Array, Java

# Chapter5-1. 배열

`같은 타입`의 여러 변수를 하나의 묶음으로 다루는 것

## 배열의 선언과 생성

배열의 선언

| 선언 방법        | 선언 예      |
| ---------------- | ------------ |
| 타입[] 변수이름; | int[] score; |
| String[] name;   |
| 타입 변수이름[]; | int score[]; |
| String name[];   |

배열의 선언과 생성

```java
타입[] 변수이름;
변수이름 = new 타입[길이];

ex)
1번 예시
int[] score;
score = new int[5]; //공간이 마련된다

2번 예시
int[] score = new int[5];
```

## 배열의 길이와 인덱스

배열 관련 퀴즈

- 배열의 각 저장공간을 뭐라고 할까? _배열의 요소_
- 배열의 요소마다 붙여진 일련번호? _인덱스_
- 배열 arr = new int[5]라고 가정할 때, arr[5] = 100;이라고 한다면 당연히 잘못된 부분.
  컴파일러는 얘가 잘못되었다는 것을 알 수 있을까?
  _NO! ArrayIndexOutOfBoundsException(`RuntimeException`, 실행 시 발생하는 에러) 발생_

배열의 길이

: 배열 요소의 개수, 즉 값을 저장할 수 있는 공간의 개수이다. `배열이름.length`로 배열의 길이를 구할 수 있다. 배열은 한번 선언되고 나면 `길이를 변경할 수 없`다. 배열에 저장할 공간이 부족한 경우 더 큰 길이의 새로운 배열을 생성한 후, 기존 배열 값들을 새로운 배열에 복사하면 된다. 배열 길이를 너무 크게 잡으면 메모리 낭비이니까, 기존의 2배 길이로 생성하는 것이 좋다.

관련 퀴즈

- length() vs length?
  _length()는 문자열의 길이,
  length는 배열의 길이를 구할 때 사용_
- 배열이름.length로 배열의 길이를 알 수 있다. 자바에서는 어떤 것이 모든 배열의 길이를 별도로 관리할까?
  _JVM_

## 배열의 초기화

1.  각 요소마다 값을 지정해주는 방법

    ```java
    int[] score = new int[3];
    int[0] = 50;
    int[1] = 40;
    int[2] = 30;
    ```

2.  for문 사용

    ```elm
    int[] score = new int[3];
    for(int i = 0; i < score.length; i++)
    	score[i] = i * 10 + 50;
    ```

3.  그냥 초기화
    선언과 초기화가 따로 이루어질 경우, new int[]는 생략할 수 없다. 메서드 인자로 배열을 넘길 때도 생략 불가능하다.
    `java //배열의 생성과 초기화 동시에, 길이를 안 적어주어도 됨 int[] score = new int[]{50, 40, 30}; //new int[]생략 가능 int[] score = {50, 40, 30}; `

퀴즈

- 아래 result1,2는 에러가 발생할까?
  ```java
  int add(int[] arr){ /* 생략 */}
  int result1 = add(new int[]{50, 40, 30});
  int result2 = add({50, 40, 30});
  ```
  _result1은 OK, 2는 에러 → new int[] 생략 불가능. 메서드 인자로 배열을 직접 넘기는 경우, new int[]를 생략할 수 없다._

## 배열의 출력

아래처럼 for문을 사용하거나 Arrays의 toString을 사용한다. 배열을 그냥 출력하면 주소값이 나온다. 하지만 char의 배열이면 배열을 그냥 출력해도 요소가 제대로 나옴을 아래처럼 확인할 수 있다.

```java
int arr = {100, 95, 80, 70, 60};

//1번 for문 사용 -> 배열의 요소 출력
for (int i=0; i<arr.length; i++) {
	System.out.println(arr[i] + " "); //100 95 80 70 60
}

//2번 toString 사용 -> 배열의 요소 출력
System.out.println(Arrays.toString(arr)); //[100, 95, 80, 70, 60]

//배열의 주소 출력
System.out.println(arr); //I@14318bb

//char배열의 요소 출력
char[] chars = { 'a', 'b', 'c', 'd' };
System.out.println(chars); //abcd
```

## 배열의 복사

배열은 한번 생성하면 길이 변경이 불가능하니까 이전 배열 내용을 복사해야 한다고 했다. 방법을 살펴보자

1. for문 사용

   ```java
   int[] arr = {1, 2, 3};
   int[] tmp = new int[5];
   for (int i=0; i<arr.length; i++) {
   	tmp[i] = arr[i];
   }
   arr = tmp;
   ```

2. arrayCopy() 사용

   ![Untitled](./javastudy1/Untitled.png)

   ```java
   System.arraycopy(arr1, 1, arr2, 2, 3);
                 //arr1[1]에서 arr2[2]으로 3개의 데이터를 복사
   ```

## 배열의 활용

- 총합과 평균: 둘중 타입이 다르면 average 구할 때 sum / (float)score.length 한쪽에 얻으려는 타입 사용
- 최대값과 최소값: Math.max, Math.min 사용
- 셔플

![Untitled](./javastudy1/Untitled%201.png)

- 임의의 값으로 배열 채우기
  ```java
  for (int i=0; i<arr.length; i++) {
  	int tmp = (int) (Math.random() * code.length);
  	arr[i] = code[tmp];
  }
  ```
  etc

# Chapter5-2. String 배열

String 배열도 다른 배열과 마찬가지로 선언, 초기화됨을 알 수 있다.

```java
String[] names = {"Kim", "Park", "Yi"};

String[] name = new String[2];
name[0] = "Kim"; //원래 new String("Kim")으로 객체를 생성해야 한다.
name[1] = "Park";
```

## char 배열과 String 클래스

문자열은 문자배열인 char배열과 같은 뜻이다. String 클래스는 char 배열에 기능(메서드)을 추가한 것이다. 이 char배열과 String 클래스의 한 가지 중요한 차이는 무엇일까? _`String 객체(문자열)는 읽을 수만 있고 내용을 변경할 수는 없다는 것이다.`_

String의 주요 메서드로는 char **charAt**(int index), int **length**(), String **substring**(int from, int to), boolean **equals**(Object obj), char[] **toCharArray** 등이 있다.

### 커맨드 라인을 통해 입력 받기

public static void main(String[] args) → 커맨드라인을 통해 입력 받음. 입력하지 않으면 null이 아니라 크기가 0인 배열이 생성되어 args.length의 값은 0이 된다.

# Chapter5-3 다차원 배열

![Untitled](./javastudy1/Untitled%202.png)

'[]'만 추가될 뿐 앞이랑 비슷함을 알 수 있다.

### 가변배열

![Untitled](./javastudy1/Untitled%203.png)

오른쪽처럼 각 행마다 다른 길이의 배열을 생성하는 것이 가능하다.

### 다차원 배열의 활용

→ 패스(꼭 읽기)

## +Array vs ArrayList vs List

Array: 배열 크기 변경 불가능 **cache hit** 가능성이 커져서 성능에 큰 도움,

List: 인덱스 장점 버리고 빈틈없는 데이터의 적재. 순서가 있는 데이터의 모임. 순차성을 보장하지 못하기 때문에 special locality 보장이 어렵지 않아서 cash hit이 어렵다(,,,,,)

![Untitled](./javastudy1/Untitled%204.png)

ArrayList: 배열 이용해서 리스트 구현한 것. 인덱스 값을 기준으로 **어디든** 한번에 참조 가능하다. 조회 기능에 성능이 뛰어나다. ArrayList Object는 ArrayList의 size를 나타내는 **`capacity`** 인스턴스 변수를 가지고 있다. ArrayList에 요소들이 더해지면 capacity도 자동적으로 늘어난다. 설정한 capacity보다 많은 객체가 들어오면, 배열 크기를 **1.5배** 증가시킨다. ArrayList의 Default 저장용량은 10. `이 자동 resize 때문에 성능을 낮출 것`ArrayList는 `primitive data types(int, float, double etc)을 가질 수 없다`. 오직 Object만을 가질 수 있다.

```
List<Element> elementList = new ArrayList<>();
iterator.forEachRemaining(elementList::add);
```

LinkedList: 양방향 포인터 구조로 데이터의 삽입/삭제가 빈번할 경우 위치 정보만 수정하면 되기 때문에 큐, 양방향 큐 등을 만들기 위한 용도로 쓰인다.

![Untitled](./javastudy1/Untitled%205.png)

![Untitled](./javastudy1/Untitled%206.png)

# Chpater06 객체지향 프로그래밍1

# 객체지향언어

객체지향 기본 개념: 실제 세계는 사물(객체)로 이루어져 있으며, 발생하는 모든 사건들은 사물간의 상호작용이다. 실제 사물 속성,기능을 분석한 다음 데이터(변수)와 함수로 정의함으로써 많은 시간과 비용을 절약할 수 있었다.

객체지향언어의 주요 특징

1. 코드의 재사용성이 높다.
2. 코드의 관리가 용이하다.
   관계를 이용해서 적은 노력으로 쉽게 코드 변경이 가능하다.
3. 신뢰성이 높은 프로그래밍을 가능하게 한다.
   제어자와 메서드를 이용해서 데이터를 보호하고 올바른 값을 유지하도록 하며, 코드의 중복을 제거하여 코드의 불일치로 인한 오동작을 방지할 수 있다.

## 클래스와 객체

![Untitled](./javastudy1/Untitled%207.png)

클래스는 객체를 정의해놓은 것이며, 객체를 생성하는데 사용된다. 객체는 실제로 존재하는 것으로 사물 또는 개념이며, 객체가 갖는 기능과 속성에 따라 용도가 다르다.

## 객체와 인스턴스

클래스로부터 `객체를 만드는 과정`을 클래스의 `인스턴스화`라고 하며, 클래스로부터 만들어진 `객체`를 그 클래스의 `인스턴스`라고 한다.

객체의 구성요소

:속성은 변수로, 기능은 메서드

인스턴스 생성과 사용

```java
//인스턴스화, tv라는 참조변수 사용
Tv tv = new Tv();
//인스턴스 사용, 멤버변수 channel에 값 저장
tv.channel = 3;
```

인스턴스는 참조변수를 통해서만 다룰 수 있으며, 참조변수의 타입은 인스턴스의 타입과 일치해야 한다. 같은 클래스여도 각 인스턴스의 속성(멤버변수)는 서로 다른 값을 유지할 수 있으며, 메서드의 내용은 모든 인스턴스에 대해 동일하다.

참조변수와 인스턴스의 관계

![Untitled](./javastudy1/Untitled%208.png)

이렇듯, 둘 이상의 참조변수가 하나의 인스턴스를 가리키는(참조하는) 것은 가능하다. 하지만 하나의 참조변수로 여러 개의 인스턴스를 가리키는 것은 가능하지 않다

## 객체 배열

```java
Tv tv1, tv2, tv3;

Tv[] tvArr = new Tv[3];
tvArr[1] = new Tv();
tvArr[2] = new Tv();
tvArr[3] = new Tv();

Tv[] tvArr = { new Tv(), new Tv(), new Tv() };
```

## 클래스의 또 다른 정의

1.  클래스: 데이터와 함수의 결합

    ![Untitled](./javastudy1/Untitled%209.png)

    - 변수: 하나의 데이터 저장 가능한 공간
    - 배열: 같은 타입 여러 데이터 저장 가능한 공간
    - 구조체: 타입 상관 없이 관련된 데이터 저장 가능한 공간
    - 클래스: 데이터와 함수의 결합(구조체 + 함수)

2.  클래스: 사용자 정의 타입
    서로 관련된 변수들을 묶어서 하나의 타입으로 새로 추가하는 것
    ![Untitled](./javastudy1/Untitled%2010.png)

        ex) 아래로 갈수록 시분초, 시분초 각 3개, 시분초 각 n개를 다룸을 알수 O. 오른쪽으로 갈수록 비객체지향적코드 → 객체지향적코드

# 변수와 메서드

![Untitled](./javastudy1/Untitled%2011.png)

![Untitled](./javastudy1/Untitled%2012.png)

클래스 변수는 인스턴스 변수 앞에 static을 붙이기만 하면 된다. 클래스 변수는 모든 인스턴스가 공통된 저장공간을 공유하게 한다. 인스턴스 생성하지 않아도 언제든 사용 가능하다. 클래스가 메모리에 올라갈 때 생성되어 프로그램이 종료될 때까지 유지된다.

## 클래스 변수와 인스턴스 변수

![Untitled](./javastudy1/Untitled%2013.png)

![Untitled](./javastudy1/Untitled%2014.png)

예시를 들어보면, 무늬와 숫자는 인스턴스변수, 폭과 높이는 클래스변수이다. 한 인스턴스 c1에서 폭값을 바꾸면 클래스 변수이기 때문에 다른 인스턴스 c2의 폭값도 바뀐다.(같은 저장공간 참조)

**요약**) 인스턴스변수는 인스턴스가 생성될 때마다 생성되므로 인스턴스마다 각기 다른 값을 유지할 수 있지만, 클래스변수는 모든 인스턴스가 하나의 저장공간을 공유하므로 항상 공통된 값을 갖는다.

그래서 클래스 변수가 Method, 인스턴스 변수가 Heap에 있다!

## 메서드

특정 작업을 수행하는 일련의 문장들을 묶은 것. 메서드를 내부가 보이지 않는 블랙박스라고도 한다. 입력과 출력만 알면 되기 때문이다.

메서드를 사용하는 이유

1. 높은 재사용성
2. 중복된 코드 제거
3. 프로그램의 구조화(분리)

메서드의 선언, 선언부, 구현부, 메서드의 이름, 반환타입, 반환값, return 문, 지역변수 등 메서드의 예시에서 확인할 수 있다.

![Untitled](./javastudy1/Untitled%2015.png)

호출은 메서드 이름(인자들)로 사용하고, add(long a, long b)여도 add(1,2) int가 사용될 수 있는 것처럼 자동형변환이 가능한 값을 지정해야 한다.

## JVM의 메모리 구조

![Untitled](./javastudy1/Untitled%2016.png)

- 메서드가 호출되면 수행에 필요한 메모리를 스택에 할당받는다.
- 메서드가 수행을 마치면 사용했던 메모리를 반환한다.
- 호출스택의 제일 위에 있는 메서드가 현재 실행중인 메서드다.
- 아래에 있는 메서드가 바로 위의 메서드를 호출한 메서드다.

## 기본형 매개변수와 참조형 매개변수

▶ 기본형(Primitive) 매개변수 – 변수의 값을 읽기만 할 수 있다.(read only)
→ d.x를 인자로 넣어주었을 때 x의 값이 1000으로 변경되지만 x는 스택에서 제거됨

![Untitled](./javastudy1/Untitled%2017.png)

▶ 참조형(Reference) 매개변수 – 변수의 값을 읽고 변경할 수 있다.(read & write)
→ d가 넘겨져서 그 주소값으로 x에 접근이 가능. d의 x값 변경 후 d는 스택에서 제거됨

![Untitled](./javastudy1/Untitled%2018.png)

- 여기서 퀴즈! 틀린 부분은?
  배열을 넣어도 값이 잘 바뀌는 걸 알 수 있다. Data클래스 타입도 참조 변수로 같은 결과를 얻는다. 간단히 처리할 때는 별도의 클래스를 선언하는 것보다 이렇게 배열을 사용할 수 있다

  ```java
  class ReferenceParamEx2 {
  	public static void main(String[] args)
    {
  		int[] x = {10};
  		System.out.println("main() : x = " + x[0]); //10

  		change(x);
  		System.out.println("After change(x)");
  		System.out.println("main() : x = " + x[0]); //1000
  	}

  	void change(int[] x) {
  		x[0] = 1000;
  		System.out.println("change() : x = " + x[0]); //1000
  	}
  }
  ```

  _static void change void 앞에 static이 사용되어야 함. static void main에서 사용되기 때문.
  (뒤에서 더 자세히 다룰 예정)_
  실행결과: [https://ideone.com/xUVB0h](https://ideone.com/xUVB0h)
  ![Untitled](./javastudy1/Untitled%2019.png)

## 재귀 호출(recursive call)

```java
void method(){
	method();
}
```

: 메서드 내에서 자기자신을 반복적으로 호출하는 것이다. `call by value`를 통해 복사된 값을 작업한다. 자기 자신을 호출하기 때문에 `조건문`이 없으면 무한루프에 빠진다. → 반복문으로 작성 가능

![Untitled](./javastudy1/Untitled%2020.png)

반복문은 같은 문장을 계속 반복하는거지만, 메서드를 호출하는 건 매개변수 복사, 복귀할 주소 저장 등의 과정이 추가로 필요해서 시간이 더 걸린다. `비효율적이지만 간결함` 때문에 사용

- 퀴즈
  근데 만약에 factorial(0)이 호출되면 어떻게 될까? 또는 100,000과 같은 큰 수이면 어떻게 될까?
  _0인 경우 1이 아니니까 else문으로 빠지니까 계속 재귀호출만 일어날 것. 그래서 메서드가 종료되지 않으므로 스택에 계속 데이터가 쌓인다. → `스택 오버플로우 에러`가 발생한다. 유효성 검사 필요_
- 아래의 결과가 나오도록 하려면 하는 코드 한줄을 짜보자!
  [https://ideone.com/Mtlq0x](https://ideone.com/Mtlq0x)
  ```java
  a =    1
  a =   10
  a =  100
  a = 1000
  ```
  ```java
  for(int i = 0; i < 4; i++){
  	//
  }
  ```

## 클래스 메서드(static)와 인스턴스 메서드

메서드 앞에 static이 붙어있는 건? 클래스 메서드

붙어있지 않은 건? 인스턴스 메서드

- 클래스 메서드(static)
  ‘클래스이름.메서드이름’을 통해 호출이 가능하다. 인스턴스변수나 인스턴스메서드와 관련없는 작업을 하며 메서드 내에서 `인스턴스변수를 사용할 수 없`다. 아래 예시를 보면 `인스턴스 메서드를 호출할 수 없`다는 것이 보인다.
- 인스턴스 메서드
  인스턴스 생성 후, ‘참조변수.메서드이름()’으로 호출한다. 인스턴스변수나 인스턴스메서드와 관련된 작업을 하며, `메서드 내에서 인스턴스 변수를 사용할 수 있`다. 아래 예시를 보면 `static, 인스턴스 메서드 모두 호출 가능`하다.

      ![Untitled](./javastudy1/Untitled%2021.png)

      ![Untitled](./javastudy1/Untitled%2022.png)

- 멤버 변수 중 모든 인스턴스에 공통으로 사용되는 것에는 static을 붙인다.
- 클래스 변수(static 변수)는 인스턴스를 생성하지 않아도 사용할 수 O
- 이유? 클래스변수는 클래스가 메모리에 올라갈 때 이미 자동적으로 생성되기 때문
- 클래스 메서드(static 메서드)는 인스턴스 변수 사용 불가능

  ```java
  int iv = 10;
  static int cv2 = iv; //에러! 인스턴스 변수 사용 불가능!

  static void staticMethod1(){
  	System.out.println(iv); //에러! 인스턴스변수 사용 불가능
  	Member m = new Member();
  	System.out.println(m.iv); //가능. 객체 생성 후 호출했기 때문에
  }
  ```

  - 이유? 인스턴스 변수는 인스턴스가 있어야 사용할 수 있는데 클래스 메서드는 인스턴스 생성 없이 사용할 수 있으므로!

- 메서드 내에서 인스턴스 변수를 사용하지 않는다면 static 붙이는 걸 고려한다.
- 이유? 메서드 호출시간이 짧아진다. 호출되어야 할 메서드를 찾는 과정 때문에 시간이 더 걸릴 수 있다. static을 붙이면 그 시간을 줄일 수 있다.

## 오버로딩

하나의 클래스에 같은 이름의 메서드를 여러 개 정의하는 것.
overload - vt. 과적하다. 부담을 많이 지우다.

조건

- 메서드 이름이 같아야 한다.
- 매개변수의 개수 또는 타입이 달라야 한다.
- `반환타입은 오버로딩을 구현하는데에 아무런 영향을 주지 않`는다. 이런 경우 00 is already defined 메시지가 나타나며 오버로딩으로 간주되지 않는다.

퀴즈

- add(int a, long b), add(long a, int b)는 오버로딩으로 간주될까? _O_

### 오버로딩의 장점

![Untitled](./javastudy1/Untitled%2023.png)

오버로딩의 예시로는 println메서드가 있다. 그런데 오버로딩 대신 println, printlnBoolean, printlnChar, printDouble, ... 이런 식으로 사용한다고 가정해보자. 그럼 메서드를 사용하는 입장에서는 저걸 다 기억해야돼서 부담이 된다. 이 때문에 오버로딩의 경우 기억하기 쉽고 이름도 짧게 할 수 있어서 오류의 가능성을 줄일 수 있다. 그리고, 메서드의 이름을 절약할 수 있다.

퀴즈
”결과: ” + 6L을 println하면 어떻게 될까?

```java
int result = mm.add(3, 3); //6L
System.out.println("결과: " + result); //결과: 6
```

### 가변인자와 오버로딩

JDK1.5부터 매개변수 인자를 동적으로 지정해줄 수 있게 되었다. 가변인자는 매개변수 중, 제일 마짖막에 선언해야 한다. 안 그러면 컴파일 에러가 발생하는데, 가변인자인지 아닌지를 구분할 방법이 없기 때문에 허용하지 않는다.

```java
//가변인자
public PrintStream printf(String format, Object... args) {...}
//에러
public PrintStream printf(Object... args, String format) {...} //ERROR!
```

문자열을 하나로 결합할 때에는 아래처럼 사용할 수 있다. 가변인자는 내부적으로 배열을 이용한다. 가변인자가 선언된 메서드를 호출할 때마다 배열이 새로 생성되기 때문에 꼭 필요한 경우에만 가변인자를 사용하자.

```java
//문자열을 하나로 결합
System.out.println(cancatenate("a"));
System.out.println(cancatenate("a", "b"));
System.out.println(cancatenate(new String[]{"A", "B"}));

//구분자 사용
System.out.println(cancatenate("-", new String[]{"100", "200", "300"}));
// **여기서 new String[]은 생략 불가능하다 ** "-", "100", "200" 도 컴파일 에러가 발생한다.
// 오버로딩된 메서드가 구분되지 않아서이다.

그런데 String.join(", ", arr); 을 사용하는 게 나을 수도 있을 것 같다.
```

# 생성자

인스턴스가 생성될 때마다 호출되는 ‘**인스턴스 초기화 메서드**’이다. 인스턴스 변수의 초기화 또는 인스턴스 생성시 수행할 작업에 사용한다.

1. 생성자의 이름은 클래스 이름과 같아야 한다.
2. 생성자는 리턴값이 없다.

![Untitled](./javastudy1/Untitled%2024.png)

사실 `모든 클래스`에는 `반드시` `하나 이상의 생성자`가 정의되어 있어야 한다. 클래스에 생성자를 정의하지 않고도 인스턴스를 생성하고 있었던 이유는 ‘`기본 생성자`’ 덕분! 컴파일 시에 클래스에 생성자가 하나도 없으면 컴파일 시에 자동으로 기본생성자를 추가하여 컴파일 한다.

![Untitled](./javastudy1/Untitled%2025.png)

Data1은 생성자가 없어서 에러가 발생하지 않지만, Data2는 매개변수가 있는 생성자가 있어서 기본 생성자가 없다는 걸 알 수 있다. 그래서 에러가 발생한다 → 컴파일러가 자동적으로 기본 생성자를 추가해주는 경우는, `클래스에 생성자가 하나도 없을 때`라는 것

![Untitled](./javastudy1/Untitled%2026.png)

생성자를 사용할 때는 위에 사진의 오른쪽처럼 사용하는 것이 더 간결하고 직관적이다.

## 생성자에서 다른 생성자 호출 - this(), this

- this(): 다른 생성자 호출. 같은 클래스의 다른 생성자를 호출할 때 사용한다.
  생성자의 이름으로 클래스이름 대신 this를 사용한다. Card(a,b,c)로 하면 에러가 나타난다. `또한`, 한 생성자에서 다른 생성자를 호출할 때는 `반드시 첫줄에서만 호출`이 `가능`하다. 그래서 주석처리한 걸로 하면 에러가 나타난다.
  ![Untitled](./javastudy1/Untitled%2027.png)
- this: 참조변수 this
  인스턴스 자신을 가리키는 참조변수이다. 인스턴스의 주소가 저장되어있다. this를 사용할 수 있는 것은 인스턴스 변수이다. 사실 생성자를 포함한 모든 인스턴스 메서드에는 자신이 관련된 인스턴스를 가리키는 참조변수 ‘this’가 지역변수로 숨겨진 채로 존재한다. (static메서드는 인스턴스와 관련 없는 작업을 하므로 정보가 필요 X)
  ![Untitled](./javastudy1/Untitled%2028.png)

### 생성자를 이용한 인스턴스의 복사

똑같은 속성값을 갖는 독립적인 인스턴스가 하나 더 만들어진다.

```java
Car(){ this("white", "auto", 4); }

Car c1 = new Car();
Car c2 = new Car(c1);
c1.color = "red";
//c2의 color는? "white"
```

# 변수의 초기화

변수를 선언하고 처음으로 값을 저장하는 것이다. 지역변수는 사용하기 전에 반드시 초기화해야 한다.

```java
int x;
int y = x; //인스턴스 변수 x는 초기화 안해도 자동적으로 기본값 0으로 초기화된다.

void method(){
	int i;
	int j = i; //ERROR 지역변수 초기화도 안 하고 사용하니까 에러
}
```

- 멤버변수(클래스변수와 인스턴스변수)와 배열의 초기화는 선택적이지만 지역변수의 초기화는 필수적이다.

![Untitled](./javastudy1/Untitled%2029.png)

### 멤버 변수의 초기화 방법

1.  명시적 초기화
    : 변수를 선언과 동시에 초기화하는 것이다. 복잡한 초기화 작업 필요할 때 사용 가능하다.
    `java class Car{ int door = 4; //기본형 변수 초기화 Engine e = new Engine(); //참조형 변수 초기화 ... } `
2.  생성자

    ![Untitled](./javastudy1/Untitled%2030.png)

3.  초기화 블럭

    ```java
    class InitBlock{
    	static { /* 클래스 초기화 블럭 */ }
    	{ /* 인스턴스 초기화 블럭 */ }
    	...
    }
    ```

    초기화 블럭 내에는 메서드처럼 조건문, 반복문, 예외처리구문 등을 자유롭게 사용할 수 있다. 명시적 초기화만으로는 부족한 경우 초기화 블럭을 사용한다.

    - 클래스 초기화 블럭: 클래스 변수의 복잡한 초기화에 사용된다. 클래스가 `메모리에 처음 로딩될 때` 한번만 `수행, 초기화`된다.
    - 인스턴스 초기화 블럭: 인스턴스 변수의 복잡한 초기화에 사용된다. `인스턴스를 생성할 때`마다 `수행, 초기화`된다. `생성자보다 인스턴스 초기화 블럭이 먼저 수행`된다.
      ![Untitled](./javastudy1/Untitled%2031.png)
      → 인스턴스 변수의 초기화: 주로 생성자 사용
      → 인스턴스 초기화 블럭: 모든 생성자에서 공통적으로 수행돼야 하는 코드를 넣는데 사용
      멤버변수의 초기화 시점
      ```java
      클래스변수의 초기화순서:  기본값 -> 명시적초기화 -> 클래스 초기화 블럭
      인스턴스변수의 초기화순서: 기본값 -> 명시적초기화 -> 인스턴스 초기화 블럭 -> 생성자
      ```

    퀴즈

    - 생성자랑 인스턴스 초기화 블럭 중에 뭐가 먼저 수행될까? _인스턴스 초기화 블럭_
    -

array와 arrayList의 차이점은?

ArrayList와 LinkedList의 차이가 무엇인가요?

Array와 LinkedList의 차이가 무엇인가요?

출처: [https://velog.io/@humblechoi/자료구조-Array-vs-ArrayList](https://velog.io/@humblechoi/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-Array-vs-ArrayList)
