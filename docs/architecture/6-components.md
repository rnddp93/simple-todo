# 6. Components

## 6.1. Component List

### Web UI (Next.js App)
*   **Responsibility:** 사용자에게 UI를 렌더링하고, 사용자 입력을 처리하며, 백엔드 API와 통신하여 데이터를 표시합니다.
*   **Dependencies:** API Service
*   **Technology Stack:** Next.js, React, TypeScript, Tailwind CSS, Zustand

### API Service (Next.js API Routes)
*   **Responsibility:** Web UI로부터의 HTTP 요청을 받아들이고, 비즈니스 로직을 실행하며, 데이터를 처리합니다.
*   **Dependencies:** Data Service, Authentication Service, Notification Service
*   **Technology Stack:** Next.js API Routes, TypeScript

### Data Service (Repository)
*   **Responsibility:** 데이터베이스에 대한 모든 접근(CRUD)을 추상화하고 캡슐화합니다.
*   **Dependencies:** Vercel Postgres
*   **Technology Stack:** `@vercel/postgres` SDK, TypeScript

### Authentication Service (NextAuth.js)
*   **Responsibility:** 사용자 인증 및 권한 부여 로직을 처리합니다.
*   **Dependencies:** Data Service
*   **Technology Stack:** NextAuth.js, TypeScript

### Notification Service
*   **Responsibility:** 조건에 맞는 사용자에게 SMS 알림을 발송하는 프로세스를 담당합니다.
*   **Dependencies:** Data Service, External SMS Gateway
*   **Technology Stack:** TypeScript, Twilio SDK

### Data Ingestion Service
*   **Responsibility:** 외부 소스로부터 중고차 데이터를 주기적으로 가져와 데이터베이스에 저장합니다.
*   **Dependencies:** Data Service
*   **Technology Stack:** TypeScript, CSV Parser

## 6.2. Component Diagram

```mermaid
componentDiagram
    actor User as "사용자"
    package "우리 시스템" {
        participant "Web UI" as WebUI
        participant "API Service" as APIService
        participant "Data Service" as DataService
        database "Database" as DB
        participant "Auth Service" as AuthService
        participant "Notification Svc" as NotificationSvc
        participant "Data Ingestion Svc" as IngestionSvc
    }
    actor "External SMS Gateway" as SMSGateway
    User -->> WebUI : 상호작용
    WebUI -->> APIService : HTTP API 호출
    APIService -->> DataService : 데이터 요청
    APIService -->> AuthService : 인증 요청
    APIService -->> NotificationSvc : 알림 트리거
    AuthService -->> DataService : 사용자 정보 조회
    NotificationSvc -->> DataService : 구독 정보 조회
    NotificationSvc -->> SMSGateway : SMS 발송 요청
    IngestionSvc -->> DataService : 데이터 쓰기
    DataService -->> DB : 데이터 읽기/쓰기
```

---
