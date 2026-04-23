# 🚀 Backend Assignment Project

A full-stack application demonstrating **JWT authentication, role-based access control, and scalable REST APIs**, with a simple frontend UI for interaction.

---

## 🧩 Tech Stack

**Backend**

* Node.js + Express.js
* MongoDB + Mongoose
* JWT Authentication (httpOnly cookies)
* Express Validator

**Frontend**

* React (Vite)
* Fetch API

---

## ✨ Features

* 🔐 User Registration & Login
* 🛡️ JWT Authentication (secure cookies)
* 👥 Role-based access (User/Admin)
* 📦 Task CRUD (Create, Read, Update, Delete)
* 📘 API Documentation (Swagger)
* ⚠️ Error handling & validation
* 🌐 CORS-enabled secure communication

---

## 📁 Project Structure

```
assignment-project/
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/backend-assignment.git
cd backend-assignment
```

---

## 🗄️ 2️⃣ Start MongoDB

### Option A (Local)

```
mongod --dbpath "C:\data\db"
```

> If folder doesn’t exist:

```
mkdir C:\data\db
```

---

### Option B (Docker)

```
docker-compose up -d
```

---

## 🔧 3️⃣ Setup Backend

```
cd backend
npm install
```

### Create `.env` file

```
copy .env.example .env
```

Update `.env`:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/assignment_db
JWT_SECRET=supersecret123
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

---

### ▶️ Run Backend

```
npm run dev
```

Expected:

```
MongoDB connected
Server running on port 5000
```

---

## 🌐 4️⃣ Setup Frontend

Open new terminal:

```
cd frontend
npm install
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

## 🔗 API Base URL

```
http://localhost:5000/api/v1
```

---

## 📘 API Documentation

Swagger UI available at:

```
http://localhost:5000/api-docs
```

---

## 🧪 Demo Flow

1. Register a new user
2. Login
3. Access dashboard
4. Create a task
5. Edit/Delete task

---

## 🔐 Security Features

* JWT stored in httpOnly cookies
* Password hashing (bcrypt)
* Input validation (express-validator)
* Protected routes with middleware
* Role-based authorization

---

## ⚡ Scalability Considerations

* Modular folder structure (controllers, routes, middleware)
* API versioning (`/api/v1`)
* Easily extendable to microservices
* Can integrate Redis caching
* Docker-ready setup

---

## 🛠️ Future Improvements

* Pagination & filtering
* Redis caching
* Rate limiting
* Deployment (Render/Vercel)
* CI/CD pipeline

---

## 👨‍💻 Author

Mayank Singh

---

## 📌 Notes

* Ensure MongoDB is running before starting backend
* Backend, frontend, and DB must run simultaneously
* If facing CORS issues, verify `CLIENT_URL` in `.env`

---

## ✅ Status

✔ Fully functional
✔ Submission-ready
✔ Scalable architecture

---

# ⭐ Thank you!
