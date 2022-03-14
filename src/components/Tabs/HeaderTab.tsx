import React, { FC, ReactElement } from "react";
import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

type PropsT = {
  value: string;
  icon: ReactElement;
};

const HeaderTab: FC<PropsT> = styled((props: PropsT) => (
  <Tab disableRipple iconPosition="start" label={props.value} key={props.value} {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: "rgba(0, 0, 0, 0.85)",
  minHeight: "48px",
  "&:hover": {
    color: "#857bef",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#4a18ff",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

export default HeaderTab;
