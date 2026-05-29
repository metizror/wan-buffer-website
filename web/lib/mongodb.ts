import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

let client: MongoClient;
let db: Db;

if (!uri) throw new Error("MONGODB_URI is not defined");
if (!dbName) throw new Error("MONGODB_DB is not defined");

if (process.env.NODE_ENV === "development") {
  const g = globalThis as typeof globalThis & { _mongoClient?: MongoClient };
  if (!g._mongoClient) {
    g._mongoClient = new MongoClient(uri);
  }
  client = g._mongoClient;
} else {
  client = new MongoClient(uri);
}

export async function getDb(): Promise<Db> {
  if (!db) {
    await client.connect();
    db = client.db(dbName);
  }
  return db;
}

export { client };
