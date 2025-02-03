import { Link, useOutletContext } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";

const CocktailCard = ({ id, name, info, img, glass }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={img} className="img" alt={id} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        {/* ////This Link component is used to be passed in the loader function, the loader takes all elements passed the cocktail/ ....element */}
        <Link to={`/cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCard;
