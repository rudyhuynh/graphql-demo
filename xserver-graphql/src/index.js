import express from "express";
import graphqlHTTP from "express-graphql";
import cors from "cors";
import schema from "./schema";
import dbUtils from "./db/dbUtils";

runServer();

async function runServer() {
  try {
    await dbUtils.connect();

    const app = express();
    app.use(cors());
    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        graphiql: true
      })
    );
    app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
  } catch (err) {
    console.error(err);
  }
}
