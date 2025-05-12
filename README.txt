📝 Notes App – Node.js & PostgreSQL
A simple yet powerful notes-taking application backend built using Node.js , Express , and PostgreSQL . This is a fully Dockerized application — just build and run with Docker Compose!

💡 Note: While the endpoints use the term todo, they are actually for creating and managing notes with title and content fields. 

🚀 Features
Create a user
Add new notes with title and content
Fetch all notes
Ready for frontend integration
Fully containerized with Docker
Easy to extend and customize
🛠️ Technologies Used
Node.js
Express.js
PostgreSQL
Prisma ORM
Docker & Docker Compose
Cors, Dotenv, Express Validator
📦 Endpoints
GET
/get-all-todo
Get all notes
POST
/create-User
Create a new user
POST
/add-todo
Add a new note (with title/content)

📌 All endpoints are available at:
http://localhost:4000/your-endpoint
Example: http://localhost:4000/get-all-todo 

🧪 Example Request Body
/add-todo
json


1
2
3
4
5
⌄
{
  "title": "My First Note",
  "content": "This is the body of my note.",
  "userId": 1
}
🐳 Docker Setup (Recommended)
Make sure you have Docker and Docker Compose installed.

🔧 To Start the Application:
bash


1
docker-compose up --build
This will:

Set up PostgreSQL
Install dependencies
Run migrations
Start the Node.js server on port 4000
✅ No need to manually set up the database or install Node dependencies. 

🤝 Contributions
Contributions are welcome and encouraged!

✅ Report bugs
🐛 Fix issues
💡 Suggest improvements
🎨 Help build a frontend (React/Vue/Angular/etc.)