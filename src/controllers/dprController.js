import { DailyReport } from "../models/index.js";

export const createDPR = async (req, res) => {
  const dpr = await DailyReport.create({
    ...req.body,
    project_id: req.params.id,
    user_id: req.user.id
  });

  res.json({
    dprId: dpr.id,
    message: "DPR created"
  });
};

export const getDPRs = async (req, res) => {
  const where = { project_id: req.params.id };

  if (req.query.date) where.date = req.query.date;

  const dprs = await DailyReport.findAll({ where });

  res.json(dprs);
};