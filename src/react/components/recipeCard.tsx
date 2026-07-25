import {
  Card,
  Grid,
  Typography,
} from "@mui/joy";
import React from "react";

import { enumDtoToFmMapper } from "../../mappers/enumDtoToFm.mapper";
import { gameItemsDictionary } from "../../dictionaries/gameItems.dictionary";
import { GameClassNamesEnum } from "../../enums/gameClassNames.enum";
import { GameItemsEnum } from "../../enums/gameItems.enum";
import { RecipesFm } from "../../types/apis/frontModel/recipesFm";

type Props = {
  recipe: RecipesFm
}

export const RecipeCard: React.FC<Props> = ({
  recipe
}) => {
  let factory = recipe.ProducedIn[0] ? recipe.ProducedIn[0].name : gameItemsDictionary[GameClassNamesEnum.Undefined].name;
  factory = enumDtoToFmMapper(
    factory,
    GameItemsEnum,
    "GameItemsEnum",
  );

  const product_class_enum = recipe.Products ? recipe.Products.map((product) => {
    return (enumDtoToFmMapper(
      product ? (product.ClassName ? product.ClassName : "Undefined") : "Undefined",
      GameClassNamesEnum,
      "GameClassNamesEnum"
    ))
  }) : [GameClassNamesEnum.Undefined];
  const products = product_class_enum.map((product_class) => {return(product_class in gameItemsDictionary ? gameItemsDictionary[product_class] : gameItemsDictionary[GameClassNamesEnum.Undefined])})

  const ingredient_class_enum = recipe.Ingredients ? recipe.Ingredients.map((ingredient) => {
    return (enumDtoToFmMapper(
      ingredient ? (ingredient.ClassName ? ingredient.ClassName : "Undefined") : "Undefined",
      GameClassNamesEnum,
      "GameClassNamesEnum"
    ))
  }) : [GameClassNamesEnum.Undefined];
  const ingredients = ingredient_class_enum.map((ingredient_class) => {return(ingredient_class in gameItemsDictionary ? gameItemsDictionary[ingredient_class] : gameItemsDictionary[GameClassNamesEnum.Undefined])})

  return (
    <Grid
      xs={3}
      key={recipe.ClassName}
    >
      <Card
        variant="outlined"
        sx={{
          "&:hover": {
            borderColor: "var(--joy-palette-neutral-700)",
          },
          "cursor": "pointer",
        }}
      >
        <Grid spacing={5}>
          <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Typography textAlign={"center"} letterSpacing={0}>
              {recipe.Name}
            </Typography>
          </Grid>
          <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {ingredients ? 
              (
                <Grid
                  container
                  spacing={2}
                  sx={{ justifyContent: 'center' }}
                >
                  {ingredients.map((ingredient) => {
                      return (
                        <Grid xs={'auto'} key={ingredient.name}>
                          <img
                            src={`/assets/${ingredient.category}/${ingredient.name}.png`}
                            alt={ingredient.name}
                            style={{ height: "45px", width: "45px" }}
                          />
                        </Grid>
                      );
                    })
                  }
                </Grid>
              ) : (
                <img
                  src={`/assets/default/FGAnyUndefinedDescriptor.png`}
                  alt={"ImageNotFound"}
                  style={{ height: "45px", width: "45px" }}
                />
              )
            }
          </Grid>
          <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {ingredients && ingredients.length > 0 && (
              <img
                src={`/assets/Icon/convert-arrow-down.svg`}
                alt={"Down arrow"}
                style={{ height: "60px", width: "60px"}}
              />
            )}
          </Grid>
          <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Card
              variant="outlined"
              sx={{
                "&:hover": {
                  borderColor: "var(--joy-palette-neutral-700)",
                },
                "cursor": "pointer",
              }}
            >
              <Grid container>
                <Grid xs={6}>
                  <img
                    src={`/assets/${recipe.ProducedIn[0].category}/${recipe.ProducedIn[0].name}.png`}
                    alt={recipe.ProducedIn[0].name.replaceAll("_", " ")}
                    style={{ height: "70px", width: "70px" }}
                  />
                </Grid>
                <Grid xs={6}>
                  <Grid container direction='column' justifyContent={'space-between'} alignItems={'baseline'}>
                    <Grid>
                      <Typography>{recipe.ProducedIn[0].name.replaceAll("_", " ")}</Typography>
                    </Grid>
                    <Grid container>
                      <img
                        src={`/assets/Icon/clock.svg`}
                        alt="Clock"
                        style={{ height: "15px", width: "15px" }}
                      />
                      <Typography>{recipe.FactoryDuration.toFixed(1)} s</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={`/assets/Icon/convert-arrow-down.svg`}
              alt={"Down arrow"}
              style={{ height: "60px", width: "60px"}}
            />
          </Grid>
          <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {products ? 
              (
                <Grid
                  container
                  spacing={2}
                >
                  {products.map((product) => {
                      return (
                        <Grid xs={'auto'} key={product.name}>
                          <img
                            src={`/assets/${product.category}/${product.name}.png`}
                            alt={product.name}
                            style={{ height: "45px", width: "45px" }}
                          />
                        </Grid>
                      );
                    })
                  }
                </Grid>
              ) : (
                <img
                  src={`/assets/default/FGAnyUndefinedDescriptor.png`}
                  alt={"ImageNotFound"}
                  style={{ height: "45px", width: "45px" }}
                />
              )
            }
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}