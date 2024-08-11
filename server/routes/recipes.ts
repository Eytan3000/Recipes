import express, { Express, Request, Response } from 'express';
import recipesController from '../controllers/recipesController';

export const router = express.Router();

router
  .route('/')
  .get(recipesController.getAllRecipes)
  .post(recipesController.createRecipe);

router
  .route('/:id')
  .patch(recipesController.updateRecipe)
  .delete(recipesController.deleteRecipe);
