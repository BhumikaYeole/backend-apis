import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const DailyReport = sequelize.define(
  "DailyReport",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    project_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    work_description: DataTypes.TEXT,
    weather: DataTypes.STRING,
    worker_count: DataTypes.INTEGER
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false
  }
);

export default DailyReport;