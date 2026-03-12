import User from "./User.js";
import Project from "./Project.js";
import DailyReport from "./DailyReport.js";

Project.belongsTo(User, { foreignKey: "created_by" });

DailyReport.belongsTo(Project, { foreignKey: "project_id" });
DailyReport.belongsTo(User, { foreignKey: "user_id" });

Project.hasMany(DailyReport, { foreignKey: "project_id" });

export { User, Project, DailyReport };