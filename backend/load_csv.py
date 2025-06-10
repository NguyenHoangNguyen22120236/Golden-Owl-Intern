import csv
from sqlalchemy.orm import Session
from app.models.diem_thi import DiemThi
from app.db import SessionLocal  # Your DB session creator

def load_data_from_csv(file_path):
    session: Session = SessionLocal()
    with open(file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            score = DiemThi(
                sbd=row['sbd'],
                toan=try_float(row['toan']),
                ngu_van=try_float(row['ngu_van']),
                ngoai_ngu=try_float(row['ngoai_ngu']),
                vat_li=try_float(row['vat_li']),
                hoa_hoc=try_float(row['hoa_hoc']),
                sinh_hoc=try_float(row['sinh_hoc']),
                lich_su=try_float(row['lich_su']),
                dia_li=try_float(row['dia_li']),
                gdcd=try_float(row['gdcd']),
                ma_ngoai_ngu=row['ma_ngoai_ngu'] or None
            )
            session.add(score)
        session.commit()
    session.close()

def try_float(value):
    try:
        return float(value)
    except:
        return None

from pathlib import Path

csv_path = Path(__file__).resolve().parent.parent / "dataset" / "diem_thi_thpt_2024.csv"

if __name__ == "__main__":
    load_data_from_csv(str(csv_path))