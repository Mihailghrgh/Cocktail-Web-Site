import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

const singleURL =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({params}) => {
  const {id} = params
  const response = await axios.get(`${singleURL}${id}`);
  console.log(response);
  
  return response.data.drinks
};

const Cocktail = () => {
  return <div>Cocktail</div>;
};
export default Cocktail;
