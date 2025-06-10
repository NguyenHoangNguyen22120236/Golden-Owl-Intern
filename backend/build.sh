#!/bin/bash

# Install Python dependencies
pip install -r requirements.txt

# Run database migrations (if needed)
alembic upgrade head

python load_csv.py