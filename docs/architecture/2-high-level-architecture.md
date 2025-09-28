# 2. High Level Architecture

## 2.1. Technical Summary

본 프로젝트는 **Vercel** 플랫폼을 기반으로 한 서버리스 아키텍처를 채택합니다. 프론트엔드는 **Next.js** 프레임워크를 사용하여 구현하며, 백엔드 API는 Next.js의 API Routes 기능을 활용한 **서버리스 함수**로 구축됩니다. 데이터베이스는 **Vercel Postgres**를 사용하고, 전체 코드는 **Turborepo**를 이용한 모노레포 구조로 관리됩니다. 이 아키텍처는 빠른 개발 속도, 뛰어난 성능, 그리고 트래픽에 따른 자동 확장성을 제공하여 PRD의 핵심 목표인 신속한 MVP 출시와 안정적인 서비스 운영을 효과적으로 지원합니다.

## 2.2. Platform and Infrastructure Choice

*   **Platform:** Vercel
*   **Key Services:** Next.js, Vercel Serverless Functions, Vercel Postgres, Vercel Blob
*   **Deployment Host and Regions:** Global (Vercel Edge Network)

**Rationale:** Vercel은 Next.js의 개발사로서 프레임워크에 대한 최적의 통합과 개발 경험을 제공합니다. 서버리스 함수, 데이터베이스, 스토리지 등 풀스택 애플리케이션에 필요한 모든 요소를 단일 플랫폼에서 관리할 수 있어 MVP 단계에서 인프라 복잡성을 최소화하고 개발 속도를 극대화할 수 있는 최상의 선택입니다.

## 2.3. Repository Structure

*   **Structure:** Monorepo
*   **Monorepo Tool:** Turborepo
*   **Package Organization:**
    *   `apps/web`: Next.js 애플리케이션 (프론트엔드 및 API)
    *   `packages/ui`: 공유 리액트 컴포넌트
    *   `packages/db`: 데이터베이스 스키마 및 클라이언트
    *   `packages/config`: 공유 설정 (ESLint, TypeScript 등)

**Rationale:** PRD의 기술 가정을 따라 모노레포 구조를 채택합니다. Turborepo는 Vercel 배포에 최적화되어 있으며, 프론트엔드와 백엔드 간의 코드 공유(예: 타입 정의)를 용이하게 하여 개발 효율성과 타입 안정성을 높입니다.

## 2.4. High Level Architecture Diagram

```mermaid
graph TD
    subgraph "사용자"
        A[User Browser]
    end

    subgraph "Vercel Platform"
        B[Next.js Frontend]
        C[API Routes<br>(Serverless Functions)]
        D[Vercel Postgres DB]
    end

    subgraph "외부 서비스"
        E[SMS Gateway<br>(e.g., Twilio)]
    end

    A -- HTTPS --> B
    B -- API Calls --> C
    C -- DB Queries --> D
    C -- Triggers SMS --> E
```

## 2.5. Architectural Patterns

*   **Jamstack Architecture:** 정적 사이트 생성(SSG)과 서버리스 API를 결합한 구조입니다. - _Rationale:_ 초기 로딩 속도를 극대화하고, CDN을 통해 전 세계 사용자에게 빠르고 안정적인 서비스를 제공합니다.
*   **Serverless Functions:** 백엔드 로직을 독립적인 서버리스 함수로 구현합니다. - _Rationale:_ 사용량에 따라 자동으로 확장/축소되어 비용 효율적이며, 서버 관리가 필요 없어 개발팀이 비즈니스 로직에 집중할 수 있습니다.
*   **Component-Based UI:** UI를 재사용 가능한 독립적인 컴포넌트 단위로 개발합니다. - _Rationale:_ PRD에서 제안된 React/Vue 기반으로, 코드의 재사용성을 높이고 유지보수를 용이하게 합니다.
*   **Repository Pattern:** 데이터베이스 접근 로직을 추상화하여 분리합니다. - _Rationale:_ 비즈니스 로직과 데이터베이스 간의 의존성을 낮춰, 향후 데이터베이스 변경이나 단위 테스트 작성 시 유연성을 확보합니다.

---
