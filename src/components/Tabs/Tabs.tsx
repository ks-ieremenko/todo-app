import { Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "rgba(55,0,253,0.66)",
  },
});

export default StyledTabs;
