import express from "express";
import {
  getAllSuperhero,
  getOneSuperhero,
  deleteSuperhero,
  createSuperhero,
  updateSuperhero,
} from "../routes/heroRouter";

const heroRouter = express.Router();

heroRouter.get("/", getAllSuperhero);

heroRouter.get("/:id", getOneSuperhero);

heroRouter.delete("/:id", deleteSuperhero);

heroRouter.post("/", createSuperhero);

heroRouter.put("/:id", updateSuperhero);

export default heroRouter;
