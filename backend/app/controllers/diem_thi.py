from models.diem_thi import DiemThi
from fastapi import HTTPException

class DiemThiController:

    def __init__(self, db):
        self.db = db

    def get_score_by_sbd(self, sbd: str):
        score = DiemThi.get_by_sbd(self.db, sbd)
        if score is None:
            raise HTTPException(status_code=404, detail="Score not found with this SBD")
        return score

    def categorize_score(self, score):
        if score is None:
            return None
        elif score >= 8:
            return ">= 8"
        elif score >= 6:
            return "6 - < 8"
        elif score >= 4:
            return "4 - < 6"
        else:
            return "< 4"

    def report_score_levels_by_subject(self):
        subjects = ['toan', 'vat_li', 'hoa_hoc', 'ngu_van', 'lich_su', 'dia_li', 'gdcd', 'sinh_hoc', 'ngoai_ngu']
        result = {}

        for subject in subjects:
            result[subject] = {
                ">= 8": 0,
                "6 - < 8": 0,
                "4 - < 6": 0,
                "< 4": 0
            }

            scores = DiemThi.get_subject_scores(self.db, subject)
            for row in scores:
                score = row[0]
                category = self.categorize_score(score)
                if category:
                    result[subject][category] += 1

        return result

    def get_top_10_group_a(self):
        results  = DiemThi.get_top_10_group_a(self.db)
        return [
                {
                    "sbd": diem_thi.sbd,
                    "toan": diem_thi.toan,
                    "vat_li": diem_thi.vat_li,
                    "hoa_hoc": diem_thi.hoa_hoc,
                    "total_score": total_score
                }
                for diem_thi, total_score in results 
            ]

    def close(self):
        self.db.close()
