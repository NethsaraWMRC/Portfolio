import { Box, Typography } from "@mui/material";
import React from "react";

function SlideCard(props) {
  const handleClick = () => {
    props.id(props.passId);
  };

  return (
    <div onClick={handleClick}>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor:
            props.passId === props.clickedCard
              ? "rgba(150,150,150,0.5)"
              : "rgba(0,0,0,0.6)",
          padding: "15px",
          borderRadius: "15px",
          minHeight: "20vh",
          transition: "opacity 0.25s",
          boxShadow: "1px 5px 10px rgba(0,0,0,0.3)",
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          "&:hover": {
            opacity: 0.8,
          },
          "&:active": {
            opacity: 0.6,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: { sm: "16px", md: "18px", lg: "25px" },
            fontWeight: "700",
          }}
        >
          {props.head}
        </Typography>
        <Typography
          sx={{
            fontSize: { sm: "12x", md: "14px", lg: "16px" },
            color: "rgba(255,255,255,0.8)",
          }}
        >
          {props.sub}
        </Typography>
        <Typography
          sx={{
            fontSize: { sm: "12px", md: "14px", lg: "16px" },
            color: "rgba(255,255,255,0.4)",
          }}
        >
          {props.bottom}
        </Typography>
      </Box>
    </div>
  );
}

export default SlideCard;
