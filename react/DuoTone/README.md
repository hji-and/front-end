# Duotone React Website

이 프로젝트는 원래 정적 HTML/jQuery 사이트를 React로 변환한 것입니다.

## 설치 방법

```bash
npm install
```

## 실행 방법

```bash
npm run dev
```

개발 서버가 http://localhost:3000 에서 실행됩니다.

## 빌드

```bash
npm run build
```

프로덕션 빌드가 `dist` 폴더에 생성됩니다.

## 미리보기

```bash
npm run preview
```

빌드된 프로덕션 버전을 미리볼 수 있습니다.

## 주요 변경사항

- jQuery 기반 코드를 React hooks로 변환
- 컴포넌트 기반 아키텍처로 재구성
- 스크롤 애니메이션을 React useEffect로 구현
- Slick 슬라이더를 react-slick으로 교체

## 프로젝트 구조

```
src/
  components/     # React 컴포넌트들
  css/           # 스타일시트 파일들
  hooks/         # 커스텀 React hooks
  images/        # 이미지 파일들
  App.js         # 메인 App 컴포넌트
  index.js       # 엔트리 포인트
```

