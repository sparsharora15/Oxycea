import { productsById } from "@/Services/page.services";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { getProductssDataById } from "@/Config/API";
import { SERVER_IP } from "@/Config/SERVER_IP";
const myProduct = () => {
  const router = useRouter();

  const [productData, setProductData] = React.useState();
console.log(router)
  function getDataById() {
    getProductssDataById(router?.query?.myProduct)
      .then((result) => {
        console.log(result?.data?.data);
        setProductData(result?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  React.useEffect(() => {
    getDataById();
  }, []);
  //
  return (
    <div className="w-full flex justify-center items-center p-10">
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-4"
          src={`${SERVER_IP}${productData?.attributes?.featuredImage?.data?.attributes?.url}`}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {productData?.attributes?.title}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {productData?.attributes?.description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default myProduct;
