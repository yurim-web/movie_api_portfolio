# 🎬 Waveyy - 영화 & 드라마 포트폴리오

> TMDB API를 활용한 영화 및 드라마 정보 웹 애플리케이션

## 📋 프로젝트 소개

**Waveyy**는 The Movie Database (TMDB) API를 활용하여 최신 영화와 드라마 정보를 제공하는 **웹 전용** 애플리케이션입니다. Next.js 15와 React 19를 기반으로 구축되었으며, 데스크톱 웹 브라우저에서 최적화된 사용자 경험을 제공합니다.

### 🌐 배포 사이트
**🔗 [https://movie-api-portfolio.vercel.app/](https://movie-api-portfolio.vercel.app/)**

### 📂 GitHub 저장소
**🔗 [https://github.com/yurim-web/movie_api_portfolio](https://github.com/yurim-web/movie_api_portfolio)**

## ✨ 주요 기능

- 🏠 **홈페이지**: 추천 영화 및 드라마 슬라이더
- 🎬 **영화 페이지**: 인기 영화 목록 및 상세 정보
- 📺 **드라마 페이지**: 인기 드라마 목록 및 상세 정보
- 🔍 **검색 기능**: 영화 및 드라마 검색
- 🌐 **웹 전용**: 데스크톱 웹 브라우저 최적화
- 🎨 **모던 UI**: Swiper.js를 활용한 인터랙티브 슬라이더

## 🛠️ 기술 스택

- **Frontend**: Next.js 15, React 19
- **Styling**: CSS Modules, Radix UI Themes
- **Icons**: React Icons
- **Slider**: Swiper.js
- **Responsive**: React Responsive (데스크톱 웹 브라우저 전용)
- **API**: The Movie Database (TMDB) API

## 🚀 시작하기

### 필수 조건
- Node.js 18.0 이상
- npm, yarn, pnpm 또는 bun

### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/yurim-web/movie_api_portfolio.git
cd movie_api_portfolio
```

2. **의존성 설치**
```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

3. **개발 서버 실행**
```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

4. **웹 브라우저에서 확인**
   - [http://localhost:3000](http://localhost:3000)에서 웹 애플리케이션을 확인하세요.
   - 데스크톱 웹 브라우저에서 사용 가능합니다.

## 📁 프로젝트 구조

```
movie_api_portfolio/
├── app/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── ContentsBox.jsx
│   │   ├── HomeSlider.jsx
│   │   ├── Main_movie.jsx
│   │   ├── Main_tv.jsx
│   │   ├── Moviebox.jsx
│   │   └── Movieinner.jsx
│   ├── layout/             # 레이아웃 컴포넌트
│   │   └── Header.jsx
│   ├── movie/              # 영화 관련 페이지
│   │   ├── [id]/page.jsx   # 영화 상세 페이지
│   │   └── page.jsx        # 영화 목록 페이지
│   ├── tv/                 # 드라마 관련 페이지
│   │   ├── [id]/page.jsx   # 드라마 상세 페이지
│   │   └── page.jsx        # 드라마 목록 페이지
│   ├── search/             # 검색 페이지
│   │   └── page.jsx
│   ├── globals.css         # 전역 스타일
│   ├── layout.jsx          # 루트 레이아웃
│   └── page.jsx            # 홈페이지
├── public/                 # 정적 파일
└── package.json
```

## 🎯 주요 컴포넌트

- **HomeSlider**: 홈페이지 메인 슬라이더
- **Main_movie**: 영화 추천 섹션
- **Main_tv**: 드라마 추천 섹션
- **Moviebox**: 영화/드라마 카드 컴포넌트
- **ContentsBox**: 콘텐츠 박스 컴포넌트

## 🔧 빌드 및 배포

### 프로덕션 빌드
```bash
npm run build
npm run start
```

### Vercel 배포
이 프로젝트는 Vercel을 통해 배포되었습니다. 자세한 배포 방법은 [Vercel 공식 문서](https://vercel.com/docs)를 참고하세요.

## 📚 학습 목적

이 프로젝트는 다음 기술들을 학습하기 위해 제작되었습니다:
- Next.js App Router를 활용한 웹 애플리케이션 개발
- 외부 API 연동 (TMDB API)
- React 컴포넌트 설계
- 데스크톱 웹 전용 디자인
- 모던 JavaScript/React 패턴

## 📄 라이선스

이 프로젝트는 학습 목적으로 제작되었습니다.

---

**🎬 Waveyy에서 최신 영화와 드라마를 만나보세요!**
