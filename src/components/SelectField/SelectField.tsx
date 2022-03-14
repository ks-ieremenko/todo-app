import React, { FC } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { Priority } from "../../constants/todo";

type PropsT = {
  name: string;
  label: string;
  priority: Priority;
  priorities: Priority[];
  handleChange(): void;
};

const SelectField: FC<PropsT> = (props) => {
  const { name, label, priority, handleChange, priorities } = props;
  return (
    <FormControl required fullWidth size="small" style={{ marginBottom: 15 }}>
      <InputLabel id="priority-label">{label}</InputLabel>
      <Select name={name} labelId="priority-label" value={priority} label={label} onChange={handleChange}>
        {priorities.map((priority: Priority) => (
          <MenuItem key={priority} value={priority}>
            {priority}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
