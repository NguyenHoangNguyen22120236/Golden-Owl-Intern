python -m venv .venv -----> create .venv

.venv\Scripts\activate

uvicorn main:app --reload

pip freeze > requirements.txt