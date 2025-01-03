// import React, { useState } from 'react';
// import Modal from 'react-modal'; // Corrected import statement
// import { Link, useNavigate } from 'react-router-dom';


// const ProductCard = ({ machine }) => {
//   // console.log(machine);


//   const navigate = useNavigate();
//   const BASE_URL = import.meta.env.VITE_BASE_URL;
//   //  onClick={() => navigate(`/product/${machine._id}`)} in outermost div
//   // console.log(machine);
//   const [modal, setModal] = useState(false);

//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleConfirmBooking = () => {
//     // Perform booking action here
//     console.log("Booking confirmed!");
//     closeModal();
//   };

//   return (
//     <div className="w-full h-fit pb-5 bg-slate-100 shadow-md hover:scale-105 hover:shadow-xl duration-500">
//       <Link to={`/products/${machine._id}`}>
//         <div className="bg-slate-200 w-full h-[15rem] mb-2 cursor-pointer overflow-hidden">
//           {machine.img.length > 0 && (
//             <img
//               src={`data:${machine.img[0].contentType};base64,${btoa(
//                 new Uint8Array(machine.img[0].data.data).reduce(
//                   (data, byte) => data + String.fromCharCode(byte),
//                   ''
//                 )
//               )}`}
//               className="w-full h-full object-cover"
//               alt={machine.img[0].filename}
//             />
//           )}
//         </div>
//       </Link>
//       <div className="flex flex-col justify-between px-5">
//         <div className="flex flex-col">
//           <p className="text-xl font-bold mb-2 overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{machine.name.length > 35 ? machine.name.substring(0, 35) + '...' : machine.name}</p>
//           <p className="text-lg mb-2">{machine.availability}</p>
//         </div>
//         <div className="flex justify-between items-center">
//           <button className="bg-blue-200 p-2 hover:bg-blue-400" onClick={openModal}>
//             Book Now
//           </button>
//           <div className="bg-slate-200 rounded-full p-2">
//             <i className="ri-heart-line" style={{ fontSize: '27px' }}></i>
//           </div>
//         </div>
//       </div>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={{
//           overlay: {
//             backgroundColor: 'rgba(0, 0, 0, 0.8)',
//           },
//           content: {
//             color: 'black',
//             width: '30%',
//             height: '40%',
//             margin: 'auto',
//             borderRadius: '10px',
//             padding: '20px',
//           },
//         }}
//       >
//         <h2 className='text-2xl font-bold text-center mb-4'>Confirm Booking</h2>
//         <p className='text-lg mb-4 text-center'>Are you sure you want to book <b>{machine.name}</b>?</p>
//         <p className='mb-4'>Price: ${machine.rentalPrice}</p>
//         <div className='flex items-center mb-4'>
//           <p className='mr-2'>Date:</p>
//           <input
//             type="date"
//             className="border border-gray-300 rounded px-2 py-1"
//             placeholder="Select Date"
//           />
//         </div>
//         <p className='mb-4'>Availability: {machine.availability}</p>
//         <div className='flex justify-center gap-5'>
//           <button onClick={handleConfirmBooking} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl'>Confirm</button>
//           <button onClick={closeModal} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl'>Cancel</button>
//         </div>
//       </Modal>
//     </div>



//   );
// }

// export default ProductCard;




// import React, { useEffect, useState } from 'react';
// import Modal from 'react-modal'; // Corrected import statement
// import { Link, useNavigate } from 'react-router-dom';

// const ProductCard = ({ machine }) => {
//   const navigate = useNavigate();
//   const BASE_URL = import.meta.env.VITE_BASE_URL;

//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(false); // Track if heart is clicked

//   useEffect(() => {
//     // Check localStorage for the heart state when the component mounts
//     const savedFavoriteState = localStorage.getItem(`favorite-${machine._id}`);
//     if (savedFavoriteState === 'true') {
//       setIsFavorite(true);
//     }
//   }, [machine._id]);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleConfirmBooking = () => {
//     console.log("Booking confirmed!");
//     closeModal();
//   };

//   const toggleHeart = () => {
//     const newFavoriteState = !isFavorite;
//     setIsFavorite(newFavoriteState);
//     localStorage.setItem(`favorite-${machine._id}`, newFavoriteState.toString()); // Save the new state to localStorage
//   };

//   return (
//     <div className="w-full h-fit pb-5 bg-slate-100 shadow-md hover:scale-105 hover:shadow-xl duration-500">
//       <Link to={`/products/${machine._id}`}>
//         <div className="bg-slate-200 w-full h-[15rem] mb-2 cursor-pointer overflow-hidden">
//           {machine.img.length > 0 && (
//             <img
//               src={`data:${machine.img[0].contentType};base64,${btoa(
//                 new Uint8Array(machine.img[0].data.data).reduce(
//                   (data, byte) => data + String.fromCharCode(byte),
//                   ''
//                 )
//               )}`}
//               className="w-full h-full object-cover"
//               alt={machine.img[0].filename}
//             />
//           )}
//         </div>
//       </Link>
//       <div className="flex flex-col justify-between px-5">
//         <div className="flex flex-col">
//           <p className="text-xl font-bold mb-2 overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{machine.name.length > 35 ? machine.name.substring(0, 35) + '...' : machine.name}</p>
//           <p className="text-lg mb-2">{machine.availability}</p>
//         </div>
//         <div className="flex justify-between items-center">
//           <button className="bg-blue-200 p-2 hover:bg-blue-400" onClick={openModal}>
//             Book Now
//           </button>
//           <div className="bg-slate-200 rounded-full p-2" onClick={toggleHeart}>
//             <i
//               className={`ri-heart-line ${isFavorite ? 'text-red-600' : ''}`}
//               style={{ fontSize: '27px' }}
//             ></i>
//           </div>
//         </div>
//       </div>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={{
//           overlay: {
//             backgroundColor: 'rgba(0, 0, 0, 0.8)',
//           },
//           content: {
//             color: 'black',
//             width: '30%',
//             height: '40%',
//             margin: 'auto',
//             borderRadius: '10px',
//             padding: '20px',
//           },
//         }}
//       >
//         <h2 className='text-2xl font-bold text-center mb-4'>Confirm Booking</h2>
//         <p className='text-lg mb-4 text-center'>Are you sure you want to book <b>{machine.name}</b>?</p>
//         <p className='mb-4'>Price: ${machine.rentalPrice}</p>
//         <div className='flex items-center mb-4'>
//           <p className='mr-2'>Date:</p>
//           <input
//             type="date"
//             className="border border-gray-300 rounded px-2 py-1"
//             placeholder="Select Date"
//           />
//         </div>
//         <p className='mb-4'>Availability: {machine.availability}</p>
//         <div className='flex justify-center gap-5'>
//           <button onClick={handleConfirmBooking} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl'>Confirm</button>
//           <button onClick={closeModal} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl'>Cancel</button>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default ProductCard;


import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ machine }) => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalDuration, setTotalDuration] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const savedFavoriteState = localStorage.getItem(`favorite-${machine._id}`);
    if (savedFavoriteState === 'true') {
      setIsFavorite(true);
    }
  }, [machine._id]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleConfirmBooking = async () => {
    const ownerId = machine.ownerId; // Assuming the machine has an ownerId field
    const machineId = machine._id;

    // Send the booking details to the backend
    const bookingData = {
      ownerId,
      machineId,
      startDate,
      endDate,
      totalDuration,
      totalCost,
      status: 'pending', // Set the initial status as pending
      paymentStatus: 'unpaid', // Set payment status initially
    };

    try {
      const response = await fetch(`${BASE_URL}/api/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you have a token saved in localStorage
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Booking confirmed!', data);
        closeModal();
      } else {
        console.error('Booking failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleHeart = () => {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    localStorage.setItem(`favorite-${machine._id}`, newFavoriteState.toString());
  };

  const calculateDuration = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const duration = Math.ceil((end - start) / (1000 * 3600 * 24)); // Duration in days
      setTotalDuration(duration);
      setTotalCost(duration * machine.rentalPrice); // Calculate total cost based on rentalPrice
    }
  };

  return (
    <div className="w-full h-fit pb-5 bg-slate-100 shadow-md hover:scale-105 hover:shadow-xl duration-500">
      <Link to={`/products/${machine._id}`}>
        <div className="bg-slate-200 w-full h-[15rem] mb-2 cursor-pointer overflow-hidden">
          {machine.img.length > 0 && (
            <img
              src={`data:${machine.img[0].contentType};base64,${btoa(
                new Uint8Array(machine.img[0].data.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ''
                )
              )}`}
              className="w-full h-full object-cover"
              alt={machine.img[0].filename}
            />
          )}
        </div>
      </Link>
      <div className="flex flex-col justify-between px-5">
        <div className="flex flex-col">
          <p className="text-xl font-bold mb-2 overflow-hidden" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {machine.name.length > 35 ? machine.name.substring(0, 35) + '...' : machine.name}
          </p>
          <p className="text-lg mb-2">{machine.availability}</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-blue-200 p-2 hover:bg-blue-400" onClick={openModal}>
            Book Now
          </button>
          <div className="bg-slate-200 rounded-full p-2" onClick={toggleHeart}>
            <i className={`ri-heart-line ${isFavorite ? 'text-red-600' : ''}`} style={{ fontSize: '27px' }}></i>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
          content: {
            color: 'black',
            width: '30%',
            height: '40%',
            margin: 'auto',
            borderRadius: '10px',
            padding: '20px',
          },
        }}
      >
        <h2 className='text-2xl font-bold text-center mb-4'>Confirm Booking</h2>
        <p className='text-lg mb-4 text-center'>Are you sure you want to book <b>{machine.name}</b>?</p>
        <p className='mb-4'>Price: ${machine.rentalPrice}</p>

        <div className='flex items-center mb-4'>
          <p className='mr-2'>Start Date:</p>
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className='flex items-center mb-4'>
          <p className='mr-2'>End Date:</p>
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              calculateDuration();
            }}
          />
        </div>

        <p className='mb-4'>Availability: {machine.availability}</p>
        {/* <p className='mb-4'>Total Duration: {totalDuration} days</p> */}
        <p className='mb-4'>Total Cost: ${totalCost}</p>

        <div className='flex justify-center gap-5'>
          <button onClick={handleConfirmBooking} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl'>Confirm</button>
          <button onClick={closeModal} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl'>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
