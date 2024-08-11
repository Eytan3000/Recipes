import express from 'express';
import { router as recipesRouter } from './routes/recipes.js';
import cors from 'cors'; // Import the cors package
export const app = express();

app.use(cors({origin:'http://localhost:5173'}));
app.use(express.json());
app.use('/recipes', recipesRouter);
