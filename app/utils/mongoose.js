import { connect, connection } from "mongoose";

const conn = {
  isConected:false
}

export async function connectDb() {
//mongodb+srv://agilos:agilos@cluster0.6woepwc.mongodb.net/Directory
//mongodb+srv://<username>:<password>@cluster0.6woepwc.mongodb.net/Directory?retryWrites=true&w=majority
  try {
    const db = await connect(
      "mongodb+srv://agilos:agilos@cluster0.6woepwc.mongodb.net/Directory?retryWrites=true&w=majority"
    );
    console.log(db);
  } catch (error) {
    console.log(error)
  }
}
connection.on("connected", ()=>{
    console.log("conectado")
})