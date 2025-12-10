# Duotone 웹사이트 상세 문서

## 📋 목차
1. [사이트 개요](#사이트-개요)
2. [기술 스택](#기술-스택)
3. [사이트 구조](#사이트-구조)
4. [주요 기능](#주요-기능)
5. [컴포넌트 상세 설명](#컴포넌트-상세-설명)
6. [애니메이션 시스템](#애니메이션-시스템)
7. [스타일링](#스타일링)
8. [개발 가이드](#개발-가이드)

---

## 사이트 개요

**Duotone**은 프로덕트 디자인 에이전시의 포트폴리오 웹사이트입니다. 이 사이트는 회사의 철학, 서비스, 프로젝트 사례를 보여주는 단일 페이지 애플리케이션(SPA)으로 구성되어 있습니다.

### 주요 특징
- **스크롤 기반 인터랙티브 애니메이션**: 스크롤 위치에 따라 요소들이 동적으로 나타나고 사라짐
- **풀스크린 섹션 디자인**: 각 섹션이 화면 전체를 차지하는 몰입형 레이아웃
- **반응형 디자인**: 다양한 디바이스 크기에 최적화
- **부드러운 전환 효과**: CSS transition과 React state를 활용한 자연스러운 애니메이션

---

## 기술 스택

### 프론트엔드
- **React 18.2.0**: UI 라이브러리
- **React DOM 18.2.0**: React 렌더링 엔진
- **Vite 5.0.8**: 빌드 도구 및 개발 서버
- **@vitejs/plugin-react 4.2.1**: Vite용 React 플러그인
- **React Hooks**: 상태 관리 및 사이드 이펙트 처리
  - `useState`: 컴포넌트 상태 관리
  - `useEffect`: 라이프사이클 및 DOM 조작
  - `useRef`: DOM 요소 참조

### 라이브러리
- **react-slick 0.29.0**: 이미지 슬라이더 컴포넌트
- **slick-carousel 1.8.1**: 슬라이더 스타일링

### 개발 도구
- **@types/react 18.2.43**: React TypeScript 타입 정의
- **@types/react-dom 18.2.17**: React DOM TypeScript 타입 정의

### 스타일링
- **CSS3**: 커스텀 스타일시트
- **CSS Transitions**: 애니메이션 효과
- **Google Fonts**: Noto Sans KR 폰트

---

## 사이트 구조

사이트는 총 17개의 주요 섹션으로 구성되어 있습니다:

```
Header (고정 헤더)
├── Logo (스크롤에 따라 변경)
└── 햄버거 메뉴

SubMenu (전체 화면 메뉴)
├── 네비게이션 링크
├── SNS 아이콘
└── 언어 선택

Section0: 메인 비주얼 (Hero Section)
Section1: 회사 소개
Section2: "For the next wave" 철학
Section3: 비주얼 섹션
Section4: "We are salmons" - 회사 정체성
BandBanner: 장식용 배너
Section5: 연어 이미지 섹션
Section6: "One team" - 팀 소개
Section7: 디자인 프로세스 설명
Section8: "Design platform" - 디자인 방법론
Section9: "Design method" - 디자인 접근법
LineBanner: 파도 장식 배너
Slick1: 디자인 프로세스 슬라이더
Section10-12: 프로젝트 케이스 스터디
Section13: 포트폴리오 갤러리
Section14: "Openpath" 교육 플랫폼 소개
Section15: Openpath 비주얼
Section16: 연락처 및 푸터
```

---

## 주요 기능

### 1. 스크롤 기반 애니메이션
- **패럴랙스 효과**: 스크롤 속도에 따라 다른 요소들이 다른 속도로 움직임
- **Fade In/Out**: 섹션이 뷰포트에 들어올 때 서서히 나타남
- **위치 기반 애니메이션**: 스크롤 위치에 따라 요소의 위치와 투명도 변경

### 2. 동적 헤더
- **로고 상태 변경**: 특정 섹션에서 로고 색상이 자동으로 변경됨
- **햄버거 메뉴 애니메이션**: 메뉴 열기/닫기 시 아이콘이 X자로 변환

### 3. 전체 화면 메뉴
- **슬라이드 애니메이션**: 메뉴가 열릴 때 부드럽게 나타남
- **순차적 등장**: 메뉴 항목들이 순서대로 나타나는 효과

### 4. 이미지 슬라이더
- **react-slick 기반**: 디자인 프로세스를 보여주는 슬라이더
- **커스텀 스타일링**: 브랜드에 맞는 독특한 도트 네비게이션

---

## 컴포넌트 상세 설명

### Header 컴포넌트
**위치**: `src/components/Header.jsx`

**기능**:
- 고정 헤더로 항상 화면 상단에 표시
- 로고 상태 관리 (on/off)
- 햄버거 메뉴 토글 버튼

**Props**:
- `isMenuOpen`: 메뉴 열림 상태
- `onMenuToggle`: 메뉴 토글 함수
- `logoState`: 로고 상태 ('on' 또는 'off')

**애니메이션**:
- 햄버거 아이콘이 X자로 변환되는 애니메이션
- 각 라인이 순차적으로 사라지고 나타남

---

### Section0: 메인 비주얼
**위치**: `src/components/Section0.jsx`

**기능**:
- 사이트 첫 화면 (Hero Section)
- "DUOTONE" 텍스트 애니메이션
- 배경 이미지와 함께 브랜드 소개

**애니메이션**:
- 페이지 로드 시 순차적으로 텍스트가 나타남
- 각 글자가 다른 타이밍에 fade-in
- 스크롤 시 전체 섹션이 fade-out

**텍스트 순서**:
1. 배경 이미지 (100ms)
2. "U" (700ms)
3. "D", "O" (1100ms)
4. "E" (1600ms)
5. "O" 투명도 조절 (2200ms)
6. "N" (2300ms)

---

### Section1: 회사 소개
**위치**: `src/components/Section1.jsx`

**내용**:
- "Duotone is a product design agency" 메시지
- 스크롤 다운 화살표

**동작**:
- Section0이 사라질 때 나타남
- 스크롤 위치에 따라 opacity 조절

---

### Section2: "For the next wave"
**위치**: `src/components/Section2.jsx`

**내용**:
- 회사의 철학과 가치관 설명
- "01" 챕터 번호와 함께

**애니메이션**:
- 스크롤 시 왼쪽 번호와 오른쪽 텍스트가 순차적으로 나타남
- 텍스트가 아래에서 위로 이동하며 fade-in

---

### Section3: 비주얼 섹션
**위치**: `src/components/Section3.jsx`

**내용**:
- "for the next wave" 대형 텍스트
- 배경 이미지와 함께

**애니메이션**:
- 스크롤 시 텍스트가 위로 이동
- 두 개의 텍스트 레이어가 겹쳐서 나타남

---

### Section4: "We are salmons"
**위치**: `src/components/Section4.jsx`

**내용**:
- 회사의 정체성을 "연어"에 비유하여 설명
- 3개의 카드 형식 섹션

**카드 내용**:
1. **연어의 태도**: 강에서 바다로, 바다에서 강으로 돌아오는 여정
2. **문제 해결**: 변화에 맞춰 일하는 방식
3. **구체화**: 보이지 않는 곳에서 시작하여 눈에 보이는 것을 만듦

**애니메이션**:
- 각 카드가 스크롤 위치에 따라 순차적으로 나타남
- SVG 아이콘과 텍스트가 함께 fade-in

---

### Section5: 연어 이미지
**위치**: `src/components/Section5.jsx`

**내용**:
- 연어 이미지와 함께 회사 소개 메시지
- "We're Duotone, where the salmon..." 텍스트

---

### Section6: "One team"
**위치**: `src/components/Section6.jsx`

**내용**:
- 팀의 다양성과 협업 강조
- 4가지 경험 영역 소개

**경험 영역**:
1. **Brand Experience**: 브랜드 설계, 공간, 편집, 그래픽
2. **User Experience**: UX 리서치, 디자인 시스템, 인터렉션
3. **Creative Experience**: 웹사이트, 비주얼 컨셉, 미디어웍
4. **Interactive Experience**: 최적의 UI 구조와 인터렉션 설계

**애니메이션**:
- 각 항목이 순차적으로 나타남 (transition-delay 활용)

---

### Section7: 디자인 프로세스
**위치**: `src/components/Section7.jsx`

**내용**:
- 디자인 프로세스에 대한 설명
- 배경 이미지와 함께

**특징**:
- 고정 배경 이미지 (fixed position)
- 스크롤에 따라 텍스트가 나타남

---

### Section8: "Design platform"
**위치**: `src/components/Section8.jsx`

**내용**:
- 디자인 플랫폼의 3가지 요소 설명

**3가지 요소**:
1. **Strategy (전략)**: 문제의 본질을 찾는 일
2. **Process (프로세스)**: 문제를 해결하는 방식
3. **System (시스템)**: 솔루션을 설계하는 일

**시각적 요소**:
- 왼쪽에 챕터 번호
- 오른쪽에 SVG 라인 배경

---

### Section9: "Design method"
**위치**: `src/components/Section9.jsx`

**내용**:
- 디자인 방법론 소개
- "WHY"라는 질문으로 시작하는 프로젝트 접근법

---

### Slick1: 디자인 프로세스 슬라이더
**위치**: `src/components/Slick1.jsx`

**기능**:
- react-slick을 사용한 슬라이더
- 디자인 프로세스 4단계 설명

**슬라이드 내용**:
1. **Gather inspiration**: 사용자 데이터 수집 및 분석
2. **Generate ideas**: 제한 없는 아이디어 생성
3. **Make ideas tangible**: 아이디어의 구체화
4. **Share the story**: 스토리텔링을 통한 가치 전달

**설정**:
- 속도: 600ms
- 드래그 가능
- 커스텀 도트 네비게이션

---

### Section10-12: 프로젝트 케이스 스터디
**위치**: `src/components/Section10.jsx`, `Section11.jsx`, `Section12.jsx`

**프로젝트**:
1. **Re:fone** (Section10)
   - 중고폰 유통 서비스 플랫폼
   - KT x CU와의 협업
   - URL: https://refone.co.kr

2. **Burgerking Omni-Channel Project** (Section11)
   - 옴니채널 통합 프로젝트
   - 웹, 앱, 키오스크 통합
   - URL: https://www.burgerking.co.kr
   - **참고**: 코드 내 URL이 잘못 설정되어 있음 (수정 필요)

3. **glo** (Section12)
   - 전자담배 브랜드 온라인 이커머스
   - BAT의 글로브랜드
   - URL: https://www.discoverglo.co.kr
   - **참고**: 코드 내 URL이 잘못 설정되어 있음 (수정 필요)

**애니메이션**:
- 각 섹션의 배경색이 스크롤에 따라 변경됨
- 프로젝트 정보와 이미지가 순차적으로 나타남

---

### Section13: 포트폴리오 갤러리
**위치**: `src/components/Section13.jsx`

**기능**:
- 8개의 프로젝트 이미지 그리드 레이아웃
- 각 이미지 위에 클라이언트 로고 오버레이
- "All Project" 링크 (모든 프로젝트 보기)

**구조**:
- 2x4 그리드 레이아웃
- 각 프로젝트는 이미지와 로고로 구성
- 호버 시 인터랙션 효과

**이미지 파일**:
- `20200319225233.jpg` ~ `20200320001904.jpg` (8개 프로젝트 이미지)

---

### Section14: Openpath 소개
**위치**: `src/components/Section14.jsx`

**내용**:
- 디자인 교육 플랫폼 "Openpath" 소개
- Design Spectrum과의 협업 소개

**특징**:
- Openpath 로고 SVG
- Spectrum 로고 SVG
- 교육 플랫폼의 목적과 철학 설명

---

### Section15: Openpath 비주얼
**위치**: `src/components/Section15.jsx`

**내용**:
- "open to possibilities, open your design paths" 메시지
- 대형 배경 이미지 (`figure-openpath.929f4ba0.jpg`)와 함께
- Openpath 교육 플랫폼의 비전을 시각적으로 표현

**애니메이션**:
- 스크롤 시 텍스트가 위로 이동
- 두 개의 텍스트 레이어 (흰색/청록색)로 깊이감 표현
- `.win_h` 클래스로 풀스크린 높이 설정

---

### Section16: 연락처 및 푸터
**위치**: `src/components/Section16.jsx`

**내용**:
- "Get in touch" 메시지
- 손 이미지 애니메이션
- SNS 링크
- 연락처 정보

**SNS 링크**:
- Facebook
- Medium
- Instagram
- Behance
- Openpath

**연락처 정보**:
- 주소: 서울특별시 강남구 학동로77길 24, 1층
- 전화: +82 2 547 5679
- 이메일: salmon@duotone.io

**애니메이션**:
- 손 이미지가 스크롤에 따라 위치 변경
- 텍스트가 fade-in

---

## 애니메이션 시스템

### 스크롤 애니메이션 Hook
**위치**: `src/hooks/useScrollAnimations.jsx`

**기능**:
- 모든 섹션의 스크롤 기반 애니메이션을 중앙에서 관리
- 스크롤 위치에 따라 각 요소의 opacity, position, display 조절

**주요 애니메이션 타입**:
1. **Fade In/Out**: opacity 0 ↔ 1
2. **Slide Up**: top 위치 변경
3. **Class Toggle**: CSS 클래스 추가/제거
4. **Background Color Change**: 배경색 변경

### 스크롤 감지 Hook
**위치**: `src/hooks/useScrollAnimation.jsx`

**기능**:
- 현재 스크롤 위치 추적
- 윈도우 리사이즈 처리
- `.win_h` 클래스 요소의 높이 자동 조절

---

## 이미지 및 에셋 구조

### 이미지 디렉토리
**위치**: `src/images/`

**주요 이미지 카테고리**:

1. **로고 및 브랜딩**
   - `duotone_logo.png`: 메인 로고 (on 상태)
   - `duotone_logo_off.png`: 메인 로고 (off 상태)
   - `logo-openpath.d6c89f71.svg`: Openpath 로고
   - `logo-openpath-madeby.5ec28f80.svg`: Openpath 제작 로고

2. **섹션 배경 이미지**
   - `top-visual.69f52cd7.jpg`: 메인 히어로 섹션 배경
   - `top-visual-mo.a8ab6d48.jpg`: 모바일용 히어로 배경
   - `figure-forthenextwave.5c1729a7.jpg`: Section2 배경
   - `figure-salmon.00ebbcf0.jpg`: Section5 배경 (데스크톱)
   - `figure-salmon-mo.ab5c6bc4.jpg`: Section5 배경 (모바일)
   - `figure-openpath.929f4ba0.jpg`: Section15 배경
   - `figure-writing.88313bd5.jpg`: Section7 배경
   - `figure-wave.4fac4124.png`: 파도 장식 이미지

3. **텍스트 이미지**
   - `duotone-text-1-d.b166af26.png` ~ `duotone-text-7-e.b7152df6.png`: DUOTONE 텍스트 애니메이션용 (7개)
   - `text-getintouch.7238a41f.png`: "Get in touch" 텍스트

4. **프로젝트 케이스 스터디**
   - `20200319223943.jpg`: Re:fone 프로젝트
   - `20200319224356.jpg`: Burgerking 프로젝트
   - `20200319224559.jpg`: glo 프로젝트

5. **포트폴리오 갤러리**
   - `20200319225233.jpg` ~ `20200320001904.jpg`: 8개 프로젝트 이미지

6. **연락처 섹션**
   - `contact-lefthand.29ae9c70.png`: 왼손 이미지
   - `contact-lefthand-lg.3b485c31.png`: 왼손 이미지 (대형)
   - `contact-lefthand-mo.27e04ad2.png`: 왼손 이미지 (모바일)
   - `contact-righthand.451a7af4.png`: 오른손 이미지
   - `contact-righthand-lg.43738cac.png`: 오른손 이미지 (대형)
   - `contact-righthand-mo.2144e37d.png`: 오른손 이미지 (모바일)

7. **아이콘 (SVG)**
   - SNS 아이콘: Facebook, Medium, Instagram, Behance
   - 외부 링크 아이콘
   - 슬라이더 아이콘 (inspiration, idea, tangible, story)
   - 앱스토어/플레이스토어 아이콘

8. **기타**
   - `gnb-salmon.d0464d65.png`: 네비게이션 연어 이미지

**이미지 최적화**:
- 해시된 파일명으로 캐싱 최적화
- 반응형 이미지 (데스크톱/모바일 분리)
- SVG 아이콘 사용으로 확장성 확보

---

## 스타일링

### CSS 구조
- **style.css**: 메인 스타일시트 (2300+ 라인)
- **slick.css**: 슬라이더 스타일시트

### 주요 스타일 특징
- **색상 팔레트**:
  - 주색상: `#FF6565` (빨간색)
  - 보조색상: `#000046` (진한 파란색)
  - 강조색: `#17D3D6` (청록색)
  - 배경색: `#FFFFFF` (흰색)

- **타이포그래피**:
  - 폰트: Noto Sans KR
  - 굵기: 100, 300, 500
  - 큰 제목: 150px
  - 중간 제목: 50px
  - 본문: 24-32px

- **레이아웃**:
  - 최대 너비: 1200px (데스크톱)
  - 섹션 간격: 200-500px
  - 풀스크린 섹션: `win_h` 클래스

### 반응형 브레이크포인트
- **1400px 이하**: 서브메뉴 레이아웃 조정
- **1220px 이하**: 주요 레이아웃 변경
- **970px 이하**: 모바일 메뉴 스타일
- **910px 이하**: 텍스트 크기 조정
- **780px 이하**: 모바일 최적화
- **680px 이하**: 작은 모바일 디바이스

---

## 개발 가이드

### 프로젝트 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

### 파일 구조

```
duotone/
├── index.html              # Vite 엔트리 HTML
├── package.json            # 프로젝트 설정 및 의존성
├── vite.config.js          # Vite 설정 파일
├── .gitignore             # Git 제외 파일 목록
├── README.md              # 프로젝트 README
├── SITE_DOCUMENTATION.md  # 사이트 상세 문서 (이 파일)
│
└── src/
    ├── main.jsx           # React 엔트리 포인트
    ├── App.jsx            # 메인 앱 컴포넌트
    ├── index.css          # 글로벌 스타일
    │
    ├── components/        # React 컴포넌트
    │   ├── Header.jsx     # 헤더 컴포넌트
    │   ├── SubMenu.jsx    # 서브메뉴 컴포넌트
    │   ├── Section0.jsx   # 메인 비주얼
    │   ├── Section1.jsx   # 회사 소개
    │   ├── Section2.jsx   # "For the next wave"
    │   ├── Section3.jsx   # 비주얼 섹션
    │   ├── Section4.jsx   # "We are salmons"
    │   ├── BandBanner.jsx # 장식 배너
    │   ├── Section5.jsx   # 연어 이미지
    │   ├── Section6.jsx   # "One team"
    │   ├── Section7.jsx   # 디자인 프로세스
    │   ├── Section8.jsx   # "Design platform"
    │   ├── Section9.jsx   # "Design method"
    │   ├── LineBanner.jsx # 파도 배너
    │   ├── Slick1.jsx     # 디자인 프로세스 슬라이더
    │   ├── Section10.jsx  # Re:fone 프로젝트
    │   ├── Section11.jsx  # Burgerking 프로젝트
    │   ├── Section12.jsx  # glo 프로젝트
    │   ├── Section13.jsx  # 포트폴리오 갤러리
    │   ├── Section14.jsx  # Openpath 소개
    │   ├── Section15.jsx  # Openpath 비주얼
    │   └── Section16.jsx  # 연락처 및 푸터
    │
    ├── hooks/             # 커스텀 Hooks
    │   ├── useScrollAnimation.jsx    # 스크롤 위치 감지
    │   └── useScrollAnimations.jsx   # 스크롤 기반 애니메이션
    │
    ├── css/               # 스타일시트
    │   ├── style.css      # 메인 스타일 (2300+ 라인)
    │   └── slick.css      # 슬라이더 스타일
    │
    └── images/            # 이미지 파일들 (60+ 파일)
        ├── 로고 및 브랜딩 이미지
        ├── 섹션 배경 이미지
        ├── 프로젝트 케이스 이미지
        ├── 포트폴리오 갤러리 이미지
        ├── 연락처 섹션 이미지
        └── SVG 아이콘들
```

### 컴포넌트 추가 방법

1. **새 섹션 추가**:
```jsx
// src/components/SectionNew.jsx
import React from 'react';

function SectionNew() {
  return (
    <div id="sectionNew">
      {/* 내용 */}
    </div>
  );
}

export default SectionNew;
```

2. **App.jsx에 import 및 추가**:
```jsx
import SectionNew from './components/SectionNew';

// return 내부에 추가
<SectionNew />
```

3. **애니메이션 추가**:
`useScrollAnimations.jsx`에 새로운 섹션의 애니메이션 로직 추가

### 스타일 수정

- **전역 스타일**: `src/css/style.css`
- **컴포넌트별 스타일**: 각 컴포넌트에서 인라인 스타일 또는 CSS 클래스 사용

### 애니메이션 커스터마이징

애니메이션 타이밍과 효과는 다음 파일에서 수정:
- `src/hooks/useScrollAnimations.jsx`: 스크롤 애니메이션 로직
- `src/components/Header.jsx`: 메뉴 애니메이션
- `src/components/SubMenu.jsx`: 서브메뉴 애니메이션

---

## 성능 최적화

### 현재 구현
- React Hooks를 사용한 효율적인 상태 관리
- CSS transitions를 활용한 하드웨어 가속 애니메이션
- 이미지 최적화 (필요시)

### 개선 가능 사항
- 이미지 lazy loading
- 코드 스플리팅 (React.lazy)
- 메모이제이션 (React.memo, useMemo)
- 가상화 (긴 리스트의 경우)

---

## 브라우저 호환성

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

### 필요한 기능
- ES6+ 문법 지원
- CSS Transitions 지원
- Intersection Observer API (향후 개선 시)

---

## 배포

### 빌드
```bash
npm run build
```

빌드 결과물은 `dist` 폴더에 생성됩니다.

### 배포 옵션
- **Vercel**: Vite 프로젝트 자동 배포 지원 (권장)
- **Netlify**: 드래그 앤 드롭 또는 Git 연동
- **GitHub Pages**: 정적 파일 호스팅 (`base: './'` 설정 필요)
- **기타 정적 호스팅 서비스**: dist 폴더 업로드

### Vite 설정
**위치**: `vite.config.js`

**주요 설정**:
- React 플러그인 활성화
- 개발 서버 포트: 3000
- 빌드 출력 디렉토리: `dist`
- 경로 별칭: `@` → `src` 디렉토리
- 상대 경로 설정: `base: './'` (프로덕션 빌드용)

---

## 문제 해결

### 일반적인 문제

1. **이미지가 로드되지 않음**
   - 이미지 경로 확인 (`src/images/` 폴더)
   - 파일명이 정확한지 확인 (해시 포함)
   - Vite 빌드 후 이미지 경로 확인

2. **애니메이션이 작동하지 않음**
   - 브라우저 콘솔에서 에러 확인
   - `useScrollAnimation` hook이 제대로 작동하는지 확인
   - `window` 객체 접근 전 체크 확인 (SSR 호환성)

3. **스타일이 적용되지 않음**
   - CSS 파일이 제대로 import되었는지 확인 (`App.jsx`)
   - 클래스명이 정확한지 확인
   - 브라우저 개발자 도구로 스타일 적용 여부 확인

4. **빌드 오류**
   - Node.js 버전 확인 (14.0.0 이상 권장)
   - `npm install` 재실행
   - `node_modules` 삭제 후 재설치

5. **개발 서버가 시작되지 않음**
   - 포트 3000이 사용 중인지 확인
   - `vite.config.js`에서 포트 변경 가능

6. **프로덕션 빌드 후 경로 오류**
   - `vite.config.js`의 `base: './'` 설정 확인
   - 상대 경로로 빌드되었는지 확인

---

## 라이선스 및 저작권

이 프로젝트는 Duotone의 포트폴리오 웹사이트입니다.
원본 디자인과 콘텐츠의 저작권은 Duotone에 있습니다.

---

## 업데이트 이력

### v1.0.0 (2024년 12월)
- 원본 HTML/jQuery 사이트를 React로 변환
- Vite 빌드 시스템 도입
- 모든 컴포넌트를 JSX로 변환
- 스크롤 애니메이션 시스템 구현
- 커스텀 React Hooks로 애니메이션 로직 분리
- SSR 호환성을 위한 window/document 체크 추가
- 반응형 디자인 유지

---

## 연락처

프로젝트 관련 문의:
- 이메일: salmon@duotone.io
- 웹사이트: https://duotone.io

---

## 주요 특징 및 하이라이트

### 사용자 경험 (UX)
- **부드러운 스크롤 애니메이션**: 스크롤 위치에 따라 자연스럽게 요소들이 나타나고 사라짐
- **시각적 피드백**: 메뉴 열기/닫기, 로고 상태 변경 등 즉각적인 시각적 피드백
- **몰입형 디자인**: 풀스크린 섹션으로 사용자의 집중도를 높임
- **직관적인 네비게이션**: 전체 화면 메뉴로 사이트 구조를 한눈에 파악 가능

### 기술적 하이라이트
- **성능 최적화**: Vite를 사용한 빠른 개발 및 빌드
- **컴포넌트 기반 아키텍처**: 재사용 가능하고 유지보수하기 쉬운 구조
- **반응형 디자인**: 다양한 디바이스 크기에 최적화
- **SSR 호환성**: window/document 객체 접근 시 안전 체크

### 디자인 철학
- **"연어" 메타포**: 강에서 바다로, 바다에서 강으로 돌아오는 여정을 통해 회사의 정체성 표현
- **"For the next wave"**: 다음 파도를 향한 도전 정신
- **"One team"**: 다양한 배경을 가진 구성원들의 협업 강조
- **"Design platform"**: 전략, 프로세스, 시스템을 통한 체계적인 디자인 접근

---

## 향후 개선 가능 사항

### 성능 최적화
- [ ] 이미지 lazy loading 구현
- [ ] 코드 스플리팅 (React.lazy) 적용
- [ ] 불필요한 리렌더링 방지 (React.memo, useMemo)
- [ ] 이미지 WebP 포맷 변환

### 기능 개선
- [ ] 다국어 지원 (i18n)
- [ ] 다크 모드 지원
- [ ] 접근성 개선 (ARIA 라벨, 키보드 네비게이션)
- [ ] SEO 최적화 (메타 태그, 구조화된 데이터)

### 기술 개선
- [ ] TypeScript 마이그레이션
- [ ] 테스트 코드 작성 (Jest, React Testing Library)
- [ ] Storybook 도입
- [ ] CI/CD 파이프라인 구축

---

## 참고 자료

### 관련 링크
- **Duotone 공식 웹사이트**: https://duotone.io
- **Openpath**: 디자인 교육 플랫폼
- **Design Spectrum**: 디자이너 커뮤니티

### 프로젝트 링크
- **Re:fone**: https://refone.co.kr
- **Burgerking**: https://www.burgerking.co.kr
- **glo**: https://www.discoverglo.co.kr

### 기술 문서
- **React 공식 문서**: https://react.dev
- **Vite 공식 문서**: https://vitejs.dev
- **react-slick 문서**: https://react-slick.neostack.com

---

**문서 작성일**: 2024년 12월
**마지막 업데이트**: 2024년 12월
**프로젝트 버전**: 1.0.0
**Node.js 버전**: 14.0.0 이상 권장
**작성자**: 개발팀

