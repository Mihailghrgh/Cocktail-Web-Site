import { Form, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  ////This way to access the data with the request
  ////This takes the request from the POST method inside the Form which then can be destructured into components
  //! In order for this to work you need to add the name and id as well inside the input value of the form otherwise this attribute is not going to work since you wont have any entries available
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our NewsLetter
      </h4>
      <div className="form-row">
        <label className="form-label">name</label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          placeholder="john"
          required
        />
      </div>
      <div className="form-row">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          placeholder="Doe"
          required
        />
      </div>
      <div className="form-row">
        <label className="form-label">Email</label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          placeholder="john.doe@email.gom"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};
export default Newsletter;
