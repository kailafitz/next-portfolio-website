import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

// https://matthewelsom.com/blog/display-shots-on-webpage-with-dribbble-v2-api.html

const getData = async ({ token }: { token: string }) => {
  const res = await fetch(
    `https://api.dribbble.com/v2/user/shots?access_token=${token}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      // cache: "no-cache",
    }
  );
  return res.json();
};

getData.propTypes = {
  token: PropTypes.string,
};

const Shots = async () => {
  let accessToken = process.env.DRIBBBLE_ACCESS_TOKEN ?? "";
  const data = await getData({ token: accessToken });

  return (
    <>
      {data
        .slice(0, 3)
        .map(
          (
            shot: { images: { normal: any }; low_profile: false },
            i: number
          ) => {
            return (
              <Image
                key={i}
                width="200"
                height="100"
                src={shot.images.normal}
                alt="shot"
                className="shadow h-auto object-cover"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              />
            );
          }
        )}
    </>
  );
};

export default Shots;
