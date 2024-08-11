import { useNavigate } from '@tanstack/react-router';
import { Box, Button, Divider, Typography } from '@mui/joy';
import RecipeForm from './screens/RecipeForm';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        height="65dvh"
        marginTop="30%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          flexDirection={'column'}>
          <Typography level="h1">Recipes!</Typography>
          <Typography level="body-md">
            One platform to rule them all.
          </Typography>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box
          mb={6}
          display="flex"
          alignItems="center"
          flexDirection={'column'}
          gap={2}>
          <Button onClick={() => navigate({ to: '/AllRecipes' })}>
            Show all recipes
          </Button>
        </Box>
        <Typography level="h4" style={{ margin: 0 }}>
          Save a new recipe
        </Typography>
        <RecipeForm />
      </Box>
    </>
  );
}

export default Home;
