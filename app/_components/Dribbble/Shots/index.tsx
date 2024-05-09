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
    "b8b26229ea10deae87edc66f823a59478c197a8313d06827202a609ad1838723";
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
