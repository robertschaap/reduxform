import React from "react";
import { Field } from "redux-form";

import Group from "../components/Group";
import Label from "../components/Label";
import ErrorMessage from "../components/ErrorMessage";

import InputField from "../components/Input";

// Wraps passed component with error.
// This prevents redux-form from passing label unnecessarily
const fieldWithError = (Component) => {
  class FieldWithError extends React.Component {
    render() {
      const { meta, ...rest } = this.props;

      return (
        <React.Fragment>
          <Component {...rest} />
          <ErrorMessage meta={meta} />
        </React.Fragment>
      );
    }
  }
  return FieldWithError;
};

const reduxFormFieldWithGroup = (Component, displayName) => {
  class ReduxFormFieldWithGroup extends React.Component {
    render() {
      const { label, ...rest } = this.props;

      return (
        <Group>
          <Label label={label} />
          <Field {...rest} component={fieldWithError(Component)} />
        </Group>
      );
    }
  }

  if (displayName) {
    ReduxFormFieldWithGroup.displayName = displayName + "rxf";
  }

  return ReduxFormFieldWithGroup;
};

export const Input = reduxFormFieldWithGroup(InputField, "Input");
