import React, { FC } from "react";
import { Button } from "@mui/material";

import InputField from "../InputField/InputField";
import SelectField from "../SelectField/SelectField";

import { Priority } from "../../constants/todo";

type PropsT = {
  formik: any;
};

const Form: FC<PropsT> = ({ formik }) => {
  const priorities = Object.values(Priority);

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField name="description" label="Description" formik={formik} />
      <SelectField
        priority={formik.values.priority}
        priorities={priorities}
        name="priority"
        label="Priority"
        handleChange={formik.handleChange}
      />
      <Button color="primary" variant="contained" fullWidth type="submit" disabled={!formik.isValid || !formik.dirty}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
