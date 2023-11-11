```javascript
import { MongoClient } from 'mongodb';

let db;

export async function connectToDb() {
  if (db) return db;

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db = client.db(process.env.MONGODB_DB);

  return db;
}
```