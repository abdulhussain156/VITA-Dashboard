import * as React from "react";
import { Box, Typography, Avatar } from "@mui/material";

interface MyComponentProps {
  name: string;
  title: string;
  description?: any;
  type?: any;
}
export default function MyComponent(props: MyComponentProps) {
  return (
    <Box
      sx={{
        m: 3,
        display: "flex",
        flexDirection: "column",
        padding: "0 9px 0 20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Avatar
          sx={{ width: 56, height: 56 }}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/168f5458-5b12-48e7-8fb5-72dbb458a6f8?apiKey=78a57a2938b447acb38179c9413df35f&"
        />
        <Box
          sx={{ alignSelf: "start", display: "flex", flexDirection: "column" }}
        >
          <Typography variant="subtitle1" color="primary.dark">
            {props.name}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "rgba(157, 121, 113, 1)" }}
          >
            {props.title}
          </Typography>
          {props.description && (
            <Typography
              variant="body2"
              sx={{
                fontStyle: "italic",
                background: "rgba(245, 245, 245, 1)",
                color:
                  props.type === "late"
                    ? "rgba(189, 104, 3, 0.75)"
                    : props.type === "cancelled"
                    ? "rgba(223, 30, 30, 0.75)"
                    : props.type === "rescheduled"
                    ? "rgba(54, 82, 18, 0.5)"
                    : "",
              }}
            >
              {props.description}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
