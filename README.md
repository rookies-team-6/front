## ⭐️ 기술 스택

### ✅ Framework

-   **React** + **Typescript**

    -   페이지 이동이 많지 않고 Single Page 내부에서의 동작들이 많아 React로 선정하였고 , compile 과정에서 error check가 가능한 TS를 이용해 DX,UX를 증진시키기 위해 사용하였습니다.

### ✅ Data Fetching & Global State

-   **axios**
    - fetch가 아닌 axios를 사용한 이유는 다음과 같습니다. 
    - Instance 기본 설정 : 기본 URL, 헤더 타임아웃 등의 설정을 미리 정의함으로서 반복된 코드 제거
    - Interceptor : 요청 및 응답을 가로채서 Auth 관련 api 기본 설정
    - 자동 JSON 변환
-   **Zustand** + **tanstack/react-query**
    - Redux toolkit에 비해 가볍고 사용법이 간단하고, tanstack-query를 이용할 때 비동기 처리와 상태 관리를 효율적으로 연동할 수 있어 **Zustand**를 사용하였습니다.
    - server data와 client data 상호 간의 최신 상태를 간편하게 유지하기 위해 tanstack query를 사용하였습니다.

---

### ✅ CSS

-   **styled-components**

    -   팀원들이 짧은 시간 동안 tailwind를 학습하기엔 무리가 있다고 판단하여 익숙한 styled-component를 이용하였습니다.

-   **styled-reset**

    -   기존 html 세팅 초기화를 위해 사용하였습니다.

### ✅ validate

-   **react-hook-form** 및 **zod**

    -   서비스 내부에 validation을 검증해야 하는 과정을 간편하게 하기 위해 useRef를 이용해 rendering 발생 횟수를 줄이는 react-hook-form을 사용하였습니다.또한, 재사용 가능한 schema를 작성할 수 있는 zod를 사용하였습니다.

## ⭐️ 브랜치(Branch) 컨벤션

1. **main** : 최종 배포를 위한 branch. Pull Request를 이용해 develope branch를 최종 merge
2. **develop** : 배포하기 전 개발 중일 때 각자의 브랜치에서 merge하는 브랜치
3. **feat / #이슈 번호 / 기능명** : feature 브랜치. 새로운 기능 개발. 개발이 완료되면 develop 브랜치로 병합
4. **fix / #이슈 번호 / 기능명** : fix 브랜치. 생성 후 버그가 생겼을 때 수정하는 브랜치