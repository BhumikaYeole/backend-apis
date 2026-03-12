import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Project = sequelize.define(
  "Project",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    status: {
      type: DataTypes.ENUM("planned", "active", "completed"),
      defaultValue: "planned"
    },
    created_by: DataTypes.INTEGER
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false
  }
);

export default Project;