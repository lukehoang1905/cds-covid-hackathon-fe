import { colors } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import shadows from "./shadow";
import typography from "./typography";

const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
      paper: colors.common.white,
    },
    primary: {
      contrastText: "#ffffff",
      main: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
  },
  shadows,
  typography,
});

export default theme;
