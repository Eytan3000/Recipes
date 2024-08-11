import { NextFunction, Request, Response } from 'express';
import { QueryParams, Factory } from '../models/models';

const Recipes = Factory.recipesRepository();

const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const result = await Recipes.findAll(req.query as QueryParams);

    res.status(200).json({
      status: 'sucess',
      message: result.rows,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err instanceof Error ? err.message : 'An unknown error occurred',
    });
  }
};

const updateRecipe = async (req: Request, res: Response) => {
  console.log('req.params.id: ', req.params.id); //removeEytan
  console.log('req.body: ', req.body); //removeEytan
  try {
    const result = await Recipes.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: 'sucess',
      message: result.rows,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err instanceof Error ? err.message : 'An unknown error occurred',
    });
  }
};
const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const result = await Recipes.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'sucess',
      message: result.rows,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err instanceof Error ? err.message : 'An unknown error occurred',
    });
  }
};

const createRecipe = async (req: Request, res: Response) => {
  try {
    const result = await Recipes.create(req.body);
    res.status(200).json({
      status: 'sucess',
      message: result.rows,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err instanceof Error ? err.message : 'An unknown error occurred',
    });
  }
};

export default {
  getAllRecipes,
  updateRecipe,
  deleteRecipe,
  createRecipe,
};
