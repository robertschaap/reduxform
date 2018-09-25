import React from "react";
import "./Form.css";
import { reduxForm } from "redux-form";
import { Input } from "../../modules/form";

import Button from "../Button";

const MyForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <Input name="name" label="Input Field" />
      <Button submit>Submit</Button>
    </form>
  );
};

export default reduxForm({
  form: "myform"
})(MyForm);
