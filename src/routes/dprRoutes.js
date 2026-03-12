import express from "express";
import auth from "../middleware/auth.js";

import {
  createDPR,
  getDPRs
} from "../controllers/dprController.js";

const dprRouter = express.Router({ mergeParams: true });

dprRouter.post("/", auth, createDPR);
dprRouter.get("/", auth, getDPRs);

export default dprRouter;