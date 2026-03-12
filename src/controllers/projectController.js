import { Project, DailyReport } from "../models/index.js";

export const createProject = async (req, res) => {
  const project = await Project.create({
    ...req.body,
    created_by: req.user.id
  });

  res.json({ projectId: project.id, message: "Project created" });
};

export const getProjects = async (req, res) => {
  const { status, limit = 10, offset = 0 } = req.query;

  const where = status ? { status } : {};

  const projects = await Project.findAll({
    where,
    limit: Number(limit),
    offset: Number(offset)
  });

  res.json(projects);
};

export const getProjectById = async (req, res) => {
  const project = await Project.findByPk(req.params.id, {
    include: DailyReport
  });

  res.json(project);
};

export const updateProject = async (req, res) => {
  await Project.update(req.body, {
    where: { id: req.params.id }
  });

  res.json({ message: "Updated" });
};

export const deleteProject = async (req, res) => {
  await Project.destroy({
    where: { id: req.params.id }
  });

  res.json({ message: "Deleted" });
};