import { Router } from "express";
import ProjectRouter from "./project.js";
import GeneratorRouter from "./gererator.js";
import os from "node:os";
const router = Router();

router.get("/health", (req, res) => {
  const cpuUsage = os.loadavg()[0];
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  const diskUsage = Math.round((usedMemory / totalMemory) * 100);
  const responseTime = Date.now() - req.startTime;

  const healthStatus = {
    status: "OK",
    uptime: process.uptime(),
    cpu: `${cpuUsage.toFixed(2)}%`,
    memory: `${(usedMemory / 1024 / 1024).toFixed(2)} MB / ${(
      totalMemory /
      1024 /
      1024
    ).toFixed(2)} MB`,
    disk: `${diskUsage}%`,
    responseTime: `${responseTime} ms`,
  };

  res.status(200).json(healthStatus);
});

router.use("/api/v1/projects", ProjectRouter);
router.use("/api/v1/generator", GeneratorRouter);

export default router;
