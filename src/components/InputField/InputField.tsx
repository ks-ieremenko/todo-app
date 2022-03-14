import React, { FC } from "react";
import { FormikProps } from "formik";
import { TextField } from "@mui/material";

type PropsT = {
  name: string;
  label: string;
  formik: FormikProps<any>;
};

const InputField: FC<PropsT> = (props) => {
  const { name, label, formik } = props;
  return (
    <TextField
      fullWidth
      size="small"
      name={name}
      label={label}
      value={formik.values?.[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={Boolean(formik.errors?.[name])}
      helperText={formik.touched?.[name] && formik.errors?.[name]}
      style={{ marginBottom: 15 }}
    />
  );
};

export default InputField;
