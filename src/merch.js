import React from "react";
import {
  makeStyles,
  Typography,
  List,
  Container,
  ListItem,
} from "@material-ui/core";
import SimpleBar from "simplebar-react";
import merchImage from "./assets/merch/3p6Pv5VM.jpg";
import merchImage2 from "./assets/merch/8z3S5AVT.jpg";
import merchImage3 from "./assets/merch/aTdCiM3V.png";
import merchImage4 from "./assets/merch/d8gEcLSS.jpg";
import merchImage5 from "./assets/merch/IZiQY3UL.jpg";
import merchImage6 from "./assets/merch/ljXhIuXs.jpg";
import merchImage7 from "./assets/merch/P0g2rssm.png";
import merchImage8 from "./assets/merch/TVRqA2k7.png";

const merchImages = [
  merchImage,
  merchImage2,
  merchImage3,
  merchImage4,
  merchImage5,
  merchImage6,
  merchImage7,
  merchImage8,
];

export default function Merch(props) {
  const classes = useStyles();

  return (
    <Container maxWidth={false} disableGutters style={{ height: "100%" }}>
      <SimpleBar className={classes.scroll}>
        <Typography className={classes.header} variant="h4">
          {`Merch (Work in Progress)`}
        </Typography>
        <div className={classes.root}>
          {merchImages.map((item, index) => {
            return <img key={index} src={item} className={classes.image} />;
          })}
        </div>
      </SimpleBar>
    </Container>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: "2rem",
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
  },
  center: {
    textAlign: "center",
  },
  header: {
    marginTop: "3rem",
    marginLeft: "2rem",
    color: "#fff",
  },
  scroll: {
    height: "calc(100% - 4rem)",
    position: "relative",
  },
  image: {
    height: "300px",
    width: "300px",
    marginRight: "2rem",
    marginTop: "2rem",
  },
}));
