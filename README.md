# Scalable REST API Assignment
## Tech Stack
- Backend: Node.js, Express
- Database: MongoDB, Mongoose
- Auth: JWT + httpOnly cookie
- Validation: express-validator
- Security: Helmet, rate limiting, sanitization
- Docs: Swagger UI
- Frontend: React + Vite
## Features
- User registration and login
- Password hashing with bcrypt
- JWT authentication
- Role-based access control (`user`, `admin`)
- Task CRUD APIs
- API versioning using `/api/v1`
- Error handling and validation
- Basic frontend for auth and CRUD demo
## Setup
24
### 1. Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev