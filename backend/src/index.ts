import express from 'express';
import { Request, Response } from 'express';
import * as userController from './controllers';

// import cors from "cors"; // for CORS setup, usage: app.use(cors());
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3030; // default port to listen

app.use(bodyParser.json());

app.get('/api', (req: Request, res: Response) => {
  const randomId = `${Math.random()}`.slice(2);
  const path = `/api/item/${randomId}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Fetch one item: <a href="${path}">${path}</a>`);
});

app.post('/api/sendToAirtable', userController.sendToAirtable);

app.get('/api/item/:itemId', (req: Request, res: Response) => {
  const { itemId } = req.params;
  res.json({ itemId });
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});

module.exports = app;
