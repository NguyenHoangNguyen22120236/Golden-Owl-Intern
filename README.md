# Project Setup Guide (FastAPI + React.js)

This guide explains how to set up and run both the backend (FastAPI) and frontend (React.js) locally on your machine.

## Prerequisites

- **Python 3.8+** (for backend)
- **Node.js 16+** (for frontend)
- **PostgreSQL** (or your preferred database)
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
    DATABASE_URL=postgresql://user:password@localhost:5432/dbname
    SECRET_KEY=your-secret-key
    ALGORITHM=HS256
    ACCESS_TOKEN_EXPIRE_MINUTES=30
    ```

5. **Run database migrations (if using Alembic)**
    ```bash
    alembic upgrade head
    ```

6. **Start the backend server**
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
   Create a `.env` file in the [frontend](http://_vscodecontentref_/0) directory with your configuration:
    ```env
    REACT_APP_API_URL=http://localhost:8000
    ```

4. **Start the frontend development server**
    ```bash
    npm start
    ```
    The frontend will be available at: [http://localhost:3000](http://localhost:3000)

---

## Docker Setup (Alternative)

If you prefer using Docker:

1. **Build and start containers**
    ```bash
    docker-compose up --build
    ```

2. **Access services**
    - Backend: [http://localhost:8000](http://localhost:8000)
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Database: PostgreSQL on port 5432

---

## Project Structure
    .
    ├── backend/               # FastAPI backend
    │   ├── app/               # Application code
    │   ├── alembic/           # Database migrations
    │   ├── .env               # Environment variables
    │   ├── requirements.txt   # Python dependencies
    │   └── main.py            # FastAPI entry point
    │
    ├── frontend/              # React frontend
    │   ├── public/            # Static files
    │   ├── src/               # React components
    │   ├── .env               # Frontend environment variables
    │   └── package.json       # Node.js dependencies
    │
    ├── docker-compose.yml     # Docker configuration
    └── README.md              # This file

## Troubleshooting

**Backend won't start:**
- Verify PostgreSQL is running
- Check `.env` file configuration
- Ensure all dependencies are installed

**Frontend can't connect to backend:**
- Verify backend is running
- Check CORS settings in FastAPI
- Ensure `REACT_APP_API_URL` is correct

**Database issues:**
- Run `alembic upgrade head` to apply migrations
- Check database connection string in `.env`

