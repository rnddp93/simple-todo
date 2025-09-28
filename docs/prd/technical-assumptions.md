# Technical Assumptions

## Repository Structure: Monorepo

프론트엔드와 백엔드 코드를 하나의 저장소에서 관리하여 초기 설정의 복잡성을 줄이고 일관성을 유지합니다.

## Service Architecture: Monolith

초기 MVP 단계에서는 마이크로서비스보다 단일 서비스(Monolith) 구조가 개발 및 배포 속도에 유리합니다. 기능이 복잡해지면 향후 마이크로서비스로의 전환을 고려할 수 있습니다.

## Testing Requirements: Unit + Integration

코드의 정확성을 보장하기 위해 각 기능 단위에 대한 단위 테스트와, 여러 기능이 함께 동작하는 상황을 검증하는 통합 테스트를 필수로 진행합니다.

## Additional Technical Assumptions and Requests

*   **데이터베이스:** 사용자 정보와 차량 데이터를 저장하기 위해 PostgreSQL과 같은 관계형 데이터베이스(RDB) 사용을 가정합니다.
*   **백엔드 프레임워크:** 빠른 개발과 안정성을 위해 Node.js (Express) 또는 Python (FastAPI) 같은 현대적인 웹 프레임워크 사용을 제안합니다.
*   **프론트엔드 라이브러리:** 데이터 시각화와 동적 UI 구현을 위해 React 또는 Vue.js 같은 컴포넌트 기반 라이브러리 사용을 제안합니다.

---