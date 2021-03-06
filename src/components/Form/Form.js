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

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Field cannot be empty";
  }

  return errors;
};

export default reduxForm({
  form: "myform",
  validate,
})(MyForm);
