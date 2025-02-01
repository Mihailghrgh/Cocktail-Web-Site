import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/Navbar";
//Styled Component how to use if you want something unique
// const StyledBtn = styled.button`
// background:red;
// color:white;
// font-size:2rem;
// padding:1rem;
// `
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        {/* <StyledBtn>styled btn</StyledBtn> */}
        <span className="logo">Mirabile iter</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home Page
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            News Letter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
