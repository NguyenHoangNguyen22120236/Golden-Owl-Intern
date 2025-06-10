from sqlalchemy import Column, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session

Base = declarative_base()

class DiemThi(Base):
    __tablename__ = 'diem_thi'

    sbd = Column(String, primary_key=True)
    toan = Column(Float, nullable=True)
    ngu_van = Column(Float, nullable=True)
    ngoai_ngu = Column(Float, nullable=True)
    vat_li = Column(Float, nullable=True)
    hoa_hoc = Column(Float, nullable=True)
    sinh_hoc = Column(Float, nullable=True)
    lich_su = Column(Float, nullable=True)
    dia_li = Column(Float, nullable=True)
    gdcd = Column(Float, nullable=True)
    ma_ngoai_ngu = Column(String, nullable=True)
    
    @staticmethod
    def get_by_sbd(db: Session, sbd: str):
        return db.query(DiemThi).filter(DiemThi.sbd == sbd).one_or_none()

    @staticmethod
    def get_subject_scores(db: Session, subject: str):
        return db.query(getattr(DiemThi, subject)).filter(getattr(DiemThi, subject).isnot(None)).all()

    @staticmethod
    def get_top_10_group_a(db: Session):
        return (
            db.query(DiemThi, 
                     (DiemThi.toan + DiemThi.vat_li + DiemThi.hoa_hoc).label("total_score"))
            .filter(DiemThi.toan.isnot(None), DiemThi.vat_li.isnot(None), DiemThi.hoa_hoc.isnot(None))
            .order_by((DiemThi.toan + DiemThi.vat_li + DiemThi.hoa_hoc).desc())
            .limit(10)
            .all()
        )
