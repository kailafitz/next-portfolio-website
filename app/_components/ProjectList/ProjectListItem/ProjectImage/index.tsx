import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";

const ProjectImage = ({
  projectId,
  projectName,
}: {
  projectId: string;
  projectName: string;
}) => {
  const createFileHandle = projectName.replaceAll(" ", "-").toLowerCase();
  return (
    <Box pl={3}>
      <Tooltip
        title={
          <Link
            color="common.white"
            target="_blank"
            href="https://www.freepik.com/free-psd/laptop-mock-up-design_1041411.htm#fromView=search&page=1&position=5&uuid=db8d3341-3942-4439-ba9b-736f5a4cec0a"
          >
            Mockup Image by aleksandr_samochernyi on Freepik
          </Link>
        }
        arrow
        placement="top"
      >
        <Image
          src={`/project-${projectId}/${createFileHandle}.png`}
          width={300}
          height={100}
          alt={projectName}
          className="h-auto w-100"
        />
      </Tooltip>
    </Box>
  );
};

export default ProjectImage;
