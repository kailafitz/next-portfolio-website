"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const Shots = () => {
  let accessToken =
    "80cdba96a6100c8df4e2526e289935e5e5f13dffc35392e443c91236f17ceeb6";

  useEffect(() => {
    const Data = async () => {
      const res = await fetch(
        `https://api.dribbble.com/v2/user/shots?access_token=80cdba96a6100c8df4e2526e289935e5e5f13dffc35392e443c91236f17ceeb6`
      )
        .then((res) => {
          console.log(res.json());
          // return res.json();
        })
        .catch((error) => console.log(error));

      // return res.data.slice(0, 2);
    };

    Data();
  }, []);

  return (
    <>
      {/* {data.map((shot: { images: { normal: any } }, i: number) => {
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
      })} */}
      <h1>Hi</h1>
    </>
  );
};

export default Shots;
