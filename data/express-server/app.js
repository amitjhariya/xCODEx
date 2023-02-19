import Express from "express";
import cors from "cors";

import { PORT } from "./src/config/index.js";

const app = Express();

app.use(cors());

app.get('/',(req,res)=>{
    res.send({
        status:true,
        message:'success'
    })
})

app.listen(PORT, () => {
  console.log(`Server Started at PORT : ${PORT}`);
});
