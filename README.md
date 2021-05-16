# Brunch - Front

- React.js
- Styled-components
- create-react-app

## How to Run

### **App 실행**

- local, dev

```css
yarn start
```

## **Basic rules**

### **package install**

`yarn` 을 사용하여 install 하기 때문에 `npm install` 을 사용하는 것을 **금지**한다

## **Code Convention**

### **Dir 구조**

```tsx
brunch-front             
├─ public                
│  └─ index.html         
├─ src                   
│  ├─ assets // svg 파일들은 모두 assets/index.js 에 default로 선언해준다.             
│  │  └─ index.js               
│  ├─ components // 도메인이나 역할 분류에 따라 디렉토리 생성         
│  │  ├─ common // 디렉토리는 lower Camel Case, 컴포넌트는 Upper Camel Case          
│  │  │  ├─ Footer.js    
│  │  │  └─ Header.js    
│  │  ├─ main            
│  │  ├─ search          
│  │  └─ index.js        
│  ├─ pages // 라우터 구조에 따라 생성, 하위 컴포넌트 이름은 Page라는 접미어를 붙인다.            
│  │  ├─ Main.js         
│  │  ├─ Search.js       
│  │  └─ index.js        
│  ├─ styles // style 관련된 내용             
│  │  ├─ GlobalStyle.js  
│  │  └─ theme.js        
│  ├─ App.js // App.js에는 라우팅 경로를 작성한다. 로직이 되는 별도의 코드는 작성 금지           
│  └─ index.js // index.js는 Context Provider로서만 작동하도록 한다.
├─ README.md             
├─ package.json                
└─ yarn.lock
```

## Git Commit

### **Types**

- **feat:** 새로운 기능 추가
- **fix:** 버그 수정
- **docs:** 도큐멘테이션 변경
- **style:** 코드에 지장 없는 스타일 변경(공백, 세미콜론 추가, etc)
- **refactor:** 기능적으로나 버그를 수정한 리펙토링
- **perf:** 퍼포먼스 향상을 위한 코드 추가
- **test:** 테스트코드 추가
- **chore:** 빌드 프로세스 또는 도큐먼트 생성과 같은 툴 및 라이브러리 변경

### **Example**

### **쇼핑(아이템 선택, 장바구니 담기 등) app을 개발한다고 가정,**

- **feat:** 장바구니에 아이템 담기 기능 추가
- **fix:** 장바구니에 아이템이 안담기는 버그 수정
- **docs:** 프로젝트 readme.md 변경 등
- **style:** 코드에 세미콜론을 빼먹음, 연산자 사이에 공백 추가 등
- **refactor:** 장바구니 담기 코드가 비효율적이어서 효율적인 코드로 변경(내부적으로 변경, 외부적으론 차이가 없음)
- **perf:** 장바구니 담기는 속도가 너무 느려서 최적화 등
- **test:** 장바구니에 잘 담기는지에 대한 테스트 코드 작성
- **chore:** redux를 mobx로 교체 등

## Style Guide

### **size 단위 규칙**

- 모든 size 단위는 rem만 사용한다. root(`GlobalStyle.js`)에 `font-size: 10px`을 지정하여, 소수점 한자리를 당겨서 사용한다. 가령, `width: 24px` 인 경우 다음과 같이 사용한다.

```css
.circle {
	width: 2.4rem;
	/* same as width: 24px; */
}
```

### theme.js

- 해당 파일에 프로젝트의 color를 정의하고, 반응형 사이즈를 정의하여 개발시 다음과 같은 방법으로 적용한다.

```jsx
const MainWrap = styled.div`
	width: 10rem;
	color: ${({theme})=>theme.color.white};
	${({theme})=>theme.media.tablet`
		width: 5rem;
	`}
`
// 다음과 같은 방법으로 반응형을 구현한다.
```

## ESlint + Prettier 설정

1. eslint + prettier vscode extension 설치
2. setting.json (`command + ,`) 에서 `formatOnSave: true` 체크 하거나 직접 수정

    ```jsx
    "editor.formatOnSave": true,
    ```

3. 다음과 같은 플러그인 devDependency로 설치

    ```jsx
    yarn add -D eslint-config-prettier eslint-plugin-prettier prettier
    // eslint-config-prettier : ESLint와 Prettier에 중복되는 Formatting 룰 삭제
    // eslint-plugin-prettier : ESLint에 Prettier의 Formatting 기능 추가
    ```

4. prettier 설정 변경시엔 개발 톡방에 이야기하고 변경할 것

    [https://prettier.io/docs/en/options.html](https://prettier.io/docs/en/options.html)

