import { Paper, styled } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginBottom: 10,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
}));

export default StyledPaper;
