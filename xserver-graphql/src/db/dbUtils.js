import { MongoClient } from "mongodb";

const CONNECTION_STRING = "mongodb://localhost:27017/graphqldemo";
const DB_NAME = "graphqldemo";

class DbUtils {
  constructor() {
    this.db = null;

    this.connect = this.connect.bind(this);
    this.getDb = this.getDb.bind(this);
  }
  async connect() {
    const client = await MongoClient.connect(CONNECTION_STRING);
    this.db = client.db(DB_NAME);
    console.info("DB Connected!");
  }
  getDb() {
    return this.db;
  }
}

const dbUtils = new DbUtils();
export default dbUtils;
