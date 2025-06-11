# Demo

## 👉 Live Demo Link: [https://frontend-production-46c0.up.railway.app/](https://frontend-production-46c0.up.railway.app/)
## 📽️ Video Demo: [Youtube Link](https://www.youtube.com/watch?v=dWhvKQYKD1c)

# Project Setup Guide (FastAPI + React.js)

This guide explains how to set up and run both the backend (FastAPI) and frontend (React.js) locally on your machine.

## Prerequisites

- **Python 3.8+** (for backend)
- **Node.js 16+** (for frontend)
- **PostgreSQL** (for database)
- **Docker** (for set up backend)
- **pip** (Python package manager)
- **npm** (Node package manager)

---

## Backend Setup (FastAPI)

1. **Navigate to backend directory**
    ```bash
    cd backend
    ```

2. **Create and activate a virtual environment (recommended)**
    ```bash
    python -m venv .venv
    source .venv/bin/activate  # On Windows: .venv\Scripts\activate
    ```

3. **Install dependencies**
    ```bash
    pip install -r requirements.txt
    ```

4. **Set up environment variables**  
   Create a `.env` file in the `backend` directory with your configuration:
    ```env
    # PostgreSQL Database Configuration
    POSTGRES_USER=postgres_username
    POSTGRES_PASSWORD=postgres_password
    POSTGRES_DB=database_name
    COMPOSE_PROJECT_NAME=project_name

    # Full database URL (used by backend to connect to PostgreSQL)
    DATABASE_URL=postgresql://<postgres_username>:<postgres_password>@localhost:5433/<database_name>

    # Frontend URL (used for CORS or redirects)
    FRONTEND_URL=http://localhost:3000
    ```

5. **Run PostgreSQL using Docker**
    ```bash
    docker-compose up -d
    ```

6. **Run database migrations**
    ```bash
    alembic upgrade head
    python load_csv.py  #To load csv data to database
    ```

7. **Start the backend server**
    ```bash
    uvicorn main:app --reload
    ```
    The backend will be available at: [http://localhost:8000](http://localhost:8000)

---

## Frontend Setup (React.js)

1. **Navigate to frontend directory**
    ```bash
    cd ../frontend
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**  
   Create a `.env` file in the `frontend` directory with your configuration:
    ```env
    REACT_APP_BACKEND_URL=http://localhost:8000
    ```

4. **Start the frontend development server**
    ```bash
    npm start
    ```
    The frontend will be available at: [http://localhost:3000](http://localhost:3000)

---

## Project Structure
    .
    ├── backend/               # FastAPI backend
    │   ├── app/               # Application code
    │   ├── alembic/           # Database migrations
    │   ├── .env               # Environment variables
    │   ├── requirements.txt   # Python dependencies
    │   ├── main.py            # FastAPI entry point
    |   ├── dataset            # Dataset of CSV file
    |   ├── load_csv.py        # Load CSV data to database
    |   └── docker-compose.yml     # Docker configuration
    │
    ├── frontend/              # React frontend
    │   ├── public/            # Static files
    │   ├── src/               # React components
    │   ├── .env               # Frontend environment variables
    │   └── package.json       # Node.js dependencies
    │
    └── README.md              # This file

## Troubleshooting

**Backend won't start:**
- Verify PostgreSQL is running
- Check `.env` file configuration
- Ensure all dependencies are installed

**Frontend can't connect to backend:**
- Verify backend is running
- Check CORS settings in FastAPI
- Ensure `REACT_APP_BACKEND_URL` is correct

**Database issues:**
- Run `alembic upgrade head` to apply migrations
- Check database connection string in `.env`

