# Story 4: 구매 희망 범위 저장

## Status
- Draft

## Story
**As a** 로그인한 사용자,
**I want** 현재 필터 조건을 '구매 희망 범위'로 저장하고 싶다,
**so that** 매번 같은 조건을 다시 설정할 필요가 없다.

## Acceptance Criteria
1.  로그인한 사용자는 '이 조건으로 알림 받기' 버튼을 클릭하여 현재 필터 조건(차종, 가격 상한 등)을 저장할 수 있다. (FR3)
2.  저장 API는 `/api/subscriptions` 엔드포인트로 POST 요청을 보낸다. (참고: `5-api-specification.md`)
3.  저장된 조건은 '알림 설정 페이지'에서 목록으로 확인할 수 있다.
4.  사용자는 저장된 '구매 희망 범위'를 삭제하여 더 이상 알림을 받지 않도록 설정할 수 있다.

## Tasks / Subtasks
- [ ] **Task 1: '알림 받기' 기능 UI/UX 구현**
    - [ ] 필터링 섹션에 '이 조건으로 알림 받기' 버튼 추가
    - [ ] 버튼 클릭 시 현재 필터 조건을 API로 전송하는 로직 구현
- [ ] **Task 2: 구독(Subscription) 모델 및 DB 스키마 설계**
    - [ ] `subscriptions` 테이블 스키마 정의 (id, user_id, modelName, maxPrice 등)
    - [ ] 데이터베이스 마이그레이션 스크립트 작성
- [ ] **Task 3: 구독 API 엔드포인트 개발**
    - [ ] `POST /api/subscriptions`: 새 구독을 생성 (참고: `CreateSubscriptionInput`)
    - [ ] `GET /api/subscriptions`: 사용자의 모든 구독 목록을 조회
    - [ ] `DELETE /api/subscriptions/{id}`: 특정 구독을 삭제
- [ ] **Task 4: '알림 설정 페이지' 프론트엔드 구현**
    - [ ] 사용자의 구독 목록을 조회하여 리스트 형태로 표시
    - [ ] 각 구독 항목 옆에 삭제 버튼을 제공하고, 클릭 시 삭제 API를 호출

## Dev Notes
- **API Design:**
    - API 명세는 `docs/architecture/5-api-specification.md`에 정의된 내용을 따른다.
    - RESTful 원칙에 따라 리소스를 명확하게 표현한다. (`/api/subscriptions`)
- **Data Access:**
    - `packages/db`의 Repository Pattern을 사용하여 `subscriptions` 테이블과 상호작용한다.

## Change Log
| Date | Version | Description | Author |
| :--- | :--- | :--- | :--- |
| 2025-09-30 | 1.0 | 스토리 초안 작성 | Gemini |
