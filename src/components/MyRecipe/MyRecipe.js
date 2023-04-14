import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getMode } from '../../redux/theme/themeSelector';
import {
  FavRecipeItem,
  RecipeImageThumb,
  RecipeImage,
  RecipeTitle,
  RecipeDescription,
  RecipePrepTime,
  DeleteButton,
  SeeRecipeBtn,
  FavRecipeTopInfo,
} from './MyRecipe.Styled';
import { ReactComponent as Icon } from '../../images/trash-icon.svg';
import { ReactComponent as DefaultImgIcon } from '../../images/default-image.svg';

export const MyRecipe = ({ recipe, onDelete }) => {
  const { mode } = useSelector(getMode);
  return (
    <FavRecipeItem mode={mode}>
      <Link to={`/recipe/${recipe._id}`}>
        <RecipeImageThumb>
          {recipe.thumb ? (
            <RecipeImage src={recipe.thumb} alt={recipe.title} />
          ) : (
            <DefaultImgIcon />
          )}
        </RecipeImageThumb>
      </Link>
      <FavRecipeTopInfo>
        <div>
          <RecipeTitle mode={mode}>{recipe.title}</RecipeTitle>
          <RecipeDescription mode={mode}>
            {recipe.description}
          </RecipeDescription>
        </div>
        <RecipePrepTime mode={mode}>{recipe.time}</RecipePrepTime>
      </FavRecipeTopInfo>

      <DeleteButton onClick={() => onDelete(recipe._id)} mode={mode}>
        <Icon />
      </DeleteButton>
      <Link to={`/recipe/${recipe._id}`}>
        <SeeRecipeBtn mode={mode}>See Recipe</SeeRecipeBtn>
      </Link>
    </FavRecipeItem>
  );
};
