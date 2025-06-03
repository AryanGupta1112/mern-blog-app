# 📝 Blogify – MERN Stack Blog App

Blogify is a fullstack blog web application built with the **MERN stack (MongoDB, Express, React, Node.js)**. It allows users to register, log in, create posts, comment, and like blog posts. The app features authentication, dark mode toggle, and clean responsive UI.

---

## 🌐 Live Demo

- **Frontend (Vercel):** [your-vercel-link]
- **Backend (Render):** [your-render-link]

---

## 📁 Project Structure

mern-blog/
├── blog-backend/ # Express.js backend (API + MongoDB)
├── blog-frontend/ # React.js frontend (Tailwind CSS)
└── README.md # Root ReadMe

yaml
Copy
Edit

---

## 🚀 Features

- ✅ User authentication (Login/Register)
- 📝 Create, read, and view blog posts
- 💬 Comment section for each post
- 👍 Like functionality (1 like per user)
- 🌓 Dark mode toggle
- 🔒 Protected routes
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

| Tech       | Usage                    |
|------------|--------------------------|
| React      | Frontend framework       |
| TailwindCSS| UI Styling               |
| Node.js    | Backend runtime          |
| Express.js | API framework            |
| MongoDB    | Database (Mongoose ORM)  |
| JWT        | Authentication           |
| Vercel     | Frontend Hosting         |
| Render     | Backend Hosting          |

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AryanGupta1112/mern-blog-app.git
   cd mern-blog
   ```

2. **Install dependencies**

```bash
cd blog-backend
npm install

cd ../blog-frontend
npm install
```

3. **Environment Variables**

Create .env inside blog-backend/ with:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. **Run locally**

In one terminal:

```bash
cd blog-backend
npm start
```

In another terminal:

```bash
cd blog-frontend
npm start
```