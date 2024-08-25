import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

const VideoPlayer = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: "20px",
          top: "20px",
          color: "white",
          cursor: "pointer",
          "&:active": { opacity: 0.6 },
        }}
        onClick={() => props.onClose(false)}
      >
        <CloseIcon />
      </Box>

      {/* <video controls style={{ maxWidth: '90%', maxHeight: '90%' }}>
        <source src={props.video} type="video/mp4" />
      </video> */}

      <iframe
        width="90%"
        height="90%"
        src={props.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
