import * as express from 'express';
import { AppLogger } from '../globals/app-logger.global';

const MOCK_PORT = process.env.MOCK_PORT ? Number(process.env.MOCK_PORT) : 3333;
const app = express();

app.use(express.json());

app.use('/', (req, res) => {
  AppLogger.log(
    `Received ${req.method} request with body: ${JSON.stringify(req.body)}`,
  );
  res.json({
    timestamp: new Date().toISOString(),
    result: `Result of ${req.body}`,
  });
});

app.listen(MOCK_PORT, () => {
  AppLogger.log(`HTTP mock server is running on port ${MOCK_PORT}`);
});
