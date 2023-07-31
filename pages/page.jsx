"use client";
import { useState, useEffect } from "react";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Footnote from "@/components/Footnote";
import "./media.css";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import Services from "@/components/Services";
import BounceLoader from "react-spinners/BounceLoader";
import {
  hero,
  about,
  models,
  modelsChamber,
  modelsChamber2,
  modelsChamber3,
  services,
  certifications,
  products,
} from "@/Services/page.services";
export default function Home() {
  const [open, setOpen] = useState(false);
  const [heroData, setHeroData] = useState();
  const [aboutData, setAboutData] = useState();
  const [modelsData, setModelsData] = useState();
  const [modelsChamberData, setModelsChamberData] = useState();
  const [modelsChamberData2, setModelsChamberData2] = useState();
  const [modelsChamberData3, setModelsChamberData3] = useState();
  const [servicesData, setServicesData] = useState();
  const [certificationData, setCertificationData] = useState();
  const [productsData, setProductsData] = useState();
  function handleProductId(id) {
    console.log(id);
  }
  useEffect(() => {
    hero(setHeroData);
    about(setAboutData);
    models(setModelsData);
    modelsChamber(setModelsChamberData);
    modelsChamber2(setModelsChamberData2);
    modelsChamber3(setModelsChamberData3);
    services(setServicesData);
    certifications(setCertificationData);
    products(setProductsData);
  }, []);
  return (
    <>
      {/* {heroData === undefined &&
      aboutData === undefined &&
      modelsData === undefined &&
      modelsChamberData === undefined &&
      modelsChamberData2 === undefined &&
      modelsChamberData3 === undefined &&
      servicesData === undefined &&
      certificationData === undefined ? (
        <div className="loader h-screen w-full flex justify-center items-center">
          <BounceLoader color="#2596be" />
        </div>
      ) : ( */}
        <div className={`${open && "h-screen overflow-y-hidden"}`}>
          <Hero
            open={open}
            setOpen={setOpen}
            heroData={heroData}
            handleProductId={handleProductId}
            productsData={productsData}
          />
          <About aboutData={aboutData} />
          <Models
            modelsData={modelsData}
            modelsChamberData={modelsChamberData}
            modelsChamberData2={modelsChamberData2}
            modelsChamberData3={modelsChamberData3}
          />
          <Services servicesData={servicesData} />
          <Certifications certificationData={certificationData} />
          <Footnote />
        </div>
      {/* )} */}
    </>
  );
}
