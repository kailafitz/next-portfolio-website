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
    "80cdba96a6100c8df4e2526e289935e5e5f13dffc35392e443c91236f17ceeb6";
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
