
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ machineId }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [machine, setMachine] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await axios.get(
          `${BASE_URL}/api/machine?machineId=${machineId}`
        );
        setMachine(response.data.machine);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [machineId]);

  if (!machine) {
    return <div className="text-center py-8">Loading...</div>;
  }

  function arrayBufferToBase64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleBooking = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const bookingData = {
        ownerId: machine.ownerId._id,  // Ensure correct owner ID
        machineId: machineId,
        startDate: new Date(),  // Use actual startDate from user selection
        endDate: new Date(),  // Use actual endDate from user selection
        totalDuration: 1,  // Calculate based on start & end date
        totalCost: machine.rentalPrice,  // Assume cost is per unit time
        status: "pending",
        paymentStatus: "unpaid",
        reviews: []
      };

      const response = await axios.post(`${BASE_URL}/api/booking`, bookingData);
      alert("Booking successful!");
      console.log("Booking response:", response.data);
    } catch (error) {
      console.error("Error booking machine:", error);
      alert("Failed to book the machine. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const {
    name,
    company,
    category,
    description,
    availability,
    rentalPrice,
    ownerId,
    img,
  } = machine;
  const remainingImages = img
    .slice()
    .filter((image) => image !== selectedImage);

  return (
    <div className="container mx-auto p-8 bg-gray-300 m-5 rounded-xl shadow-lg shadow-zinc-500">
      <h2 className="text-5xl text-green-900 text-center font-bold mb-4">
        {name}
      </h2>
      <div className="grid grid-cols-1 mt-9 lg:grid-cols-2 gap-8">
        {/* Image gallery */}
        <div className="flex flex-col justify-center mb-8">
          {selectedImage ? (
            <img
              src={`data:${selectedImage.contentType
                };base64,${arrayBufferToBase64(selectedImage.data.data)}`}
              alt={name}
              className="max-w-full object-cover mb-4"
            />
          ) : (
            <div className="bg-gray-200 w-full h-64 flex items-center justify-center">
              No Image Found!!
            </div>
          )}
          <div className="flex">
            {remainingImages.map((image, index) => (
              <img
                key={index}
                src={`data:${image.contentType};base64,${arrayBufferToBase64(
                  image.data.data
                )}`}
                alt={name}
                className="w-24 h-24 mt-5 object-cover p-2 cursor-pointer rounded-3xl"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>

        {/* description */}

        <div className="flex flex-col">
          <p className="text-zinc-600 text-lg mb-4">
            <b>{description}</b>
          </p>
          <div className="flex items-center mb-4">
            <span className="font-semibold mr-2">Category:</span>
            <span>{category}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold mr-2">Company:</span>
            <span>{company}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold mr-2">Availability:</span>
            <span>{availability}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold mr-2">Rental Price:</span>
            <span>${rentalPrice}</span>
          </div>

          {/* Owner Details */}
          <div className="flex flex-col mb-4">
            <span className="font-semibold text-2xl text-zinc-600 mb-2">
              Owner Details:
            </span>
            <span>
              <b>Name:</b> {ownerId.name}
            </span>
            <span>
              <b>Mobile:</b> {ownerId.mobile}
            </span>
            <span>
              <b>Address:</b> {ownerId.address}
            </span>
            <span>
              <b>City: </b>
              {ownerId.city}
            </span>
            {ownerId.state && <span>State: {ownerId.state}</span>}
            {ownerId.zipCode && <span>ZIP Code: {ownerId.zipCode}</span>}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleBooking}
          disabled={loading}
          className={`${loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
