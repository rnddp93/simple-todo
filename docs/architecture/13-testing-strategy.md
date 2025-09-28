# 13. Testing Strategy

*   **Unit Tests:** Vitest will be used to test individual functions, React components, and API logic in isolation. Located alongside the source files (`*.test.ts`).
*   **Integration Tests:** Vitest will also be used to test interactions between components, such as an API route calling the Data Service.
*   **E2E Tests:** Playwright will be used to test critical user flows from end-to-end in a real browser environment. (e.g., Login -> Set Alert -> Verify).

---
