import React from "react";
import HeaderLink from "../HeaderLink";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import SectionContainer from "../SectionContainer";

export const Instagram = () => {
  return (
    <SectionContainer vh pt pb>
      <HeaderLink
        link="https://www.instagram.com/kaila.fizz/"
        label="Instagram"
      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "center", sm: "space-between" }}
        spacing={{ xs: 4, sm: 2 }}
        sx={{
          img: { width: { xs: "100%", sm: "30%" }, height: "fit-content" },
        }}
      >
        {[1, 2, 3].map((img, i) => {
          return (
            <Image
              key={i}
              width="300"
              height="100"
              src={`/instagram/graphic-${i + 1}.png`}
              alt={`graphic-${i + 1}`}
              className="shadow"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            />
          );
        })}
      </Stack>
    </SectionContainer>
  );
};
