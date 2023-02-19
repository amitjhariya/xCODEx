import Express from "express";
import cors from "cors";
import Routes from "./src/routes/index.js";
import { PORT } from "./src/config/index.js";
import connectToDb from "./src/config/db.js";

const app = Express();

//middlewares
app.use((req, res, next) => {
  req.startTime = Date.now();
  next();
});
app.use(cors());
app.use(Express.json());


//routes
app.use(Routes);

//db
connectToDb();

//start server
app.listen(PORT, () => {
  console.log(`Server Started at PORT : ${PORT}`);
});
