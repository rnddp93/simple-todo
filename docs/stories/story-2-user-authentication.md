# Story 2: 사용자 인증

## Status
- Draft

## Story
**As a** 방문자,
**I want** 계정을 만들고 로그인할 수 있기를 원한다,
**so that** 나의 맞춤 설정을 저장하고 알림을 받을 수 있다.

## Acceptance Criteria
1.  사용자는 이메일과 비밀번호를 이용해 회원가입을 할 수 있다.
2.  회원가입 시 SMS 수신을 위한 전화번호를 입력받는다. (FR4)
3.  사용자는 가입한 계정으로 로그인 및 로그아웃을 할 수 있다.
4.  로그인한 사용자의 인증 상태는 세션 동안 유지된다.
5.  사용자 전화번호는 데이터베이스에 암호화되어 저장되어야 한다. (NFR2)

## Tasks / Subtasks
- [x] **Task 1: 사용자 모델 및 데이터베이스 스키마 설계**
    - [x] `users` 테이블 스키마 정의 (id, email, password_hash, phone_number)
    - [x] 데이터베이스 마이그레이션 스크립트 작성
- [x] **Task 2: 회원가입 API 엔드포인트 개발**
    - [x] `/api/auth/signup` API 라우트 생성
    - [x] 이메일, 비밀번호, 전화번호 유효성 검사 로직 구현
    - [x] 비밀번호 해싱하여 데이터베이스에 저장
    - [x] 전화번호 암호화하여 데이터베이스에 저장
- [ ] **Task 3: 로그인/로그아웃 API 엔드포인트 개발**
    - [ ] `/api/auth/login` API 라우트 생성 (세션/토큰 발급)
    - [ ] `/api/auth/logout` API 라우트 생성 (세션/토큰 무효화)
- [ ] **Task 4: 프론트엔드 인증 페이지 구현**
    - [ ] 회원가입 폼 UI 구현
    - [ ] 로그인 폼 UI 구현
    - [ ] 회원가입/로그인 API 연동
- [ ] **Task 5: 세션 관리 및 인증 상태 유지**
    - [ ] 쿠키 또는 유사한 메커니즘을 사용하여 세션 관리 (참고: `next-auth.session-token`)
    - [ ] 로그인 상태에 따라 UI (예: 로그인/로그아웃 버튼)가 동적으로 변경되도록 구현

## Dev Agent Record

### File List
- `packages/db/schema.sql` (new)
- `packages/db/index.ts` (new)
- `packages/db/package.json` (new)
- `packages/eslint-config/package.json` (new)
- `packages/eslint-config/next.js` (new)
- `packages/typescript-config/package.json` (new)
- `packages/typescript-config/base.json` (new)
- `packages/typescript-config/nextjs.json` (new)
- `apps/web/package.json` (modified)
- `apps/web/src/app/api/auth/signup/route.ts` (new)
- `apps/web/src/app/api/auth/signup/__tests__/route.test.ts` (new)
- `apps/web/vitest.config.ts` (new)
- `package.json` (new)
- `turbo.json` (new)

### Debug Log References
- N/A

### Completion Notes
- **Task 1:** Project structure was missing. Initialized a Turborepo monorepo structure manually. Created the database schema for the `users` table and the DB connection file. Testing was skipped as it requires DB credentials.
- **Task 2:** Implemented the signup API endpoint with validation, password hashing, and phone number encryption. Wrote integration tests using Vitest and mocking. Fixed multiple issues with dependencies and a bug in the encryption key length.


## Dev Notes
- **Security:**
    - 비밀번호는 `bcrypt` 또는 `argon2`와 같은 강력한 해시 함수를 사용해 저장한다.
    - 전화번호와 같은 민감 정보는 양방향 암호화하여 저장한다.
    - SQL Injection, XSS, CSRF 등 기본적인 웹 취약점을 방어해야 한다.
- **Authentication:**
    - `NextAuth.js` 라이브러리 사용을 권장하여 빠르고 안전하게 인증 기능을 구현한다.
- **API:**
    - API 명세는 `docs/architecture/5-api-specification.md`를 따른다.

## Change Log
| Date | Version | Description | Author |
| :--- | :--- | :--- | :--- |
| 2025-09-30 | 1.0 | 스토리 초안 작성 | Gemini |
