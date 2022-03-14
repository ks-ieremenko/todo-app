import * as yup from "yup";

export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export const priorityColors = {
  [Priority.Low]: {
    backgroundColor: "rgba(0,58,250,0.11)",
    color: "rgb(8, 25, 140)",
  },
  [Priority.Medium]: {
    backgroundColor: "rgba(255, 164, 71, 0.2)",
    color: "rgb(255, 164, 71)",
  },
  [Priority.High]: {
    backgroundColor: "rgba(255,0,0,0.32)",
    color: "rgb(128, 2, 2)",
  },
};

export const todoValidationSchema = yup.object({
  description: yup.string().required("Description is required"),
  priority: yup.string().required("Priority is required"),
});
