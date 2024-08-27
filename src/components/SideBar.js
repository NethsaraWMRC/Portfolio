import { Box } from "@mui/material";
import React from "react";

function SideBar({ visibility, rightSectionVisible }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100px",

          position: "absolute",
          right: 0,
          alignItems: "flex-end",
          justifyContent: "center",
          zIndex: 100,
          visibility: { xs: "visible", lg: "hidden" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "10vh",
            width: "30px",
            backgroundColor: "rgba(200,200,200,0.7)",
            borderRadius: "10px 0 0 10px",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "5px 10px 10px rgba(0,0,0,0.3)",
          }}
          onClick={() => visibility(!rightSectionVisible)}
        >
          {!rightSectionVisible ? (
            <img
              src={require("../assests/left-arrow.png")}
              style={{
                height: "20px",
                width: "20px",
              }}
              alt="arrow"
            />
          ) : (
            <img
              src={require("../assests/right-arrow.png")}
              style={{
                height: "20px",
                width: "20px",
              }}
              alt="arrow"
            />
          )}
        </Box>
      </Box>
    </div>
  );
}

export default SideBar;
