# 모바일 프로젝트 (React + Vite)

검색, 동영상 리스트, 메뉴 화면 등 모바일 UI를 React로 구현한 개인 프로젝트입니다.  
간단한 검색/추천/최근기록 기능과 비디오 정렬, 메뉴 프로필 등을 포함하고 있어 모바일 환경에서의 레이아웃과 UI 흐름을 보여주는 데에 집중했습니다.

## 주요 기능

- 홈(Home): 검색창, 추천 키워드, 최근 검색 내역
- 비디오(Video): 더미 데이터 기반 정렬(업데이트순/조회수/좋아요)
- 메뉴(Menu): 프로필, 최근 시청, 메뉴 리스트
- 전역 컨텍스트로 비디오 데이터 관리
- 모바일 환경 100vh 보정 처리

## 기술 스택

- React, React Router, Vite
- Tailwind CSS
- ESLint, Prettier

## 폴더 구조(요약)

```
src/
  App.jsx / App.css / index.css / main.jsx
  components/
    common/
      Button.jsx
      Search.jsx
  contexts/
    VideoContext.js
  layout/
    Header.jsx
    menu/
      Index.jsx
      MenuList.jsx
      Profile.jsx
      RecentVideos.jsx
  login/
    Input.jsx
  mock/
    comments.json
    user.json
    videoDetail.json
  pages/
    Home.jsx
    Video.jsx
    home/
      HomeSearch.jsx
      KeyWord.jsx
      History.jsx
      Tab.jsx
    user/
      Login.jsx
```

## 빠른 시작

```bash
# 1) 의존성 설치
npm install

# 2) 개발 서버
npm run dev

# 3) 프로덕션 빌드
npm run build

```

### 작성자

- 한유선 (hanyousun)
