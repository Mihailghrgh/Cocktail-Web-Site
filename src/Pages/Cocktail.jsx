import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";
const singleURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleURL}${id}`);
      return data;
    },
  };
};

////important !! useLoaderData is used to return the data from the nearest loader component
export const loader =
  (queryClient) =>
  async ({ params }) => {
    //// So, Instead of doing like a deeply nested Component structure to pass on the fetch data , we used the loader functions which is ASYNC to take the params and pass it down the component

    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();

  const { data } = useQuery(singleCocktailQuery(id));

  if (!data) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: img,
    strAlcoholic: info,
    strCategory: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredient = Object.keys(singleDrink)
    .filter(
      (item) => item.startsWith("strIngredient") && singleDrink[item] !== null
    )
    .map((key) => singleDrink[key]);

  console.log(validIngredient);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          {" "}
          Back home{" "}
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={img} className="img" alt={id} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredient :</span>
            {validIngredient.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredient.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
