# Book Explorer

Book Explorer is a a full-stack web application where users can browse, search, and visualize information about a collection of books. The frontend manages the UI and state, while the backend provides RESTful APIs for authentication, book management, and other functionalities.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
  - [Running the Frontend](#running-the-frontend)
  - [Running the Backend](#running-the-backend)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Linting & Formatting](#linting--formatting)
- [License](#license)

---

## Technologies Used

### Frontend (Next.js)

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Charts & Data Visualization:** Chart.js
- **HTTP Requests:** Axios

### Backend (Node.js & Express)

- **Runtime:** Node.js
- **Framework:** Express.js
- **Authentication:** JWT (jsonwebtoken)
- **Validation:** express-validator
- **Database:** JSON file storage (users.json)
- **Password Hashing:** bcrypt.js

---

## Folder Structure

### Frontend (Next.js)

```sh
root
├── src
│   ├── app
│   │   ├── home
│   │   ├── login
│   │   ├── signup
│   ├── components
│   │   ├── atom
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Label.tsx
│   │   │   ├── Loader.tsx
│   │   ├── molecules
│   │   │   ├── FormField.tsx
│   │   │   ├── BookModal.tsx
│   │   │   ├── LineChart.tsx
│   │   │   ├── Table.tsx
│   │   ├── organisms
│   │   │   ├── LoginForm.tsx
│   │   │   ├── SignupForm.tsx
│   │   │   ├── BookList.tsx
│   │   │   ├── Header.tsx
│   ├── types
│   │   ├── api.ts
│   │   ├── book.ts
│   ├── utils
│   │   ├── axios.ts
```

### Backend (Node.js)

```sh
backend
├── src
│   ├── controllers
│   │   ├── users.controllers.ts
│   │   ├── books.controllers.ts
│   ├── services
│   │   ├── users.services.ts
│   │   ├── books.services.ts
│   ├── routes
│   │   ├── users.routes.ts
│   │   ├── books.routes.ts
│   ├── middlewares
│   │   ├── error.middleware.ts
│   │   ├── auth.middleware.ts
│   ├── data
│   │   ├── users.json  # JSON file storage for users
│   ├── types
│   │   ├── books.types.ts
│   │   ├── users.types.ts
│   ├── utils
│   │   ├── constants.ts
│   ├── server.ts
├── build  # Compiled TypeScript output
├── .env
├── package.json
├── tsconfig.json
```

---

## Installation

### Prerequisites

- **Node.js** (v16 or later recommended)
- **npm** (recommended)

### Clone the Repository

```sh
git clone https://github.com/rafaelre898/Book_Explorer.git
cd Book_Explorer
```

### Install Dependencies

#### Frontend:

```sh
cd frontend
npm install
```

#### Backend:

```sh
cd backend
npm install
```

---

## Running the Project

### Running the Frontend

To start the Next.js development server:

```sh
cd frontend
npm run dev
```

This runs the frontend at `http://localhost:3000` by default.

### Running the Backend

To start the Node.js backend:

```sh
cd backend
npm run dev
```

This starts the backend at `http://localhost:5000` (or as configured in `.env`).

---

## API Documentation

The backend provides REST APIs for authentication and book management. Example routes:

- `POST /api/login` - User login
- `POST /api/signup` - User registration
- `GET /api/books` - Fetch all books
- `GET /api/books/:bookId` - Fetch a single book

---

## Environment Variables

Create a `.env` file in the backend directory and add:

```sh
PORT=5000
GOOGLE_BOOKS_API_URL=https://www.googleapis.com/books/v1/volumes
SECRET_KEY=your_secret_key
```

For the frontend, create a `.env.local` file:

```sh
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## Linting & Formatting

### Frontend

```sh
cd frontend
npm run lint
```

### Backend

```sh
cd backend
npm run lint
```

---

## License

This project is licensed under the MIT License.
