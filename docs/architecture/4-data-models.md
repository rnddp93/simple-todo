# 4. Data Models

## 4.1. User
**Purpose:** 사용자 계정 정보, 로그인 자격 증명, 그리고 알림을 위한 연락처 정보를 저장합니다.
**TypeScript Interface:**
```typescript
export interface User {
  id: string;
  email: string;
  phoneNumber: string | null;
  createdAt: Date;
  updatedAt: Date;
}
```
**Relationships:**
*   한 명의 사용자는 여러 개의 `AlertSubscription` (알림 구독)을 가질 수 있습니다. (One-to-Many)

## 4.2. Car
**Purpose:** 개별 중고차 매물의 사양, 가격, 판매 상태 등 모든 관련 정보를 저장합니다.
**TypeScript Interface:**
```typescript
export type CarStatus = 'FOR_SALE' | 'SOLD';

export interface Car {
  id: string;
  modelName: string;
  price: number;
  mileage: number;
  hasAccident: boolean;
  status: CarStatus;
  listedAt: Date;
  soldAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
```
**Relationships:**
*   이 모델은 다른 모델과 직접적인 관계를 갖지 않습니다.

## 4.3. AlertSubscription
**Purpose:** 새로운 차량 매물에 대한 SMS 알림을 받기 위해 사용자가 저장한 검색 조건을 저장합니다.
**TypeScript Interface:**
```typescript
export interface AlertSubscription {
  id: string;
  userId: string;
  modelName: string;
  maxPrice?: number;
  maxMileage?: number;
  allowAccidents: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```
**Relationships:**
*   하나의 `AlertSubscription`은 반드시 하나의 `User`에 속합니다. (Many-to-One)

---
