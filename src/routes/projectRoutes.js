import express from "express";
import auth from "../middleware/auth.js";
import { allowRoles } from "../middleware/role.js";

import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
} from "../controllers/projectController.js";

const projectRouter = express.Router();

projectRouter.post("/", auth, allowRoles("admin", "manager"), createProject);
projectRouter.get("/", auth, getProjects);
projectRouter.get("/:id", auth, getProjectById);
projectRouter.put("/:id", auth, updateProject);
projectRouter.delete("/:id", auth, allowRoles("admin"), deleteProject);

export default projectRouter;