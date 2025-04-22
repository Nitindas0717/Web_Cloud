# 🌐 WebCloud

WebCloud is a full-stack web-based cloud storage solution designed for secure and user-friendly file management across platforms. It allows users to register, log in, upload files, and manage their data securely with JWT authentication and MongoDB.

---

## 🚀 Features

- ✅ User registration and login  
- 🔐 Secure JWT authentication  
- 📦 File upload to local storage  
- 📂 List uploaded files (user-specific)  
- 🧾 RESTful API with Express.js  
- 🌱 MongoDB integration  

---

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT  
- **File Upload**: Multer  
- **Other tools**: Thunder Client/Postman for testing  

---

## 🧪 Getting Started Locally

### 1. Clone the repo:
```bash
git clone https://github.com/Nitindas0717/Web_Cloud.git
cd Web_Cloud
```

### 2. Install dependencies:
```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Set up `.env` in `backend/`:
```env
PORT=5000
JWT_SECRET=your_jwt_secret
MONGO_URI=mongodb://127.0.0.1:27017/webcloud
```

### 4. Run the app:
```bash
# In one terminal
cd backend
node app.js

# In another terminal
cd frontend
npm run dev
```

---

## 🧠 Future Plans

- ☁️ Integrate with cloud storage (AWS S3 or Firebase)  
- 🧾 Download and delete file options  
- 🛡️ Role-based access control  
- 📈 Dashboard with usage analytics  

---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 👤 Author

**Nitin Das**  
[GitHub Profile](https://github.com/Nitindas0717)