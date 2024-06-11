Setting Up and Running the Application

Backend:
Navigate to the backend directory: cd task-manager-backend
Install dependencies: npm install
Start the server: node server.js
The backend server should be running on http://localhost:5000.

Frontend:
Navigate to the frontend directory: cd task-manager
Install dependencies: npm install
Start the development server: npm start
The frontend should be running on http://localhost:3000.

API Documentation
Users Endpoint:
1. GET /api/users: Get all users
2. POST /api/users: Create a new user

Tasks Endpoint:
1. GET /api/tasks: Get all tasks
2. POST /api/tasks: Create a new task
3. PUT /api/tasks/:id: Update a task by ID
4. DELETE /api/tasks/:id: Delete a task by ID

UI Components
1. App Component: The main component that holds the entire application.
2. TaskList Component: Displays a list of tasks.
3. Task Component: Represents a single task.
4. UserView Component: Displays tasks assigned to a particular user.
5. AllUsersView Component: Displays tasks for all users.