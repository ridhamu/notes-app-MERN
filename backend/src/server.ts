import app from "./app"
import env from "./util/validateEnv";
import mongoose from "mongoose";


const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING).then(() => {
  console.log("===MongoDB Connected===");
  app.listen(port!, () => {
    console.log("server berjalan di port " + port);
  });
});
