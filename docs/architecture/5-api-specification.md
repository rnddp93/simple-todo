# 5. API Specification

```yaml
openapi: 3.0.0
info:
  title: "중고차 시각화 및 알림 플랫폼 API"
  version: "1.0.0"
  description: "차량 데이터 조회 및 알림 구독 관리를 위한 API 명세"
servers:
  - url: "/api"
    description: "Local development server"
paths:
  /cars/{modelName}:
    get:
      summary: "특정 모델의 차량 목록 조회"
      parameters:
        - name: modelName
          in: path
          required: true
          schema: { type: string }
      responses:
        '200':
          description: "성공"
          content:
            application/json:
              schema:
                type: array
                items: { $ref: '#/components/schemas/Car' }
  /subscriptions:
    get:
      summary: "사용자의 알림 구독 목록 조회"
      security: [ { cookieAuth: [] } ]
      responses:
        '200':
          description: "성공"
          content:
            application/json:
              schema:
                type: array
                items: { $ref: '#/components/schemas/AlertSubscription' }
    post:
      summary: "새 알림 구독 추가"
      security: [ { cookieAuth: [] } ]
      requestBody:
        content:
          application/json:
            schema: { $ref: '#/components/schemas/CreateSubscriptionInput' }
      responses:
        '201':
          description: "성공적으로 생성됨"
components:
  securitySchemes:
    cookieAuth: { type: apiKey, in: cookie, name: next-auth.session-token }
  schemas:
    Car:
      type: object
      properties: { id: { type: string }, modelName: { type: string }, price: { type: number } }
    AlertSubscription:
      type: object
      properties: { id: { type: string }, modelName: { type: string }, maxPrice: { type: number } }
    CreateSubscriptionInput:
      type: object
      properties: { modelName: { type: string }, maxPrice: { type: number } }
```

---
