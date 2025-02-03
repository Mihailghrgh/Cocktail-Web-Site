import { Form, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";
const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form">
        <input
          className="form-input"
          type="search"
          name="search"
          placeholder="mojito"
          defaultValue={searchTerm}
        />
        <button className="btn form-btn" disabled={isSubmitting} type="submit">
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};
export default SearchForm;
