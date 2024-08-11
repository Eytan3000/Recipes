import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

import { app } from './app.js';

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`${process.env.NODE_ENV}: App running on port ${port}...`);
});
