from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db import get_db
from app.controllers.diem_thi import DiemThiController

diem_thi_router = APIRouter()

@diem_thi_router.get("/sbd/{sbd}")
def get_score_by_sbd(sbd: str, db: Session = Depends(get_db)):
    controller = DiemThiController(db)
    score = controller.get_score_by_sbd(sbd)
    return score


@diem_thi_router.get("/report/score-levels-by-subject")
def report_score_levels_by_subject(db: Session = Depends(get_db)):
    controller = DiemThiController(db)
    return controller.report_score_levels_by_subject()


@diem_thi_router.get("/top-10-group-a")
def get_top_10_group_a(db: Session = Depends(get_db)):
    controller = DiemThiController(db)
    return controller.get_top_10_group_a()