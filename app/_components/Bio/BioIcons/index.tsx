import React from "react";
import { Smartphone, Settings, User } from "react-feather";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { primary, secondary } from "../../../_styles/Palette";

const items = [
  { icon: Settings, label: "Functionality" },
  { icon: User, label: "Experience" },
  { icon: Smartphone, label: "Responsive" },
];

const BioIcons = () => {
  return (
    <Stack
      flexDirection={{ xs: "column", md: "row" }}
      spacing={2}
      sx={{ width: "100%" }}
    >
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <Box
            key={item.label}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 2,
              px: 2.5,
              py: 2,
              borderRadius: "20px",
              bgcolor: "#fffdfb",
              border: "1px solid rgba(63, 42, 56, 0.08)",
            }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                bgcolor: primary.light,
                flexShrink: 0,
              }}
            >
              <Icon color={secondary.main} size={22} strokeWidth={1.4} />
            </Box>
            <Typography variant="body1" fontWeight={500}>
              {item.label}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
};

export default BioIcons;
