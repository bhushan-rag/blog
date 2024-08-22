// src/styles/app.styles.js
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  navigationBar: {
    //     borderRadius: 8,
    background: "linear-gradient(to left,lightblue,#8661d1)",
    margin: "0px 0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
          alignItems: "center",
    borderRadius:"8px",
  },
  title: {
    color: "#fff",
    fontFamily: "Poppins",
    fontStyle: "bold",
    fontWeight: "600",
  },
  image: {
    marginRight: "25px",
    borderRadius: "50px",
  },
}));
