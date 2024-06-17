# Architecture Design

건축 디자인 회사를 위한 웹 사이트입니다. 회사 소개, 프로젝트, 서비스, 연락처 등의 정보를 포함합니다.

## 프로젝트 설명

주요기능
- **홈페이지**: 회사 소개, 최신 프로젝트, 주요 서비스
- **회사 소개 페이지**: 회사의 역사, 팀 멤버 소개, 비전 및 목표
- **프로젝트 페이지**: 완료된 프로젝트, 진행 중인 프로젝트, 프로젝트 갤러리
- **서비스 페이지**: 제공하는 서비스 목록 및 상세 설명
- **연락처 페이지**: 회사 주소, 연락처 정보, 지도 표시, 문의 양식



## 설치 방법

이 프로젝트를 로컬 환경에서 실행하려면, 다음 단계를 따라주세요

1. 이 저장소를 클론합니다.
   ```bash
   git clone 
   ```
2. 프로젝트 디렉토리로 이동합니다.
   ```bash
   cd 
   ```
3. `index.html` 파일을 브라우저에서 엽니다.


## 사용 방법
웹 브라우저에서 `index.html` 파일을 열어 웹사이트를 확인할 수 있습니다.


## 사용 기술
- HTML
- CSS
- Modern JavaScript (ES6+)


## 프로젝트 구조

```
project/
│
├── index.html          # 홈페이지
│
├── about/
│   ├── about.html      # 회사 소개 페이지
│   ├── about.css       # 회사 소개 페이지 스타일
│   └── about.js        # 회사 소개 페이지 스크립트
│
├── projects/
│   ├── projects.html   # 프로젝트 페이지
│   ├── projects.css    # 프로젝트 페이지 스타일
│   └── projects.js     # 프로젝트 페이지 스크립트
│
├── services/
│   ├── services.html   # 서비스 페이지
│   ├── services.css    # 서비스 페이지 스타일
│   └── services.js     # 서비스 페이지 스크립트
│
├── contact/
│   ├── contact.html    # 연락처 페이지
│   ├── contact.css     # 연락처 페이지 스타일
│   └── contact.js      # 연락처 페이지 스크립트
│
├── common/
│   ├── css/
│   │   └── style.css   # 공통 스타일
│   │
│   ├── js/
│   │   └── main.js     # 공통 스크립트
│   │
│   └── img/            # 공통 이미지
├── .gitignore
├── README.md
└── LICENSE
```

- index.html: 웹사이트의 메인 페이지입니다.
- css/
   - styles.css: 웹사이트의 모든 스타일을 정의합니다.
- js/
   - scripts.js: 웹사이트의 모든 JavaScript 동작을 정의합니다.
- images/: 웹사이트에 사용할 이미지들을 저장합니다.
- fonts/: 웹사이트에 사용할 웹 폰트 파일들을 저장합니다.
- README.md: 프로젝트에 대한 설명과 설치 방법을 설명합니다.


## 규칙

#### 코딩 컨벤션

1. **파일 및 디렉토리 구조**
   - 파일명은 소문자와 하이픈(-)을 사용합니다. 예: `index.html`, `style.css`, `script.js`
   - 디렉토리명은 소문자와 하이픈(-)을 사용합니다.

2. **HTML**
   - 들여쓰기는 2칸을 사용합니다.
   - 속성명은 소문자를 사용하며, 값은 큰따옴표("")로 감쌉니다.
   - 자주 사용되는 HTML 구조를 주석으로 표시합니다.

3. **CSS**
   - 들여쓰기는 2칸을 사용합니다.
   - 클래스명은 소문자와 하이픈(-)을 사용합니다. 예: `.todo-item`, `.completed`
   - CSS 속성은 알파벳 순으로 정렬합니다.

4. **JavaScript**
   - 들여쓰기는 2칸을 사용합니다.
   - 변수명은 카멜케이스(camelCase)를 사용합니다. 예: `todoItem`, `completedTasks`
   - 함수명은 동사로 시작하며, 카멜케이스를 사용합니다. 예: `addTodoItem()`, `deleteTodoItem()`
   - 한 줄의 길이는 80자를 넘지 않도록 합니다.
   - ES6+ 문법을 사용합니다. 예: `const`, `let`, 화살표 함수 등

5. **주석**
   - 중요한 코드 블록에는 주석을 추가하여 설명합니다.
   - 주석은 코드 위에 추가하며, 여러 줄 주석을 사용합니다.

```javascript
/**
 * 할 일 목록에 새로운 할 일을 추가하는 함수
 * @param {string} todoText - 추가할 할 일 텍스트
 */
function addTodoItem(todoText) {
  // 할 일 추가 로직
}
```

#### git commit message 규칙

1. **커밋 메시지 구조**
- 제목: 50자 이내로 간결하게 작성
- 본문: 선택 사항, 변경 사항에 대한 자세한 설명
- 꼬리말: 이슈 트래킹 번호 (선택 사항)

2. **타입**
- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등 코드 변경이 없는 경우
- `refactor`: 코드 리팩토링 (기능 변경 없이 코드 구조 개선)
- `test`: 테스트 추가, 테스트 리팩토링
- `chore`: 빌드 업무, 패키지 매니저 설정 등

3. **예시**

```
feat(homepage): add hero section

Added hero section with background image and call-to-action button.
The section is responsive and adjusts to various screen sizes.

Resolves: #123
```


#### 규칙 설정
- 모든 기능 추가는 새로운 브랜치에서 작업합니다.
- 커밋 메시지는 명확하고 간결하게 작성합니다.
- 주요 변경 사항마다 PR(pull request)를 생성하고, 코드 리뷰를 받습니다.


## 기여 방법

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다.
   ```bash
   git checkout -b feature/새로운기능
   ```
3. 변경 사항을 커밋합니다.
   ```bash
   git commit -m 'Add 새로운 기능'
   ```
4. 브랜치에 푸시합니다.
   ```bash
   git push origin feature/새로운기능
   ```
5. 풀 리퀘스트를 생성합니다.


## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 `[LICENSE](./LICENSE)` 파일을 참고하세요.
