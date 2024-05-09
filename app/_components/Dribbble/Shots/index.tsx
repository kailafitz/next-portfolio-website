import React from "react";
import Image from "next/image";

// https://matthewelsom.com/blog/display-shots-on-webpage-with-dribbble-v2-api.html

const GetData = async ({ token }: { token: string }) => {
  const res = await fetch(
    `https://api.dribbble.com/v2/user/shots?access_token=${token}`
  );
  return res.json();
};

const Shots = async () => {
  let accessToken =
    "ebad71dc82872a2f2f68e92083be89ae31eeb672ae6907c4e5c7ecebc010dd45";
  const data = await GetData({ token: accessToken });

  return (
    <>
      {data.slice(0, 2).map((shot: { images: { normal: any } }, i: number) => {
        return (
          <Image
            key={i}
            width="300"
            height="100"
            src={shot.images.normal}
            alt="shot"
            className="shadow h-auto"
          />
        );
      })}
    </>
  );
};

export default Shots;
