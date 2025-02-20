import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import ProductInfoCard from "../components/ProductInfoCard/ProductInfoCard.jsx";
import Reviewscard from "../components/Reviewscard.jsx";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const BASE_URL = import.meta.env.VITE_BASE_URL;


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("machine id in product details page", id, ' requested URL ->', `${BASE_URL}/api/machine?machineId=${id}`);
        const response = await axios.get(`${BASE_URL}/api/machine?machineId=${id}`);
        console.log("Machine info ", response.data.machine);
        if (response.status === 200) {
          const productData = response.data.machine; // Axios already parses JSON data
          setProduct(productData);
        } else {
          throw new Error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);


  if (!product) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <div className="mb-24">
        <Navbar />
      </div>
      {/* {machine && <ProductInfoCard machine={machine} />} */}
      <ProductInfoCard machine={product} />
      <div className="px-10">
        <Reviewscard />
      </div>
      <div className="my-10 px-10">
        <p className="text-3xl font-bold my-5">Similar Machines</p>
        <div className="w-full grid grid-cols-4 gap-10">
          {[1, 1, 1, 1].map(() => (
            <div className="flex justify-center">
              {/* Render ProductCard with machine data */}
              {/* {machine && <ProductCard machine={machine} />} */}
              {/* <ProductCard machine={machine} /> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default ProductDetails;
