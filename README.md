## 프로젝트 설명

React Router를 활용해 Home, About, Company, Board 페이지를 구성한 SPA 프로젝트입니다.

공통 Header/Footer 레이아웃을 적용하고, URL 경로에 따라 페이지가 새로고침 없이 전환되도록 구현했습니다.

또한 `useParams`를 활용한 동적 라우팅 구조와 NotFound 페이지 처리를 적용하여 기본적인 페이지 라우팅 흐름을 연습했습니다.

## 주요 기능

- React Router 기반 페이지 라우팅
- Home, About, Company, Board 페이지 구성
- 공통 Header/Footer 컴포넌트 적용
- Header 네비게이션 메뉴 구현
- `/about/:id`, `/board/:id` 동적 라우팅 구현
- `useParams`를 활용한 URL 파라미터 확인
- `path="*"`를 활용한 NotFound 페이지 처리
- Swiper를 활용한 Home 메인 슬라이드 구현
- 배열 데이터와 `map()`을 활용한 반복 렌더링
