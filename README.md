# 📦 Fullstack Microservices Project  
*A multi-service backend to level up real-world system design and production engineering skills.*

---

## 🚀 Overview

This project is a guided journey from:

**“I can build Node.js APIs”** → **“I can design scalable distributed systems.”**

Over the next 2–3 months, the goal is to build a realistic multi-service backend, deploy it to Kubernetes (Minikube), intentionally break it, fix it, and learn how real production systems behave under load, failure, and complexity.

This is not about becoming a DevOps engineer.  
It’s about becoming the engineer who:

- knows when to use Redis vs Postgres  
- understands queues (Kafka/RabbitMQ) and async workflows  
- knows how services fail  
- debugs distributed systems  
- crushes system design interviews  

Those engineers get paid more — because they understand **tradeoffs**, not just code.

---

## 🧱 Current Architecture (In Progress)

### **Services Implemented**
- [x] **API Gateway** (Fastify + HTTP Proxy)
- [x] **User Service** (port 4001)
- [x] **Product Service** (port 4002)
- [x] **Order Service** (port 4003)
- [x] **Root-level dev runner** to launch all services with one command
- [ ] Add Postgres  
- [ ] Add Redis caching  
- [ ] Add RabbitMQ / Kafka  
- [ ] Add background worker  
- [ ] Add correlation IDs + request tracing  
- [ ] Add health checks  

---

## 🗂️ Folder Structure
fullstack-microservices/
├── api-gateway/
├── frontend/
├── k8s/
├── node_modules/
├── notification-worker/
├── order-service/
├── product-service/
├── user-service/
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
---

## 🎯 Phase 1 — Build a Realistic Multi-Service App

Build a simple e-commerce backend:

### Core components  
- [x] API Gateway  
- [x] User Service  
- [x] Product Service  
- [x] Order Service  
- [ ] Postgres database  
- [ ] Redis caching  
- [ ] RabbitMQ or Kafka  
- [ ] Background worker  

**Goal:** Working services talking to each other through the gateway.

---

## 🔥 Phase 2 — Deploy to Minikube & Learn By Breaking Things  

This is where real learning happens.

### **Experiment 1 — Why caching matters**
- [ ] Load test API without Redis  
- [ ] Watch DB spike + slow responses  
- [ ] Add Redis caching  
- [ ] See performance difference  

### **Experiment 2 — Why queues matter**
- [ ] Try sending 1000 emails synchronously → API blocks  
- [ ] Add RabbitMQ  
- [ ] API responds instantly  
- [ ] Kill worker → messages safely accumulate  
- [ ] Restart worker → all messages process  

### **Experiment 3 — Failure Testing**
- [ ] Kill Postgres mid-request  
- [ ] Add retry logic  
- [ ] Add circuit breakers  
- [ ] Kill Redis — ensure degraded mode stays alive  

### **Experiment 4 — Distributed Tracing**
- [ ] Call one endpoint that uses 3 services  
- [ ] Add correlation IDs  
- [ ] Trace request  
- [ ] Identify bottlenecks  

---

## 🔧 Phase 3 — Optimize & Harden

- [ ] Add DB indexes  
- [ ] Tune Redis TTLs  
- [ ] Configure proper Kafka consumer groups  
- [ ] Implement health checks + liveness probes  
- [ ] Add monitoring dashboards  
- [ ] Introduce rate limiting  
- [ ] Add observability & metrics  

---

## 🎁 Why This Project Matters

When an interviewer asks:

**“Design a notification system.”**

Most juniors say:

> “Uh, I’d send an API request… maybe use a queue?”

You will say:

> “I’d use Kafka for durability and horizontal scaling.  
> The API publishes events, workers consume by notification type.  
> Redis handles rate limiting and deduplication.  
> Postgres stores the notification log with composite indexes.  
> We use a DLQ with exponential backoff and circuit breakers around SendGrid.  
> I built something similar — here’s what I learned…”

That level of confidence = hired.

---

## ⏳ Timeline

**Estimated: 2–3 months**  
No rush — the goal is deep understanding, not speed.

---

## 🏁 Final Goal

Build skills that differentiate junior developers from true systems engineers — and demonstrate you can design, reason about, and operate real distributed systems.
