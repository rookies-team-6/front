# React 컴포넌트 설계 문서 템플릿
## 문서 정보
- **작성자**: [조우성]
- **작성일**: [2025-06-07]
- **버전**: [v1.0]
- **검토자**: [박아란, 성민주, 조우성]
---

## React 컴포넌트 개요

### 컴포넌트명
**[AnswerSearch]** 

### 목적 및 역할
- **주요 목적**: 대상(내 답변/팀 답변/북마크/전체)에 따른 응답에 대한 결과를 출력하는 기능 제공

### 기능 요구사항
- [ ] [기능 1: 질문에 대한 답변의 요약 내용 표시]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ v ] 기능 컴포넌트 [ ] 공통 컴포넌트
- **복잡도**: [ v ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ ] 복합 (100줄 이상)
- **상태 관리**: [ ] 로컬 상태만 [ ] Redux(Zustand) 연결 [ v ] 상태 없음


### 컴포넌트명
**[BoardRegistration]** 

### 목적 및 역할
- **주요 목적**: 게시판에 글을 등록하거나 이전에 등록한 글을 수정 또는 삭제하는 기능 제공

### 기능 요구사항
- [ ] [기능 1: `isEditMode`에 따라 등록 또는 수정 동작 분기 처리]
- [ ] [기능 2: 클릭 이벤트 처리(이동)]
- [ ] [기능 3: 기존 데이터(state)로 `defaultValues` 채움]
- [ ] [기능 4: 목록으로 돌아가기 버튼 제공]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ v ] 기능 컴포넌트 [ ] 공통 컴포넌트
- **복잡도**: [ ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ v ] 복합 (100줄 이상)
- **상태 관리**: [ ] 로컬 상태만 [ ] Redux(Zustand) 연결 [ v ] 상태 없음


### 컴포넌트명
**[BulletinBoard]** 

### 목적 및 역할
- **주요 목적**: 게시된 글의 리스트를 보여주는 게시판

### 기능 요구사항
- [ ] [기능 1: 서버에서 게시글 리스트를 페이지 단위로 불러옴]
- [ ] [기능 2: 각 row 클릭 시 해당 게시글 상세 페이지로 이동]
- [ ] [기능 3: 페이지네이션 UI (`react-paginate`) 적용]
- [ ] [기능 4: 연필 모양 클릭 시 글쓰기 페이지로 이동]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ v ] 기능 컴포넌트 [ ] 공통 컴포넌트
- **복잡도**: [ ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ v ] 복합 (100줄 이상)
- **상태 관리**: [ v ] 로컬 상태만 [ ] Redux(Zustand) 연결 [ ] 상태 없음


### 컴포넌트명
**[EmRegister]** 

### 목적 및 역할
- **주요 목적**: 이름과 사원번호를 입력하여 회원가입 이전에 인증하는 기능 제공

### 기능 요구사항
- [ ] [기능 1: 이름과 사원번호 입력 필드]
- [ ] [기능 2: 클릭 이벤트 처리(인증)]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ v ] 기능 컴포넌트 [ ] 공통 컴포넌트
- **복잡도**: [ ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ v ] 복합 (100줄 이상)
- **상태 관리**: [ ] 로컬 상태만 [ v ] Redux(Zustand) 연결 [ ] 상태 없음


### 컴포넌트명
**[GroupScoreBar]** 

### 목적 및 역할
- **주요 목적**: 각 조별 점수를 확인할 수 있고 조별 및 전체 답변 리스트로 이동할 수 있는 기능 제공

### 기능 요구사항
- [ ] [기능 1: 클릭 이벤트 처리(이동)]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ v ] 기능 컴포넌트 [ ] 공통 컴포넌트
- **복잡도**: [ ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ v ] 복합 (100줄 이상)
- **상태 관리**: [ ] 로컬 상태만 [ v ] Redux(Zustand) 연결 [ ] 상태 없음


### 컴포넌트명
**[Header]** 

### 목적 및 역할
- **주요 목적**: 홈화면 이동과 로그아웃이 가능하고 로그인 사용자 정보 제공

### 기능 요구사항
- [ ] [기능 1: 로그인한 사용자 정보 제공]
- [ ] [기능 2: 클릭 이벤트 처리(이동)]
- [ ] [기능 3: 로그아웃]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ v ] 기능 컴포넌트 [ ] 공통 컴포넌트
- **복잡도**: [ ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ v ] 복합 (100줄 이상)
- **상태 관리**: [ v ] 로컬 상태만 [ ] Redux(Zustand) 연결 [ ] 상태 없음


### 컴포넌트명
**[List]** 

### 목적 및 역할
- **주요 목적**: 사용자 유형(내 답변 / 팀 답변 / 북마크)에 따라 해당 질문 및 답변 리스트를 시각적으로 제공

### 기능 요구사항
- [ ] [기능 1: 내 답변 리스트 출력]
- [ ] [기능 2: 조별 답변 출력]
- [ ] [기능 3: 전체 답변 리스트 출력]
- [ ] [기능 4: 북마크 리스트 출력 및 북마크 토글 기능]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ v ] 기능 컴포넌트 [ ] 공통 컴포넌트
- **복잡도**: [ ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ v ] 복합 (100줄 이상)
- **상태 관리**: [ ] 로컬 상태만 [ v ] Redux(Zustand) 연결 [ ] 상태 없음


### 컴포넌트명
**[Loading]** 

### 목적 및 역할
- **주요 목적**: 사용자에게 로딩 상태를 시각적으로 알림

### 기능 요구사항
- [ ] [기능 1: FadeLoader 스피너 표시]
- [ ] [기능 2: 화면 중앙에 로딩 애니메이션 정렬]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ ] 기능 컴포넌트 [ v ] 공통 컴포넌트
- **복잡도**: [ v ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ ] 복합 (100줄 이상)
- **상태 관리**: [ ] 로컬 상태만 [ ] Redux(Zustand) 연결 [ v ] 상태 없음


### 컴포넌트명
**[LoginForm]** 

### 목적 및 역할
- **주요 목적**: 이메일과 비밀번호 입력을 통한 로그인 기능 제공

### 기능 요구사항
- [ ] [기능 1: 이메일과 비밀번호 입력 필드]
- [ ] [기능 2: 클릭 이벤트 처리(로그인)]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ v ] 기능 컴포넌트 [ ] 공통 컴포넌트
- **복잡도**: [ ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ v ] 복합 (100줄 이상)
- **상태 관리**: [ ] 로컬 상태만 [ ] Redux(Zustand) 연결 [ v ] 상태 없음


### 컴포넌트명
**[UserModal]** 

### 목적 및 역할
- **주요 목적**: 헤더에서 v 버튼 클릭을 통해 북마크 및 본인이 푼 문제 조회 가능

### 기능 요구사항
- [ ] [기능 1: 클릭 이벤트 처리(이동)]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ v ] 기능 컴포넌트 [ ] 공통 컴포넌트
- **복잡도**: [ ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ v ] 복합 (100줄 이상)
- **상태 관리**: [ ] 로컬 상태만 [ ] Redux(Zustand) 연결 [ v ] 상태 없음


### 컴포넌트명
**[PostDetail]** 

### 목적 및 역할
- **주요 목적**: 게시판의 단일 게시글 보기 가능

### 기능 요구사항
- [ ] [기능 1: 게시글 불러오는 필드]
- [ ] [기능 2: 클릭 이벤트 처리(수정)]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ v ] 기능 컴포넌트 [ ] 공통 컴포넌트
- **복잡도**: [ ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ v ] 복합 (100줄 이상)
- **상태 관리**: [ v ] 로컬 상태만 [ ] Redux(Zustand) 연결 [ ] 상태 없음


### 컴포넌트명
**[QuestionComponent]** 

### 목적 및 역할
- **주요 목적**: 질문에 답을 입력하고 제출하는 기능

### 기능 요구사항
- [ ] [기능 1: 답변 입력 필드]
- [ ] [기능 2: 클릭 이벤트 처리]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ v ] 기능 컴포넌트 [ ] 공통 컴포넌트
- **복잡도**: [ ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ v ] 복합 (100줄 이상)
- **상태 관리**: [ ] 로컬 상태만 [ v ] Redux(Zustand) 연결 [ ] 상태 없음


### 컴포넌트명
**[RegisterForm]** 

### 목적 및 역할
- **주요 목적**: 회원가입 기능 제공

### 기능 요구사항
- [ ] [기능 1: 이메일, 비밀번호 입력 필드]
- [ ] [기능 2: 이름 및 사원 번호 표시하는 필드]
- [ ] [기능 3: 클릭 이벤트 처리(중복확인, 회원가입)]

### 컴포넌트 분류
- **타입**: [ ] 페이지 컴포넌트 [ ] 레이아웃 컴포넌트 [ v ] 기능 컴포넌트 [ ] 공통 컴포넌트
- **복잡도**: [ ] 단순 (50줄 이하) [ ] 보통 (50-100줄) [ v ] 복합 (100줄 이상)
- **상태 관리**: [ ] 로컬 상태만 [ v ] Redux(Zustand) 연결 [ ] 상태 없음


## 컴포넌트 구조 설계

### 파일 구조
```
📁 public
│   ├── mockServiceWorker.js
│   └── vite.svg
📁 src
├── 📁 app
│   ├── 📁 providers
│   │   ├── AppRouterProvider.tsx
│   │   ├── AppThemeProvider.tsx
│   │   ├── QueryProvider.tsx
│   │   └── index.ts
│   ├── 📁 routes
│   │   ├── Router.tsx
│   │   └── index.ts
│   ├── 📁 styles
│   │   ├── globalFonts.ts
│   │   ├── globalStyle.ts
│   │   ├── globalStyle.ts
│   │   └── theme.ts
│   └── App.tsx
│
├── 📁 pages
│   ├── 📁 404Page
│   │   └── 404Page.tsx
│   ├── 📁 AnswerDetailPage
│   │   └── AnswerDetailPage.tsx
│   ├── 📁 BoardDetail
│   │   └── BoardDetail.tsx
│   ├── 📁 BoardRegistrationPage
│   │   └── BoardRegistrationPage.tsx
│   ├── 📁 BookMarkPage
│   │   └── BookMarkPage.tsx
│   ├── 📁 CheckEmployeePage
│   │   └── CheckEmployeePage.tsx
│   ├── 📁 HomePage
│   │   └── HomePage.tsx
│   ├── 📁 LoginPage
│   │   └── LoginPage.tsx
│   ├── 📁 MyAnswerPage
│   │   └── MyAnswerPage.tsx
│   ├── 📁 RegisterPage
│   │   └── RegisterPage.tsx
│   ├── 📁 TeamAnswerPage
│   │   └── TeamAnswerPage.tsx
│   └── 📁 WritePage
│       └── WritePage.tsx
├── 📁 shared
│   ├── 📁 Apis
│   │   ├── answer.ts
│   │   ├── auth.ts
│   │   ├── board.ts
│   │   ├── bookmark.ts
│   │   ├── emregister.ts
│   │   ├── header.ts
│   │   ├── listform.ts
│   │   └── scorebar.ts
│   │
│   ├── 📁 apiInstance
│   │   └── index.ts
│   ├── 📁 assets
│   │   ├── 📁 fonts
│   │   │   └── DMSans.ttf
│   │   ├── 📁 icon
│   │   │   ├── logo.png
│   │   │   ├── pencil.png
│   │   │   └── 📁 image
│   │   │       └── notFound.svg
│   │
│   ├── 📁 mock
│   │   ├── browser.ts
│   │   ├── dataList.ts
│   │   └── handler.ts
│   │
│   ├── 📁 schemas
│   │   ├── registerSchema.ts
│   │   └── signInSchema.ts
│   │
│   ├── 📁 ui
│   │   ├── AuthBackground.tsx
│   │   ├── Modal.tsx
│   │   └── main_background.tsx
│   │
│   └── 📁 zustand
│       ├── bookmarkStore.ts
│       ├── question.ts
│       ├── registerStore.ts
│       ├── teamStore.ts
│       └── useHomeStore.ts
│
└── 📁 widgets
    ├── 📁 AnswerSearch
    │   └── AnswerSearch.tsx
    ├── 📁 BoardRegistration
    │   └── BoardRegistration.tsx
    ├── 📁 BulletinBoard
    │   └── BulletinBoard.tsx
    ├── 📁 EmRegister
    │   └── EmRegister.tsx
    ├── 📁 GroupScoreBar
    │   └── GroupScoreBar.tsx
    ├── 📁 Header
    │   └── Header.tsx
    ├── 📁 List
    │   └── List.tsx
    ├── 📁 Loading
    │   └── Loading.tsx
    ├── 📁 LoginForm
    │   └── LoginForm.tsx
    ├── 📁 Modal
    │   └── UserModal
    │       └── UserModal.tsx
    ├── 📁 PostDetail
    │   └── PostDetail.tsx
    ├── 📁 QuestionComponent
    │   └── QuestionComponent.tsx
    └── 📁 RegisterForm
        └── RegisterForm.tsx

   
```

## React 컴포넌트 Props 설계

### Props 인터페이스
| Props명 | 타입 | 필수여부 | 기본값 | 설명 |
|---------|------|----------|--------|------|
| isEditMode | boolean | 필수 | - | 수정 모드 여부. true이면 수정 화면. |
| type | "my" \| "team" \| "bookmark" \| "total" | 필수 | - | 리스트 타입 구분 값 |
| isOpen | boolean | 필수 | - | 모달 열림 여부 |
| onClose | () => void | 필수 | - | 모달 닫기 핸들러 함수 |

---

## 상태 관리 설계

### 로컬 상태 (useState)
| 상태명 | 타입 | 초기값 | 용도 |
|--------|------|--------|------|
| posts | Post[] | `[]` | 게시글 목록 저장 |
| page | number | `0` | 현재 페이지 번호 |
| allPage | number | `0` | 전체 페이지 수 |
| questions | Answer[] | `[]` | 내 답변 리스트 상태 |
| totals | Total[] | `[]` | 전체 답변 리스트 상태 |
| teams | Team[] | `[]` | 조별 답변 리스트 상태 |
| bookmarks | Bookmark[]  | `[]` | 북마크한 답변 리스트 상태 |
| isLoading | boolean | `false` | 로딩 여부 |
| isModalOpen | boolean | `false` | 모달 열림 여부 |
| scoreList | GroupScore[] | `[]` | 조별 점수 데이터 상태 |
| user | HeaderInfo | 객체 초기값 | 로그인 유저 정보 |
| content | string | `""` | 단일 게시글 내용 |
| title | string | `""` | 단일 게시글 제목 |
| isMine | boolean | `false` | 본인 여부 |

### Redux 상태 (해당시)
| 액션 타입 | Payload | 설명 |
|-----------|---------|------|
| [ACTION_TYPE] | object | [설명] |

---

## 구현 세부사항

### 주요 컴포넌트 목록
| 컴포넌트명 | 위치 | 역할 | 재사용성 |
|------------|------|------|----------|
| Header | widgets/ | 상단 사용자 정보 및 로그아웃 표시 | 중간 |
| BulletinBoard | widgets/ | 게시판 글 목록 조회 화면 | 낮음 |
| BoardRegistration | widgets/ | 게시글 작성/수정 화면 | 낮음 |
| AnswerSearch | widgets/ | 질문 상세 답변 확인 화면 | 낮음 |
| UserModal | widgets/Modal/ | 유저 확인 모달 | 중간 |
| GroupScoreBar | widgets/ | 조별 점수 시각화 바 | 중간 |
| List | widgets/ | 리스트형 콘텐츠 (답변, 북마크 등) 컴포넌트 | 높음 |
| LoginForm | widgets/ | 로그인 입력 폼 | 낮음 |
| EmRegister | widgets/ | 사번 인증 입력 폼 | 낮음 |
| Loading | widgets/ | 로딩 인디케이터 | 높음 |
| RegisterForm | widgets/ | 회원가입 입력 폼 | 낮음 |
| PostDetail | widgets/ | 게시글 상세 보기 컴포넌트 | 낮음 |
| QuestionComponent | widgets/ | 질문과 답변 구성 요소 | 중간 |

### API 연동
| API 엔드포인트 | 메서드 | 용도 | 호출 시점 |
|----------------|--------|------|-----------|
| [/api/chat/gpt] | POST | 답변에 대한 gpt 요약 | 페이지 로드 |
| [/api/questions/me] | GET | 질문 내용 받기 | 홈 로드 |
| [/auth/signin] | POST | 로그인 | 로그인 버튼 |
| [/auth/signup] | POST | 회원가입 | 회원가입 버튼 |
| [/auth/verify] | GET | 사번 조회 | 사번 조회 버튼 |
| [/auth/email/check?email=${email}] | GET | 이메일 중복 확인 | 중복 확인 버튼 |
| [/auth/signout] | GET | 로그아웃 | 로그아웃 버튼 |
| [/auth/refresh] | GET | 로그인 인증 확인 및 갱신 | 요청 실행 시 |
| [/board?page=${page}&size=10] | GET | 게시글 불러오기 | 게시판 로드 |
| [/board/${id}] | GET | 단일 게시글 조회 | 단일 게시글 로드 |
| [/board/total-pages] | GET | 게시판 페이지 수 조회 | 게시판 로드 |
| [/board] | POST | 게시글 등록 | 등록 버튼 |
| [/board/${id}] | DELETE | 게시글 삭제 | 삭제 버튼 |
| [/board/${id}] | PUT | 게시글 수정 | 수정 버튼 |
| [/api/record/bookmarked] | POST | 북마크 | 북마크 버튼 |
| [/api/home] | GET | 사용자 정보 표시 | 헤더 로드 |
| [/api/record/solved] | GET | 내 질문/답변 목록 | 리스트 로드 |
| [/api/record/bookmarked] | GET | 북마크된 답변 목록 | 리스트 로드 |
| [/api/group] | GET | 전체 답변 목록 | 리스트 로드 |
| [/api/group/${groupNum}] | GET | 조별 답변 목록 | 리스트 로드 |
| [/api/home] | GET | 조별 점수 표시 | 스코어바 로드 |

### 성능 최적화
- [ ] 컴포넌트 메모이제이션 (React.memo)
- [ ] 상태 최적화 (useMemo, useCallback)

### 외부 의존성
- **라이브러리**: [사용한 외부 라이브러리]
- **API**: [연동하는 API 엔드포인트]
- **유틸리티**: [사용할 유틸리티 함수]