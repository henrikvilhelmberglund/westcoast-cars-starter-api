import express from "express";
import cors from "cors";

import { getVehicle, listAllVehicles } from "./mock/vehicles.mjs";

const app = express();

app.use(cors());

app.get("/api/", (req, res) => {
  const vehicles = listAllVehicles();
  res.status(200).json({
    status: "Success",
    statusCode: 200,
    items: vehicles.length,
    data: vehicles,
  });
});

app.get("/api/:id", (req, res) => {
  const vehicle = getVehicle(+req.params.id);
  res
    .status(200)
    .json({ status: "success", statusCode: 200, data: vehicle ?? null });
});

const port = 3000;
app.listen(port, () =>
  console.log(`Server is up and running on port: ${port}`)
);
