import React from "react";
import SimpleBar from "simplebar-react";
import merchImage from "./assets/merch/3p6Pv5VM.jpg";
import merchImage2 from "./assets/merch/8z3S5AVT.jpg";
import merchImage3 from "./assets/merch/aTdCiM3V.png";
import merchImage4 from "./assets/merch/d8gEcLSS.jpg";
import merchImage5 from "./assets/merch/IZiQY3UL.jpg";
import merchImage6 from "./assets/merch/ljXhIuXs.jpg";
import merchImage7 from "./assets/merch/P0g2rssm.png";
import merchImage8 from "./assets/merch/TVRqA2k7.png";
import { Typography, Box } from "@mui/material";

const merchImages = [merchImage, merchImage2, merchImage3, merchImage4, merchImage5, merchImage6, merchImage7, merchImage8];

export default function Merch() {
  return (
    <SimpleBar>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, flexWrap: "wrap" }}>
        <Box>
          <Typography variant="h4">{`Merch`}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, flexWrap: "wrap" }}>
          {merchImages.map((item, index) => {
            return <img alt="" key={index} src={item} style={{ height: "300px", width: "300px", marginRight: "2rem", marginTop: "2rem" }} />;
          })}
        </Box>
      </Box>
    </SimpleBar>
  );
}
