import { createFileRoute } from '@tanstack/react-router';
import AllRecipes from '../screens/AllRecipes';

export const Route = createFileRoute('/AllRecipes')({
  component: AllRecipes,
});
