# 9. Database Schema

```sql
CREATE EXTENSION IF NOT EXISTS "citext";
CREATE TYPE car_status AS ENUM ('FOR_SALE', 'SOLD');

CREATE TABLE "users" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "email" citext UNIQUE NOT NULL,
  "password_hash" text NOT NULL,
  "phone_number" text,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE "cars" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "model_name" text NOT NULL,
  "price" integer NOT NULL,
  "mileage" integer NOT NULL,
  "has_accident" boolean NOT NULL DEFAULT false,
  "status" car_status NOT NULL DEFAULT 'FOR_SALE',
  "listed_at" timestamptz NOT NULL,
  "sold_at" timestamptz,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE "alert_subscriptions" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "model_name" text NOT NULL,
  "max_price" integer,
  "max_mileage" integer,
  "allow_accidents" boolean NOT NULL DEFAULT true,
  "is_active" boolean NOT NULL DEFAULT true,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX "idx_cars_model_name_status" ON "cars" ("model_name", "status");
CREATE INDEX "idx_alert_subscriptions_user_id" ON "alert_subscriptions" ("user_id");
CREATE INDEX "idx_alert_subscriptions_matching" ON "alert_subscriptions" ("is_active", "model_name");
```

---
