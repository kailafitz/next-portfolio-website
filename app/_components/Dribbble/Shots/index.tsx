import React from "react";
import Image from "next/image";

const GetData = async ({ token }: { token: string }) => {
  const res = await fetch(
    `https://api.dribbble.com/v2/user/shots?access_token=${token}`
  );
  return res.json();
};

const Shots = async () => {
  let accessToken =
    "1763a53e8b0f7b928a96e89c17c67d3f0f0fb36e37a8b03585aac9069a6222f1";
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
