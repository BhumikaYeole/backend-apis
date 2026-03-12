import express from "express";
import dotenv from "dotenv";
import sequelize from "./src/config/db.js";

import authRoutes from "./src/routes/authRoutes.js";
import projectRoutes from "./src/routes/projectRoutes.js";
import dprRoutes from "./src/routes/dprRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);
app.use("/projects/:id/dpr", dprRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => console.log("Server running"));
});