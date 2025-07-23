📝 Task Manager App
A simple and secure task management application built with React, TypeScript, React Context API, and Auth0 for authentication. Users can create, edit, and delete tasks in a protected environment.

🔧 Features
🔐 Secure login/logout with Auth0

📋 Create, edit, and delete tasks

🔎 View full task details

✅ Mark tasks as complete or incomplete

⚛️ Global state management using React Context API

💅 Responsive UI styled with Bootstrap

🛡️ Protected routes for authenticated users only

🚀 Getting Started
Prerequisites
Node.js (v18+)

npm or yarn

Auth0 account (free tier)

Installation
bash
Copy
Edit
git clone https://github.com/D3adchef/TaskManagerApp.git
cd TaskManagerApp
npm install
npm run dev
🔐 Auth0 Setup
To run this app with your own Auth0 credentials:

Create an Auth0 application at auth0.com.

In main.tsx, replace the following with your credentials:

tsx
Copy
Edit
<Auth0Provider
  domain="YOUR_DOMAIN"
  clientId="YOUR_CLIENT_ID"
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
>
🧪 Testing
Manual testing performed through browser:

✅ Auth0 login/logout verified

✅ Task creation, editing, and deletion

✅ Protected routes confirmed

📁 Project Structure
graphql
Copy
Edit
src/
│
├── components/        # TaskForm, TaskList, Navbar, TaskDetails
├── context/           # TaskContext with global state
├── pages/             # Home and Dashboard pages
├── types/             # Task TypeScript interfaces
├── App.tsx            # Main routing and layout
├── main.tsx           # Entry point and provider setup
├── index.css          # Global styles
👨‍💻 Author
Joseph Marquis

GitHub: @D3adchef

Portfolio: d3adchef.github.io/Portfolio

