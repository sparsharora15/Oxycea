import {
  getAboutData,
  getHeroData,
  getModelsData,
  getModelsChamberData,
  getModelsChamberData2,
  getModelsChamberData3,
  getServicesData,
  getCertificationsData,
  getProductssData,
  
} from "@/Config/API";
export const about = (setAboutData) => {
  getAboutData()
    .then((result) => {
      setAboutData(result.data.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const hero = (setHeroData) => {
  getHeroData()
    .then((result) => {
      setHeroData(result.data.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const models = (setModelsData) => {
  getModelsData()
    .then((result) => {
      setModelsData(result.data.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const modelsChamber = (setModelsChamberData) => {
  getModelsChamberData()
    .then((result) => {
      setModelsChamberData(result.data.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const modelsChamber2 = (setModelsChamberData2) => {
  getModelsChamberData2()
    .then((result) => {
      setModelsChamberData2(result.data.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const modelsChamber3 = (setModelsChamberData3) => {
  getModelsChamberData3()
    .then((result) => {
      setModelsChamberData3(result.data.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const services = (setServicesData) => {
  getServicesData()
    .then((result) => {
      setServicesData(result.data.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const certifications = (setCertificationData) => {
  getCertificationsData()
    .then((result) => {
      setCertificationData(result.data.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const products = (setProductsData) => {
  getProductssData()
    .then((result) => {
      setProductsData(result.data.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
