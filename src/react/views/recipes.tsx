import {
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/joy";
import React from "react";
import { GiCargoCrate } from "react-icons/gi";

import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import { EndpointEnum } from "../../enums/endpoint.enum";
import { RecipesDto } from "../../types/apis/dataTransferObject/recipesDto";
import { RecipesFm } from "../../types/apis/frontModel/recipesFm";
import { RecipeCard } from "../components/recipeCard";

export const Recipes: React.FC = () => {
  let { data: recipes } = useAutoRefetch<RecipesDto[], RecipesFm[]>(
    EndpointEnum.RECIPE,
    !EndpointEnum.RECIPE,
  );

  recipes = recipes ? recipes.filter(
    (item) => item.ProducedIn[0] && item.ProducedIn[0].name !== "BP_EquipmentDescriptorBuildGun_C" && item.ProducedIn[0].name !== "FGAnyUndefinedDescriptor"
  ) : undefined;

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Card
        variant="outlined"
        sx={{ marginBottom: "30px" }}
      >
        <CardContent>
          <Grid
            container
            display="flex"
            alignItems="center"
          >
            <Grid xs>
              <Typography
                level="h2"
                marginBottom="5px"
                fontWeight={600}
              >
                Available Recipes
              </Typography>
            </Grid>
            <Grid>
              <IconButton size="lg">
                <GiCargoCrate
                  size="22px"
                  color="rgba(255,255,255,0.1)"
                />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {recipes ? (
        <Grid
          container
          spacing={2}
        >
          {recipes.map((recipe) => {
            return (
              <RecipeCard 
                recipe={recipe}
              />
            )
          })}
        </Grid>
      ) : (
        <Grid
          container
          spacing={3}
          sx={{ opacity: 0.5 }}
        ></Grid>
      )};
    </Container>
  );
};
