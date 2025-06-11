# Task Management API

A GraphQL-based Task Management API built with NestJS, PostgreSQL, and TypeORM.

## Features

- GraphQL API with CRUD operations for tasks
- PostgreSQL database integration
- Input validation
- Error handling
- GraphQL Playground for API testing

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- pnpm or npm

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd task-backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Then edit `.env` with your database credentials and other configurations.

## Database Setup

1. Create a PostgreSQL database
2. Update the `.env` file with your database credentials:
```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_database_name
```

## Running the Application

### Development
```bash
npm run start:dev
```

### Production
```bash
npm run build
npm run start:prod
```

## API Documentation

The GraphQL Playground is available at `http://localhost:3000/graphql` when the server is running.

### Available Operations

#### Queries
- `tasks`: List all tasks
- `task(id: ID!)`: Get a single task by ID

#### Mutations
- `createTask(input: CreateTaskInput!)`: Create a new task
- `updateTask(id: ID!, input: UpdateTaskInput!)`: Update an existing task
- `deleteTask(id: ID!)`: Delete a task

### Example Queries

1. Create a task:
```graphql
mutation {
  createTask(input: {
    title: "Complete Project"
    description: "Finish the assessment project"
    completed: false
  }) {
    id
    title
    description
    completed
    createdAt
  }
}
```

2. Get all tasks:
```graphql
query {
  tasks {
    id
    title
    description
    completed
    createdAt
  }
}
```

3. Get a single task:
```graphql
query {
  task(id: 1) {
    id
    title
    description
    completed
    createdAt
  }
}
```

4. Update a task:
```graphql
mutation {
  updateTask(
    id: 1
    input: {
      title: "Updated Task"
      completed: true
    }
  ) {
    id
    title
    completed
  }
}
```

5. Delete a task:
```graphql
mutation {
  deleteTask(id: 1)
}
```

## Project Structure

```
src/
├── task/
│   ├── dto/
│   │   ├── create-task.input.ts
│   │   └── update-task.input.ts
│   ├── task.entity.ts
│   ├── task.module.ts
│   ├── task.resolver.ts
│   └── task.service.ts
├── app.module.ts
├── main.ts
└── schema.gql
```

