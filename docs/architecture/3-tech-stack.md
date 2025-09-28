# 3. Tech Stack

| Category | Technology | Version | Purpose | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Frontend Language** | TypeScript | ~5.x | 타입 안정성 확보 | 컴파일 시점 에러 감지를 통해 코드 안정성 및 유지보수성 향상 |
| **Frontend Framework** | Next.js | ~14.x | 풀스택 웹 애플리케이션 구축 | 서버리스 API, 최적화된 렌더링 등 풀스택 개발에 필요한 기능을 내장 |
| **UI Component Library** | shadcn/ui | latest | UI 컴포넌트 기반 제공 | 접근성을 갖춘 고품질 컴포넌트를 제공하여 UI 개발 속도 향상 |
| **State Management** | Zustand | ~4.x | 클라이언트 상태 관리 | 가볍고 간단한 API를 제공하여 최소한의 보일러플레이트로 상태 관리 가능 |
| **Backend Language**| TypeScript | ~5.x | 프론트엔드와 언어 통일 | 모노레포 내에서 타입 공유 및 일관된 개발 경험 제공 |
| **Backend Framework**| Next.js API Routes | ~14.x | 서버리스 백엔드 API 구축 | 프론트엔드와 동일한 프로젝트 내에서 API를 관리하여 개발 간소화 |
| **API Style** | REST | N/A | 클라이언트-서버 통신 | 가장 널리 사용되는 표준적인 API 스타일 |
| **Database** | Vercel Postgres | latest | 데이터 영구 저장 | Vercel 플랫폼에 완벽하게 통합되어 별도 설정 없이 사용 가능 |
| **Authentication** | NextAuth.js | ~5.x | 사용자 인증 처리 | 다양한 인증 방식(소셜, 이메일)을 쉽게 통합할 수 있는 표준 라이브러리 |
| **Frontend Testing**| Vitest + RTL | latest | 컴포넌트 및 유닛 테스트 | 빠르고 설정이 간편하며, 실제 사용자 동작과 유사한 테스트 작성 가능 |
| **Backend Testing**| Vitest | latest | API 및 비즈니스 로직 테스트 | 프론트엔드와 동일한 테스트 러너를 사용하여 개발 경험 통일 |
| **E2E Testing** | Playwright | ~1.x | End-to-End 통합 테스트 | 실제 브라우저 환경에서 사용자 시나리오를 안정적으로 테스트 |
| **Build Tool** | Turborepo | ~1.x | 모노레포 빌드 시스템 | 모노레포 환경에서 효율적인 빌드 및 캐싱을 통해 CI/CD 속도 향상 |
| **CI/CD** | GitHub Actions | N/A | 지속적 통합 및 배포 | Vercel과의 자동 통합을 통해 Git push 시 자동으로 빌드 및 배포 실행 |
| **Monitoring** | Vercel Analytics | N/A | 사용자 및 성능 모니터링 | 별도 설정 없이 Core Web Vitals 등 핵심 성능 지표를 수집 |
| **CSS Framework** | Tailwind CSS | ~3.x | 유틸리티 우선 CSS 스타일링 | 빠르고 일관된 UI 개발을 지원하며, shadcn/ui의 기반 기술 |

---
