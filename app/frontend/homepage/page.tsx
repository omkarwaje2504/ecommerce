"use client";
import { useEffect, useState } from "react";
import Home from "../../page";
import { About } from "@/constants";
import Image from "next/image";

const about: React.FC = () => {
  const [products, setProducts] = useState<About[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <Home>
      <div className="grid grid-cols-4 gap-6 w-4/5 mx-auto">
        {products &&
          products.map((product,key) => {
            return (
              <div className=" bg-white shadow-md rounded-lg flex flex-col overflow-hidden" key={key}>
                <Image
                  src={product.ProductImagepath}
                  width={400}
                  height={90}
                  alt="product"
                />
                <div className="mt-1 p-2">
                  <div className="flex space-x-1">
                    <Image
                      src="/images/star.svg"
                      alt="star"
                      width={18}
                      height={18}
                    />
                    <Image
                      src="/images/star.svg"
                      alt="star"
                      width={18}
                      height={18}
                    />
                    <Image
                      src="/images/star.svg"
                      alt="star"
                      width={18}
                      height={18}
                    />
                    <Image
                      src="/images/star.svg"
                      alt="star"
                      width={18}
                      height={18}
                    />
                    <Image
                      src="/images/star.svg"
                      alt="star"
                      width={18}
                      height={18}
                    />
                  </div>
                  <h3 className="text-xl mt-1 font-semibold ">
                    {product.ProductName}
                  </h3>
                  <p className=" text-md text-gray-700">
                    ₹ <span className="text-xl">{product.ProductPrice}</span>{" "}
                    <span className="line-through">
                      ₹{" "}
                      <span className="text-md">
                        {product.ProductPrice * 2}
                      </span>
                    </span>
                  </p>
                  <p className="mt-1 text-md text-gray-500">
                    {product.ProductDescription}
                  </p>
                  <p className="text-amber-700">Free delivery</p>
                  <p className="flex items-start text-md font-semibold ">
                    <Image
                      src="/images/primeMember.svg"
                      alt="primeMember"
                      width={25}
                      height={25}
                      className="mr-2"
                    />{" "}
                    Get it by Tomorrow, 28 August FREE Delivery by us
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </Home>
  );
};

export default about;
