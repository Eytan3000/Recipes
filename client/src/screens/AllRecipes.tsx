import {
  Box,
  Button,
  Card,
  Modal,
  ModalClose,
  ModalDialog,
  Sheet,
  stepClasses,
  Typography,
} from '@mui/joy';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteRecipes, getAllRecipes } from '../API';
import { RecipeData } from '../types';
import Loader from './Loader';
import Error from './Error';
import { useState } from 'react';
import RecipeForm from './RecipeForm';
import EditingForm from './EditingForm';

export default function AllRecipes() {
  const [sort, setSort] = useState(false);
  const [open, setOpen] = useState(false);
  const [editingData, setEditingData] = useState({
    id: 0,
    steps: '',
    title: '',
    ingredients: '',
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteRecipes,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allRecipes'] });
    },
  });

  const { data, isLoading, isError } = useQuery<{
    message: RecipeData[];
    status: string;
  }>({
    queryKey: ['allRecipes'],
    queryFn: getAllRecipes,
  });

  const sortRecipesByTitle = (recipes: RecipeData[]) => {
    return recipes.slice().sort((a, b) => a.title.localeCompare(b.title));
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }
  if (data) {
    function handleDelete(id: number) {
      mutation.mutate({ id });
    }

    let displayedData = data.message;
    if (sort) {
      displayedData = sortRecipesByTitle(data.message);
    }
    return (
      <>
        <Box p={3} display="flex" flexDirection="column" gap={2}>
          <Typography level="body-lg">All Recipes</Typography>

          <Button
            onClick={() => setSort((prev) => !prev)}
            variant={sort ? 'solid' : 'outlined'}
            sx={{ width: '150px' }}>
            Sort by title
          </Button>

          {displayedData.map((recipe) => (
            <Card sx={{ p: 5, minWidth: '400px' }} key={recipe.id}>
              <Typography level="h4">{recipe.title}</Typography>
              <Typography level="body-md">
                Ingredients: {recipe.ingredients}
              </Typography>
              <Typography level="body-sm">Steps: {recipe.steps}</Typography>

              <Button
                variant="plain"
                onClick={() => {
                  setEditingData({
                    id: recipe.id,
                    title: recipe.title,
                    ingredients: recipe.ingredients,
                    steps: recipe.steps,
                  });
                  setOpen(true);
                }}>
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(recipe.id)}
                variant="plain"
                color="danger">
                delete
              </Button>
            </Card>
          ))}
        </Box>

        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 500,
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
            }}>
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <EditingForm setOpen={setOpen} data={editingData} />
          </Sheet>
        </Modal>
      </>
    );
  }
}
