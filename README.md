# 📝 Blog Application

A full-stack **Blog Application** built using **Node.js, Express.js, MongoDB, and EJS**.
The application allows users to create, read, and manage blog posts with authentication and comments.

## 🚀 Features

* 🔐 User Authentication
* 👤 User Registration & Login
* 📝 Create Blog Posts
* 📖 Read Blog Posts
* 💬 Comment on Blog Posts
* 🖼️ Upload Cover Images
* 👥 User-based Blog Management
* 🔒 Authentication Middleware
* 📱 Responsive Web Interface
* 🗄️ MongoDB Database Integration

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Frontend

* HTML
* CSS
* Bootstrap
* EJS

### Other Tools

* Git & GitHub
* Multer for file uploads
* Cookie-based authentication

## 📂 Project Structure

```text
Blog/
│
├── middlewares/
│   └── Authentication middleware
│
├── models/
│   ├── User model
│   ├── Blog model
│   └── Comment model
│
├── public/
│   ├── CSS
│   ├── JavaScript
│   └── Images
│
├── routes/
│   ├── User routes
│   ├── Blog routes
│   └── Comment routes
│
├── services/
│   └── Authentication / utility services
│
├── views/
│   ├── Layouts
│   ├── Blog pages
│   ├── Authentication pages
│   └── User pages
│
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/VedantMeharkure/Blog.git
```

### 2. Navigate to the project

```bash
cd Blog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
MONGO_URL=your_mongodb_connection_string
PORT=8000
```

Add any other environment variables required by your local configuration.

### 5. Start the application

For development:

```bash
npm start
```

or:

```bash
node index.js
```

The application will be available at:

```text
http://localhost:8000
```

## 🔑 Authentication

The application provides user authentication functionality.

Users can:

* Register an account
* Log in
* Log out
* Create blogs after authentication
* Manage their blog content
* Add comments to blog posts

Authentication middleware protects routes that require a logged-in user.

## 🗄️ Database

The application uses **MongoDB** with **Mongoose** for database management.

Main entities include:

* **User**
* **Blog**
* **Comment**

Relationships between users, blogs, and comments are managed using MongoDB ObjectId references.

## 💬 Comments

Users can add comments to blog posts. Each comment is associated with:

* Comment content
* Blog ID
* User who created the comment
* Creation timestamp

## 📸 Screenshots

Add screenshots of your application here:

```markdown
![Home Page](screenshots/home.png)

![Blog Page](screenshots/blog.png)

![Login Page](screenshots/login.png)
```

## 🔮 Future Improvements

* [ ] Like / Unlike blogs
* [ ] Blog search functionality
* [ ] Categories and tags
* [ ] User profile pages
* [ ] Rich text editor
* [ ] Pagination
* [ ] Blog image optimization
* [ ] Admin dashboard
* [ ] REST API
* [ ] Deployment with MongoDB Atlas

## 👨‍💻 Author

**Vedant Meharkure**

GitHub:
https://github.com/VedantMeharkure

## 📄 License

This project is open-source and available for learning and development purposes.
Author : Vedant Meharkure
