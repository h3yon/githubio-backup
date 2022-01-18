---
title: "[Java]자바의 정석 Chapter9 java.lang"
excerpt: "[Java]자바의 정석 Chapter9 java.lang"

toc: true
toc_sticky: true

categories:
  - Java
tags:
  - Java
---

# 자바의정석 챕터9

# java.lang 패키지

자바 프로그래밍에 있어 가장 기본이 되는 클래스를 포함하고 있는 패키지이다. 그래서 java.lang의 클래스들은 import문 없이도 사용할 수 있게 되어 있다.

## Object 클래스

![Untitled](/assets/images/javastudy3/Untitled.png)

notify: 깨우다, wait(), finalize(): 객체 소멸 시 자동으로 호출 등 오직 11개의 메서드만 가진다. 몇개의 메서드만 보자.

### equals()

두 객체의 같고 다름을 참조변수의 값으로 판단한다. 그래서 value 값을 비교하고 싶다면 아래처럼 equals를 오버라이딩해서 내용을 비교하도록 할 수 있다.

![Untitled](/assets/images/javastudy3/Untitled%201.png)

### hashCode()

객체의 해시코드(int타입의 정수)를 반환하는 메서드(해시함수)로 다량의 데이터를 저장&검색하는 해싱기법에 사용된다.

<aside>
💡 해시함수
찾고자 하는 값을 입력하면 그 값이 저장된 위치를 알려주는 해시코드를 반환

</aside>

hasCode 메서드는 객체의 주소값으로 해시코드를 만들어 반환하기 때문에 32bit JVM에서 서로 다른 두 객체는 결코 같은 해시코드를 가질 수 없었다. 64bit에서는 8byte주소값으로 해시코드(4Byte)를 만들기 때문에 해시코드가 중복될 수 있다.

인스턴스변수값으로 객체의 같고 다름을 판단하는 경우라면 equals 뿐만 아니라 hashCode 메서드도 적당히 오버라이딩해야 한다. equals()의 결과가 true인 두 객체의 hash code는 같아야하기 때문이다.

![Untitled](/assets/images/javastudy3/Untitled%202.png)

System.identityHashCode(Object obj)는 Object 클래스의 hashCode 메서드처럼 객체의 주소값으로 해시코드를 생성하기 때문에 모든 객체에 대해 항상 다른 해시코드값을 반환할 것을 보장한다. 그래서 아래처럼 해시코드는 같지만 서로 다른 객체라는 것을 알 수 있다.

![Untitled](/assets/images/javastudy3/Untitled%203.png)

### toString()

마찬가지로 원하는 toString을 위해선 오버라이딩해야한다. 그냥 호출하면 클래스 이름에 16진수의 해시코드를 얻게 된다. Object 클래스에서 toString()은 Public이기 때문에 오버라이딩할 때 public이어야 한다.

![Untitled](/assets/images/javastudy3/Untitled%204.png)

### clone()

객체 자신을 복제(clone)해서 새로운 객체를 생성하는 메서드이다. Object클래스에 정의된 clone()은 인스턴스변수의 값만을 복제한다. 그래서 참조타입의 인스턴스 변수가 있는 클래스는 완전한 인스턴스 복제가 이루어지지 않는다.
ex)배열은 참조변수라서 복제된 인스턴스도 같은 배열의 주소를 가져서 복제된 인스턴스의 작업이 원래의 인스턴스에 영향을 미치게 된다. → 오버라이딩해서 새로운 배열 생성하고 배열의 내용을 복사하도록 해야 한다.

![Untitled](/assets/images/javastudy3/Untitled%205.png)

Cloneable인터페이스를 구현한 클래스의 인스턴스만 복제할 수 있다. clone()을 오버라이딩하면서 protected(Object) → public으로 변경해야 한다. 그래야 상속관계가 없는 다른 클래스에서 clone() 사용 가능

인스턴스변수가 참조형일 때, 참조하는 객체도 복제되게 오버라이딩해야함.

![Untitled](/assets/images/javastudy3/Untitled%206.png)

위에 부분은 각각 다른 Point 인스턴스를 가리킴. 완전한 복제! → 깊은 복사
얕은 복사는 위에 초록색 박스를 안 넣으면 된다. 그럼 위에 표 그림에서 왼쪽을 가리킨다. 그래서 어느 한쪽이 바뀌면 다른 한쪽도 바뀐다. 원본 객체의 값만 그대로 복사하는 것이다.

### getClass()

자신이 속한 클래스의 Class객체를 반환하는 메서드이다. 클래스당 1개만 존재한다. 클래스파일이 ‘00000’에 의해 메모리에 올라갈 때 자동으로 생성된다.

클래스로더는 실행 시 필요한 클래스를 동적으로 메모리에 로드하는 역할을 한다. 클래스 객체가 메모리에 있는지 확인하고, 있으면 객체의 참조를 반환하고 없으면 클래스패스에 지정된 경로를 따라 클래스 파일을 찾는다. 못 찾으면 Exception. 찾으면 Class파일을 읽어서 Class객체로 변환한다.

![Untitled](/assets/images/javastudy3/Untitled%207.png)

차례대로 생성된 객체로부터 얻는 방법, 클래스 리터럴(\*.class)로부터 얻는 방법, 클래스 이름으로부터 얻는 방법이다. forName()은 특정 클래스 파일 ex)DB Driver를 메모리에 올릴 때 주로 사용 /
오른쪽은 객체 생성할 때이다.

동적으로 객체를 생성하고 메서드를 호출하는 방법에 대해 더 알고 싶다면 ‘Reflection API’를 검색하면 된다.

## String 클래스

문자형 배열(char[])과 그에 관련된 메서드들이 정의되어 있다.

![Untitled](/assets/images/javastudy3/Untitled%208.png)

한번 생성되면 read-only이고 변경할 수 없다.
그래서 a+b를 하면 새로운 String 인스턴스가 생성된다. → Immutable

![Untitled](/assets/images/javastudy3/Untitled%209.png)

Quiz. 아래 코드를 보고 ??? 부분을 유추해보자

```java
class StringEx1 {
	public static void main(String[] args) {
		String str1 = "abc";
		String str2 = "abc";

		System.out.println("String str1 = \"abc\";");
		System.out.println("String str2 = \"abc\";");

		System.out.println("str1 == str2 ?  " + (str1 == str2)); //???
		System.out.println("str1.equals(str2) ? " + str1.equals(str2)); //???
		System.out.println();

		String str3 = new String("\"abc\"");
		String str4 = new String("\"abc\"");

		System.out.println("String str3 = new String(\"abc\");");
		System.out.println("String str4 = new String(\"abc\");");

		System.out.println("str3 == str4 ? " + (str3 == str4)); //???
		System.out.println("str3.equals(str4) ? " + str3.equals(str4)); //???
	}
}
```

//true, true, false, true

### 문자열 리터럴

소스파일에 포함된 모든 문자열 리터럴은 컴파일 시에 클래스 파일에 저장된다. 같은 내용의 문자열 리터럴은 한번만 저장된다. 문자열 리터럴도 String 인스턴스이고, 한번 생성하면 내용을 변경할 수 없으니 하나의 인스턴스를 공유하면 되기 때문이다.

```java
String s1 = "AAA";
String s2 = "AAA";
String s3 = "AAA";
//그럼 s1, s2, s3 모두 같은 주소를 가리킨다.
```

클래스 파일에는 소스파일에 있던 모든 리터럴의 목록이 있다. 클래스 파일이 클래스 로더에 의해 메모리에 올라갈 때, 리터럴들이 JVM내에 있는 ‘상수 저장소’에 저장된다.

### 빈문자열

Quiz?

- 길이가 0인 배열이 존재할 수 있을까? /////////////////////////////////////////////////////// O
  String s = “”;가 있을 때 s가 참조하고 있는 String 인스턴스는 내부에 new char[0]으로 길이가 0임
- char의 기본값은?? /////////////////////////////////////////////////////////////////////////////////////// ‘\u0000’
  저 기본값 대신 보통 공백으로 초기화 함 ‘ ‘

### String 클래스의 생성자와 메서드

![Untitled](/assets/images/javastudy3/Untitled%2010.png)

![Untitled](/assets/images/javastudy3/Untitled%2011.png)

### join()과 StringJoiner

join()은 여러 문자열 사이에 구분자를 넣어 결합한다.

```java
String alphabet = "A,B,C";
String[] arr = alphabet.split(",");
String str = String.join("\n", arr);
System.out.println(str); // A-B-C
```

StringJoiner클래스로 문자열을 결합할 수도 있다.

```java
StringJoiner sj = new StringJoiner(",", "[", "]");
String[] alphabet = { "a", "b", "c" };

for(String s : strArr)
	sj.add(s.toUpperCase());

System.out.println(sj.toString()); //[A,B,C]
```

### 유니코드의 보충문자

매개변수 타입이 char, int일 때가 있는데, 유니코드는 원래 16비트 문자체계였는데 20비트로 확장하게 되었다. 그래서 하나의 문자를 int타입으로 다룰 수밖에 없다. 이 추가된 문자들을 ‘보충문자’라고 한다. → 사용할 일이 거의 없다.

**\*\***예시 알아오기**\*\*\***

### 문자 인코딩 변환

getBytes를 사용하면 문자 인코딩을 다른 인코딩으로 변경할 수 있다.

```java
byte[] utf8_str = "가".getBytes("UTF-8"); //문자열 -> UTF-8
String str = new String(utf8_str, "UTF-8"); //byteqoduf -> 문자열
```

### String.format()

```java
String str = String.format("%d + %d = %d이다", 3, 5, 3+5);
```

### 기본형 값을 String으로 변환

![Untitled](/assets/images/javastudy3/Untitled%2012.png)

### String을 기본형 값으로

![Untitled](/assets/images/javastudy3/Untitled%2013.png)

![Untitled](/assets/images/javastudy3/Untitled%2014.png)

parseInt, parseFloat는 공백/문자가 포함되어 있는 경우 예외가 발생할 수 있으므로 주의해야 한다. trim()을 습관적으로 같이 사용하기도 한다.

## StringBuffer 클래스와 StringBuilder 클래스

String처럼 문자형 배열(char[])을 내부적으로 가지고 있다. mutable하고 인스턴스를 생성할 때 버퍼(배열)의 크기를 충분히 지정해주는 것이 좋다(기본값: 16). String클래스와 달리 equals()를 오버라이딩하지 않았다.

- String: 변경 불가능
- StringBuffer: 변경 가능 - 문자열 편집 위한 버퍼를 가짐

StringBuffer 클래스 일부, 크기 변경 부분을 보면 아래와 같다.

```java
char newValue[] = new char[newCapacity];

System.arraycopy(value, 0, newValue, 0, count);
value = newValue;
```

### StringBuffer클래스의 생성자와 메서드

![Untitled](/assets/images/javastudy3/Untitled%2015.png)

![Untitled](/assets/images/javastudy3/Untitled%2016.png)

### StringBuffer의 비교

equals가 오버라이딩되어 있지 않아, ==/equals 결과가 같다. 근데 toString()은 오버라이딩되어있다. 그래서 아래처럼 비교한다.

```java
String s1 = sb.toString();
String s2 = sb2.toString();

System.out.println(s1.equals(s2)); //true
```

### StringBuilder

StringBuffer는 멀티스레드에 안전하도록 동기화되어있다. 동기화→StringBuffer의 성능을 떨어트린다.

멀티쓰레드로 작성된 프로그램이 아닌 경우, StringBuilder로 쓰레드의 동기화를 뺀 걸 사용하는 게 좋다.

- 근데 코드리뷰할 때 StringBuilder를 사용하라고 하는 건 그럼 성능 때문인가?? 요청이 별로 안 온다고 가정하고?

StringBuffer도 충분히 성능이 좋아서 성능 향상이 반드시 필요한 경우를 제외하고 StringBuilder로 굳이 바꿀 필요는 없다.

## Math.class

Math클래스의 메서드는 모두 static이다.

```java
import static java.lang.Math.*;
import static java.lang.System.*;

class MathEx1 {
	public static void main(String args[]) {
		double val = 90.7552;
		out.println("round("+ val +")=" + round(val));  // 반올림

		val *= 100;
		out.println("round("+ val +")=" + round(val));  // 반올림

		out.println("round("+ val +")/100  =" + round(val)/100);  // 반올림
		out.println("round("+ val +")/100.0=" + round(val)/100.0);  // 반올림
		out.println();
		out.printf("ceil(%3.1f)=%3.1f%n",  1.1, ceil(1.1));   // 올림
		out.printf("floor(%3.1f)=%3.1f%n", 1.5, floor(1.5));  // 버림
		out.printf("round(%3.1f)=%d%n",    1.1, round(1.1));  // 반올림
		out.printf("round(%3.1f)=%d%n",    1.5, round(1.5));  // 반올림, int
		out.printf("rint(%3.1f)=%f%n",     1.5, rint(1.5));   // 반올림, double
		out.printf("round(%3.1f)=%d%n",   -1.5, round(-1.5)); // 반올림, -1
		out.printf("rint(%3.1f)=%f%n",    -1.5, rint(-1.5));  // 반올림, -2.0
		out.printf("ceil(%3.1f)=%f%n",    -1.5, ceil(-1.5));  // 올림, -1.0
		out.printf("floor(%3.1f)=%f%n",   -1.5, floor(-1.5)); // 버림, -2.0
	}
}
```

### 예외를 발생시키는 메서드

1.8부터 아래 추가됨. 연산에서 발생 가능한 오버플로우를 감지하기 위한 것이다.

```java
int addExact(int x, int y)
int subtractExact(int x, int y)
int multiplyExact(int x, int y)
int incrementExact(int a)
int decrementExact(int a)
int negateExact(int a)
int toIntExact(long a)
```

오버플로우 발생 시 예외를 발생시킨다.

### 삼각함수와 지수, 로그

sqrt, pow 사용해서 삼각함수 구함. sin, cos 사용 가능함. toRadians(45)로 각도를 라디안으로 변환함. 45 = 파이/4 rad, toDegrees(atan2(a,b))로 하면 도로 변환됨.

### StrictMath 클래스

Math클래스는 최대한의 성능을 얻기 위해 JVM이 설치된 OS의 메서드를 호출해서 사용한다. 즉, OS에 의존적인 계산을 한다. OS마다 결과가 다를 수 있어서 성능을 포기하는 대신 OS와 상관 없이 같은 결과를 얻도록 하는 것이 StrictMath 클래스이다.

### Math 클래스 메서드

![Untitled](/assets/images/javastudy3/Untitled%2017.png)

## 래퍼 클래스

객체지향 개념에서 모든 건 객체로 다루어져야 한다. 기본형은 객체로 다루지 않는데 객체지향이 아니란 얘기를 듣는대신 **높은 성능**을 얻을 수 있었다.

때로는 기본형 변수도 어쩔 수 없이 객체로 다뤄야하는 경우가 있다. 그때 래퍼 클래스를 사용한다.

![Untitled](/assets/images/javastudy3/Untitled%2018.png)

Quiz. 아래와 같은 부분의 경우, 어떤 Exception이 발생할까?

```kotlin
Integer a = new Integer("1.0");
```

NumberFormatException

래퍼클래스는 모두 equals()가 오버라이딩되어 있어서 주소값이 아닌 객체가 가지고 있는 값을 비교한다. 오토박싱이 된다고 해도 Integer객체에 `비교연산자를 사용할 수 없`다. 대신 `compareTo()` 를 제공한다. toString()도 오버라이딩 되어 있다!

→ MAX_VALUE, MIN_VALUE, SIZE, BYTES, TYPE 등의 static 상수를 공통적으로 가지고 있다.

### Number 클래스

숫자를 멤버변수로 갖는 래퍼 클래스들의 조상이다. BigDecimal은 연산자의 역할을 대신하는 다양한 메서드를 제공한다.

![Untitled](/assets/images/javastudy3/Untitled%2019.png)

실제로 Number의 경우 숫자와 관련된 기본형으로 변환하여 반환하는 메서드들을 정의하고 있다.

![Untitled](/assets/images/javastudy3/Untitled%2020.png)

### 문자열을 숫자로 변환하기

```java
int i = new Integer("100").intValue();
int i2 = Integer.parseInt("100"); //int
Integer i3 = Integer.valueOf("100"); //Integer
```

parseByte, parseInt, parseLong들과 달리 valueOf는 Byte.valueOf, Short.valueOf를 사용할 수 있다. JDK1.5부터 도입된 ‘오토박싱’ 기능 때문에 반환값이 기본형일 때와 래퍼 클래스일 때의 차이가 없어졌다. 그래서 그냥 구별없이 valueOf()를 쓰는 것도 좋지만, 성능은 valueOf()가 조금 더 느리다.

```java
int i = Integer.valueOf("100"); //이것도 가능 오토박싱 생겨서
int i1 = Integer.parseInt("FF", 16); //진수 변환도 가능
```

### 오토박싱&언박싱

JDK1.5이전에는 기본형과 참조형 간의 연산이 불가능했다. 그러나 이젠 가능하다. 컴파일러가 자동으로 변환하는 코드를 넣어주기 때문이다.

```java
//불가능했던 코드
int i = 5;
Integer iObj = new Integer(7);
int sum = i + iObj;

//이제 가능해짐. 컴파일 후?
int i = 5;
Integer iObj = new Integer(7);
int sum = i + iObj.intValue();
```

래퍼 클래스의 객체로 자동 변환해주는 것을 ‘오토박싱’, 반대로 변환하는 것을 ‘언박싱’

```java
ArrayList<Integer> list = new ArrayList<Integer>();
list.add(10); //오토박싱 10 -> new Integer(10)

int value = list.get(0); //언박싱 new Integer(10) -> 10
```

컴파일 후 Integer.valueOf 혹은 new Long으로 오토박싱/언박싱을 해준다.

# 유용한 클래스

## java.util.Objects 클래스

null 비교는 아래처럼 할 수 있다.

```java
static boolean isNull(Object obj)
static boolean nonNull(Object obj)

static <T> T requireNonNull(T obj) //Null이면 에러
static <T> T requireNonNull(T obj, String message)
static <T> T requireNonNull(T obj, Supplier<String> messageSupplier)
```

Object 클래스에는 equals()만 있고, 대소비교를 위한 compare()이 없는 것이 좀 아쉬웠다. 그래서 Objects에는 compare()가 추가되었다. 비교대상이 같으면 0, 크면 양수, 작으면 음수를 반환한다.

```java
static int compare(Object a, Object b, Comparator c)

static boolean equals(Object a, Object b)
static boolean deepEquals(Object a, Object b)
```

Object클래스에 정의된 equals()가 왜 Objects 클래스에서도 있을까?

```java
// Object로 구현하는 equals()
if(a!= null && a.equals(b)){} //매개변수의 값이 null인지 확인 필요
// Objects의 equals()
if(Objects.equals(a, b)){} //매개변수의 값이 null인지 확인할 필요가 없다
```

Objects의 equals는 아래와 같은데, a와 b가 null이면 참을 반환한다는 게 좀 다르다.

```java
public static boolean equals(Object a, Object b){
	return (a==b) || (a!=null && a.equals(b));
}
```

deepEquals로 다차원 배열의 비교도 가능하다.

Objects의 toString()은 null검사도 한다. hashCode()도 내부적으로 널검사를 하고 hashCode()를 호출한다. 단, null일 때는 0을 반환한다.

```java
import java.util.*;
import static java.util.Objects.*;  // Objects클래스의 메서드를 static import

class ObjectsTest {
	public static void main(String[] args) {
		String[][] str2D   = new String[][]{{"aaa","bbb"},{"AAA","BBB"}};
		String[][] str2D_2 = new String[][]{{"aaa","bbb"},{"AAA","BBB"}};

		System.out.println("equals(str2D, str2D_2)="+Objects.equals(str2D, str2D_2)); //false
		System.out.println("deepEquals(str2D, str2D_2)="+Objects.deepEquals(str2D, str2D_2)); //true

		System.out.println("isNull(null) ="+isNull(null)); //true
		System.out.println("nonNull(null)="+nonNull(null)); //false
		System.out.println("hashCode(null)="+Objects.hashCode(null)); //0
		System.out.println("toString(null)="+Objects.toString(null)); //null
		System.out.println("toString(null, \"\")="+Objects.toString(null, "")); //

		Comparator c = String.CASE_INSENSITIVE_ORDER; //대소문자 구분 안하는 비교

    System.out.println("compare(\"aa\",\"bb\")="+compare("aa","bb",c)); //-1
	  System.out.println("compare(\"bb\",\"aa\")="+compare("bb","aa",c)); //1
	  System.out.println("compare(\"ab\",\"AB\")="+compare("ab","AB",c)); //0
	}
}
```

static import문을 사용해도 Object 클래스의 메서드와 이름이 같은 것들은 충돌이 난다. 즉 컴파일러가 구별을 못한다. 그럴 때는 클래스 이름을 붙여줄 수밖에 없다. Comparator가 있어서 그걸 사용해서 compare()을 호출한다.

## java.util.Random

```java
double randNum = Math.random();
double randNum = new Random().newxtDouble(); //위 문자와 동일

int num = (int)(Math.random()) * 6 + 1
```

뒷부분 더 다뤄와야 함
