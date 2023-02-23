import { Footer } from "@/components";
import { projectInfo } from "@/constants/info";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const DetailProject = ({ project }) => {
  return (
    <div className="w-[90vw] lg:w-[60rem] mx-auto mt-40 mb-20 min-h-[110vh]">
      <Head>
        <title>{`${project.name}`} - Hanip Al Hapidz</title>
        <meta name="description" content={`Detailed ${project.name} project`} />
      </Head>
      <h1 className="text-5xl text-white font-bold mb-8 text-center">
        {project?.name}
      </h1>
      <div className="my-8 space-y-8 max-w-[90%] lg:max-w-[70%] mx-auto">
        <div className="text-white flex">
          {/* <div className="flex-1">Web Development</div> */}
          <div className="flex-1 text-center ">
            Stack :{" "}
            {project?.stack?.map(
              (s, idx) =>
                `${s}${idx !== project?.stack?.length - 1 ? "," : ""} `
            )}
          </div>
        </div>
        <p className="flex-1 text-gray-300 text-lg text-center ">
          {project.moreDescription}
        </p>
      </div>
      <div className="flex text-white text-lg mx-auto justify-center gap-4">
        {project?.live && (
          <a href={project?.live} target="_blank" rel="noreferrer">
            <button className="h-12 w-32 border border-white hover:bg-white/20">
              Visit Site
            </button>
          </a>
        )}
        {project?.code && (
          <a href={project?.code} target="_blank" rel="noreferrer">
            <button className="h-12 w-32 border border-white hover:bg-white/20">
              Code
            </button>
          </a>
        )}
      </div>
      <p className="text-lg text-white text-center mt-12 mb-4">Preview :</p>
      <div className="w-full space-y-6 overflow-hidden">
        {project?.imageScreenshoot?.map((sourceImg, idx) => (
          <Image
            key={idx}
            src={sourceImg}
            alt="Screenshot"
            className="w-full h-full object-contain rounded-xl"
            width={5000}
            height={5000}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailProject;

export const getStaticProps = (context) => {
  const { projectSlug } = context.params;

  const project = projectInfo.find((p) => p.slug === projectSlug);

  return {
    props: { project },
  };
};

export const getStaticPaths = () => {
  const pathProjects = projectInfo.map((p) => ({
    params: { projectSlug: p.slug },
  }));

  return {
    paths: pathProjects,
    fallback: false,
  };
};
