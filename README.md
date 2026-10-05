# Nexus Video Call

A real-time video calling web application built with React, Node.js, Socket.IO, and WebRTC.

🔗 **Live Demo**: [https://nexus-video-call-frontend.onrender.com](https://nexus-video-call-frontend.onrender.com)

---

## Features

- 🎥 Real-time video and audio calling
- 🖥️ Screen sharing
- 💬 In-call chat messaging
- 🔐 User authentication (register / login)
- 📋 Meeting history

---

## Tech Stack

**Frontend**
- React 19
- Material UI (MUI v7)
- Socket.IO Client
- React Router v7
- Axios

**Backend**
- Node.js + Express 5
- Socket.IO
- Mongoose + MongoDB Atlas
- bcrypt
- WebRTC (peer-to-peer via Google STUN)

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm
- MongoDB Atlas account

### 1. Clone the repo

```bash
git clone https://github.com/RajuAnsary/Nexus_Video_Call.git
cd Nexus_Video_Call
```

### 2. Run the Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:8000`

### 3. Run the Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on `http://localhost:3000`

### 4. Switch to Local Backend

In `frontend/src/environment.js`, set:

```js
let IS_PROD = false;
```

This points the frontend to `http://localhost:8000` instead of the production server.

---

## Project Structure

```
Nexus_Video_Call/
├── backend/
│   └── src/
│       ├── controllers/
│       │   ├── SocketManager.js    # WebRTC signaling & chat via Socket.IO
│       │   └── user.controllers.js # Auth & meeting history logic
│       ├── models/
│       │   ├── user.model.js       # User schema
│       │   └── Meeting.model.js    # Meeting history schema
│       ├── routes/
│       │   └── users.router.js     # API routes
│       └── app.js                  # Express server entry point
└── frontend/
    └── src/
        ├── contexts/
        │   └── AuthContext.jsx     # Auth state & API calls
        ├── pages/
        │   ├── landing.jsx         # Landing page
        │   ├── authentication.jsx  # Login / Register
        │   ├── home.jsx            # Join a meeting
        │   ├── videoMeet.jsx       # Video call room
        │   └── history.jsx         # Meeting history
        ├── utils/
        │   └── withAuth.jsx        # Auth HOC (route guard)
        └── environment.js          # Toggle prod/local backend
```

---

## API Endpoints

| Method | Endpoint                          | Description            |
|--------|-----------------------------------|------------------------|
| POST   | `/api/v1/users/register`          | Register a new user    |
| POST   | `/api/v1/users/login`             | Login and get token    |
| POST   | `/api/v1/users/add_to_activity`   | Save meeting to history|
| GET    | `/api/v1/users/get_all_activity`  | Get meeting history    |

---

## Deployment

Both frontend and backend are deployed on **Render**.

- Frontend: [https://nexus-video-call-frontend.onrender.com](https://nexus-video-call-frontend.onrender.com)
- Backend: [https://nexus-video-call.onrender.com](https://nexus-video-call.onrender.com)

---

## Author

**Raju Ansary**  
GitHub: [@RajuAnsary](https://github.com/RajuAnsary)
