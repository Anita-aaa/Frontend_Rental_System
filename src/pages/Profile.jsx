// import { Button, TextField } from '@mui/material';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';


// const Profile = () => {

//     const [selectedView, setSelectedView] = useState('myTools');

//     const user = {
//         image: "../src/assets/avatar.jpg",
//         username: "Username",
//         tools: ["Tractor", "Harvestor", "Fertilizer", "Pesticide"],
//     }


//     const machine = {
//         machines: [
//             { id: 1, name: "Tractor", image: "https://imgs.search.brave.com/Gd7pNbjmF4XCgWvPzPiyZcn-50GJGztkTpI8vS0Zchg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njg2ODA4NzA0OTEt/NTkwY2Q0ZTIyNGFi/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRaOGZI/UnlZV04wYjNKOFpX/NThNSHg4TUh4OGZE/QT0.jpeg", bookingStatus: true },
//             { id: 2, name: "Harvester", image: "https://imgs.search.brave.com/-Vqrf_HG3rAGmRsP7fb2tqrwdRiy2M1igj9uzQcvfGA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM5LmRlcG9zaXRw/aG90b3MuY29tLzE0/MjYwNDkvMTE5My9p/LzQ1MC9kZXBvc2l0/cGhvdG9zXzExOTM1/ODEzLXN0b2NrLXBo/b3RvLWNvbWJpbmUt/aGFydmVzdGVyLmpw/Zw", bookingStatus: false },
//             { id: 3, name: "Harvester", image: "https://imgs.search.brave.com/-Vqrf_HG3rAGmRsP7fb2tqrwdRiy2M1igj9uzQcvfGA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM5LmRlcG9zaXRw/aG90b3MuY29tLzE0/MjYwNDkvMTE5My9p/LzQ1MC9kZXBvc2l0/cGhvdG9zXzExOTM1/ODEzLXN0b2NrLXBo/b3RvLWNvbWJpbmUt/aGFydmVzdGVyLmpw/Zw", bookingStatus: false },
//             { id: 4, name: "Harvester", image: "https://imgs.search.brave.com/-Vqrf_HG3rAGmRsP7fb2tqrwdRiy2M1igj9uzQcvfGA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM5LmRlcG9zaXRw/aG90b3MuY29tLzE0/MjYwNDkvMTE5My9p/LzQ1MC9kZXBvc2l0/cGhvdG9zXzExOTM1/ODEzLXN0b2NrLXBo/b3RvLWNvbWJpbmUt/aGFydmVzdGVyLmpw/Zw", bookingStatus: false },
//             { id: 5, name: "Harvester", image: "https://imgs.search.brave.com/-Vqrf_HG3rAGmRsP7fb2tqrwdRiy2M1igj9uzQcvfGA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM5LmRlcG9zaXRw/aG90b3MuY29tLzE0/MjYwNDkvMTE5My9p/LzQ1MC9kZXBvc2l0/cGhvdG9zXzExOTM1/ODEzLXN0b2NrLXBo/b3RvLWNvbWJpbmUt/aGFydmVzdGVyLmpw/Zw", bookingStatus: true },
//             { id: 6, name: "Harvester", image: "https://imgs.search.brave.com/-Vqrf_HG3rAGmRsP7fb2tqrwdRiy2M1igj9uzQcvfGA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM5LmRlcG9zaXRw/aG90b3MuY29tLzE0/MjYwNDkvMTE5My9p/LzQ1MC9kZXBvc2l0/cGhvdG9zXzExOTM1/ODEzLXN0b2NrLXBo/b3RvLWNvbWJpbmUt/aGFydmVzdGVyLmpw/Zw", bookingStatus: true },
//             { id: 7, name: "Cultivator", image: "https://imgs.search.brave.com/s0CsyPum7GHJh-GdMDaohLQbzLizAGSit_Z7DdstmNk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/cmFjdG9yLWN1bHRp/dmF0aW5nLWZpZWxk/XzM0Mjc0NC01NjYu/anBnP3NpemU9NjI2/JmV4dD1qcGc", bookingStatus: true }
//         ]
//     };

//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [username, setUsername] = useState('');
//     const navigate = useNavigate();
//     const BASE_URL = import.meta.env.VITE_BASE_URL;

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             setIsLoggedIn(true);
//             axios.get(`${BASE_URL}/api/user`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }).then((response) => {
//                 setUsername(response.data.user.name);
//             }).catch((error) => {
//                 console.error("Error fetching user data:", error);
//             });
//         }
//     }, []);

//     const [editMode, setEditMode] = useState(false);
//     const [editedUser, setEditedUser] = useState({ ...user });
//     const [editedTools, setEditedTools] = useState(user.tools.join(', ')); // Convert array to string

//     const handleEditProfile = () => {
//         setEditMode(!editMode);
//     };

//     const handleSaveProfile = () => {
//         // Perform logic to save edited profile information
//         // For example, send a request to update user data
//         console.log("Edited User:", editedUser);

//         // After saving, exit edit mode
//         setEditMode(false);
//     };


//     return (
//         <div className='w-full h-screen mt-[64px]'>
//             <Navbar />

//             <div className='flex  p-14'>

//                 {/* Profile Section --------------*/}
//                 {/* <div className=' w-1/5 h-screen  items-end   '>

//                     <div className='flex flex-col mx-3 px-1 py-10 mt-7  items-center bg-[#f0f0f0]  rounded-xl shadow-md shadow-zinc-300'>
//                         <img src={user.image} alt="" className='rounded-full w-52 object-cover ' />
//                         <h1 className='text-xl mt-3'>{username}</h1>
//                         <h1 className='text-xl mt-3'>Tools Own: {user.tools.length}</h1>
//                         <h1 className='text-xl mt-3'>Ratings : 3.5 </h1>
//                         <div className=' m-2 overflow-auto mt-8 flex flex-wrap gap-2'>
//                             {user.tools.map((tool, index) => (
//                                 <h1 className='text-md bg-[#dfd9e2] p-2 rounded-xl' key={index}>{tool}</h1>
//                             ))}
//                         </div>

//                         <button className="bg-[#2a7f62] hover:bg-[#3d9678] text-white font-bold py-2 px-4 mt-8 rounded">Edit Profile</button>

//                     </div>
//                 </div> */}

//                 <div className='w-1/5 h-screen items-end'>
//                     <div className='flex flex-col mx-3 px-1 py-10 mt-7 items-center bg-[#f0f0f0] rounded-xl shadow-md shadow-zinc-300'>
//                         <img src={user.avatar} alt="" className='rounded-full w-52 object-cover' />
//                         {editMode ? (
//                             <TextField
//                                 value={editedUser.name}
//                                 onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
//                                 label="Name"
//                                 variant='standard'
//                                 className="mt-3"
//                             />
//                         ) : (
//                             <h1 className='text-xl mt-3'>{user.name}</h1>
//                         )}
//                         <div className='m-2 overflow-auto mt-8 flex flex-wrap gap-2'>
//                             {editMode ? (
//                                 <TextField
//                                     value={editedTools}
//                                     onChange={(e) => setEditedTools(e.target.value)}
//                                     label="Tools"
//                                     variant='standard'
//                                     className="text-md bg-[#dfd9e2] p-2 rounded-xl"
//                                 />
//                             ) : (
//                                 user.tools.map((tool, index) => (
//                                     <h1 className='text-md bg-[#dfd9e2] p-2 rounded-xl' key={index}>{tool}</h1>
//                                 ))
//                             )}
//                         </div>
//                         <div className='mt-3'>
//                             {editMode ? (
//                                 <TextField
//                                     value={editedUser.mobile}
//                                     onChange={(e) => setEditedUser({ ...editedUser, mobile: e.target.value })}
//                                     label="Mobile"
//                                     variant='standard'
//                                     className="text-xl"
//                                 />
//                             ) : (
//                                 <p className='text-xl '>{user.mobile}</p>
//                             )}
//                         </div>

//                         {editMode ? (
//                             <Button
//                                 variant="contained"
//                                 color="success"
//                                 className="mt-8"
//                                 onClick={handleSaveProfile}
//                             >
//                                 Save Profile
//                             </Button>
//                         ) : (
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 className="mt-8"
//                                 onClick={handleEditProfile}
//                             >
//                                 Edit Profile
//                             </Button>
//                         )}
//                     </div>
//                 </div>



//                 {/* Tools Section --------------------------*/}
//                 <div className='w-4/5 h-screen bg-white rounded-3xl mt-[-104px] p-3'>
//                     {/* Toolbar section */}
//                     <div className="flex mt-4 p-8 border-b border-zinc-600 pb-2 ">
//                         <button className={`text-[#2a7f62]  border-r border-zinc-600 font-bold py-2 px-4   ${selectedView === 'myTools' ? 'text-[#193a2f]' : ''}`} onClick={() => setSelectedView('myTools')}>My Tools</button>
//                         <button className={`text-[#2a7f62] font-bold py-2 px-4   ${selectedView === 'onRentTools' ? 'text-[#193a2f]' : ''}`} onClick={() => setSelectedView('onRentTools')}>On Rent Tools</button>
//                     </div>
//                     <div className=' flex flex-wrap gap-4 mt-8 '>
//                         {selectedView === 'myTools' ? machine.machines.map(machine => (
//                             <div key={machine.id} className="bg-zinc-100 p-4 rounded-2xl shadow-md">
//                                 <img src={machine.image} alt={machine.name} className="w-56 h-26 rounded-full mx-auto" />
//                                 <h2 className="text-lg font-bold text-[#41676a] text-center mt-2">{machine.name}</h2>
//                             </div>
//                         )) : machine.machines.filter(machine => machine.bookingStatus).map(machine => (
//                             <div key={machine.id} className="bg-zinc-100 p-4 rounded-2xl shadow-md">
//                                 <img src={machine.image} alt={machine.name} className="w-56 h-26 rounded-full mx-auto" />
//                                 <h2 className="text-lg font-bold text-[#41676a] text-center mt-2">{machine.name}</h2>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//             </div>
//             {/* Footer------------------ */}
//             <Footer />

//         </div>
//     );


// }

// export default Profile

// import { Button, TextField } from '@mui/material';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Toaster, toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// const Profile = () => {
//     const [editMode, setEditMode] = useState(false);
//     const [selectedView, setSelectedView] = useState('myTools');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [username, setUsername] = useState('');
//     const navigate = useNavigate();
//     const BASE_URL = import.meta.env.VITE_BASE_URL;

//     // Dummy User Data
//     const [user, setUser] = useState({
//         image: "../src/assets/avatar.jpg",
//         name: "John Doe",
//         tools: ["Tractor", "Harvester", "Fertilizer", "Pesticide"],
//         mobile: "123-456-7890"
//     });

//     // Machines List
//     const machineList = [
//         { id: 1, name: "Tractor", image: "https://source.unsplash.com/400x300/?tractor", bookingStatus: true },
//         { id: 2, name: "Harvester", image: "https://source.unsplash.com/400x300/?harvester", bookingStatus: false },
//         { id: 3, name: "Cultivator", image: "https://source.unsplash.com/400x300/?farm", bookingStatus: true },
//     ];

//     const [editedUser, setEditedUser] = useState({ ...user });
//     const [editedTools, setEditedTools] = useState(user.tools.join(', '));

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             setIsLoggedIn(true);
//             axios.get(`${BASE_URL}/api/user`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             }).then((response) => {
//                 setUsername(response.data.user.name);
//             }).catch((error) => {
//                 console.error("Error fetching user data:", error);
//             });
//         }
//     }, []);

//     const handleEditProfile = () => {
//         setEditMode(!editMode);
//     };

//     const handleSaveProfile = () => {
//         setUser({ ...editedUser, tools: editedTools.split(',').map(tool => tool.trim()) });
//         toast.success("Profile Updated Successfully!");
//         setEditMode(false);
//     };

//     return (
//         <div className="w-full min-h-screen bg-gray-100">
//             <Navbar />
//             <Toaster />

//             <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 mt-10">
//                 {/* Profile Card */}
//                 <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
//                     <div className="flex flex-col items-center">
//                         <img src={user.image} alt="Profile" className="rounded-full w-40 h-40 object-cover border-4 border-green-500" />

//                         {editMode ? (
//                             <TextField
//                                 value={editedUser.name}
//                                 onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
//                                 label="Name"
//                                 variant='outlined'
//                                 className="mt-3 w-full"
//                             />
//                         ) : (
//                             <h2 className="text-xl font-bold mt-3">{user.name}</h2>
//                         )}

//                         <h3 className="text-gray-600 mt-2">Tools Owned: {user.tools.length}</h3>

//                         <div className="mt-3">
//                             {editMode ? (
//                                 <TextField
//                                     value={editedTools}
//                                     onChange={(e) => setEditedTools(e.target.value)}
//                                     label="Tools (comma-separated)"
//                                     variant='outlined'
//                                     className="w-full"
//                                 />
//                             ) : (
//                                 <div className="flex flex-wrap gap-2 mt-2">
//                                     {user.tools.map((tool, index) => (
//                                         <span key={index} className="text-sm bg-gray-300 px-3 py-1 rounded-full">
//                                             {tool}
//                                         </span>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>

//                         <div className="mt-3">
//                             {editMode ? (
//                                 <TextField
//                                     value={editedUser.mobile}
//                                     onChange={(e) => setEditedUser({ ...editedUser, mobile: e.target.value })}
//                                     label="Mobile"
//                                     variant='outlined'
//                                     className="w-full"
//                                 />
//                             ) : (
//                                 <p className="text-gray-700 text-lg">{user.mobile}</p>
//                             )}
//                         </div>

//                         <Button
//                             variant="contained"
//                             color={editMode ? "success" : "primary"}
//                             className="mt-4"
//                             onClick={editMode ? handleSaveProfile : handleEditProfile}
//                         >
//                             {editMode ? "Save Profile" : "Edit Profile"}
//                         </Button>
//                     </div>
//                 </div>

//                 {/* Machines Section */}
//                 <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-md">
//                     <div className="flex justify-between border-b pb-3">
//                         <h2 className="text-xl font-bold">Available Machines</h2>
//                         <button
//                             className="text-green-600 font-bold"
//                             onClick={() => setSelectedView('myTools')}
//                         >
//                             My Tools
//                         </button>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//                         {machineList.map((machine) => (
//                             <div key={machine.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
//                                 <img src={machine.image} alt={machine.name} className="w-full h-40 object-cover rounded-lg" />
//                                 <h3 className="text-lg font-semibold mt-2">{machine.name}</h3>
//                                 <p className={`text-sm mt-1 ${machine.bookingStatus ? 'text-green-600' : 'text-red-600'}`}>
//                                     {machine.bookingStatus ? "Available" : "Booked"}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default Profile;





import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Profile = () => {
    const [editMode, setEditMode] = useState();
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    // Dummy User Data
    const [user, setUser] = useState({
        image: "../src/assets/avatar.jpg",
        name: "",
        tools: ["Tractor", "Harvester", "Cultivator"]
    });

    // Machines List
    const machineList = [
        { id: 1, name: "Tractor", image: "https://imgs.search.brave.com/Gd7pNbjmF4XCgWvPzPiyZcn-50GJGztkTpI8vS0Zchg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njg2ODA4NzA0OTEt/NTkwY2Q0ZTIyNGFi/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRaOGZI/UnlZV04wYjNKOFpX/NThNSHg4TUh4OGZE/QT0.jpeg", bookingStatus: true },
        { id: 2, name: "Harvester", image: "https://imgs.search.brave.com/-Vqrf_HG3rAGmRsP7fb2tqrwdRiy2M1igj9uzQcvfGA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM5LmRlcG9zaXRw/aG90b3MuY29tLzE0/MjYwNDkvMTE5My9p/LzQ1MC9kZXBvc2l0/cGhvdG9zXzExOTM1/ODEzLXN0b2NrLXBo/b3RvLWNvbWJpbmUt/aGFydmVzdGVyLmpw/Zw", bookingStatus: false },
        { id: 3, name: "Cultivator", image: "https://imgs.search.brave.com/s0CsyPum7GHJh-GdMDaohLQbzLizAGSit_Z7DdstmNk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/cmFjdG9yLWN1bHRp/dmF0aW5nLWZpZWxk/XzM0Mjc0NC01NjYu/anBnP3NpemU9NjI2/JmV4dD1qcGc", bookingStatus: true }
    ];

    const [editedUser, setEditedUser] = useState({ ...user });
    const [editedTools, setEditedTools] = useState(user.tools.join(', '));
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirect to login if no token
            return;
        }

        axios.get(`${BASE_URL}/api/user`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            const userData = response.data.user;
            setUser({
                image: userData.image || "../src/assets/avatar.jpg", // Use default image if not available
                name: userData.name,
                tools: userData.tools || ["Tractor", "Harvester", "Cultivator"]
            });
            setEditedUser({
                image: userData.image || "../src/assets/avatar.jpg",
                name: userData.name,
                tools: userData.tools || []
            });
            setEditedTools(userData.tools.join(', ')); // Initialize tools as a comma-separated string
        }).catch((error) => {
            console.error("Error fetching user data:", error);
        });
    }, [navigate]);

    const handleEditProfile = () => {
        setEditMode(!editMode);
    };
    const handleSaveProfile = () => {
        axios.put(`${BASE_URL}/api/user`, { name: editedUser.name, tools: editedTools.split(',').map(tool => tool.trim()) }, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
            .then(() => {
                setUser({ ...editedUser, tools: editedTools.split(',').map(tool => tool.trim()) });
                toast.success("Profile Updated Successfully!");

                // Refresh profile data after save
                axios.get(`${BASE_URL}/api/user`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
                })
                    .then((response) => {
                        const userData = response.data.user;
                        setUser({
                            image: userData.image || "../src/assets/avatar.jpg", // Default image in case it's undefined
                            name: userData.name,
                            tools: userData.tools || ["Tractor", "Harvester", "Cultivator"]
                        });
                    })
                    .catch((error) => {
                        console.error("Error fetching updated user data:", error);
                    });

                setEditMode(false);
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
                toast.error("Failed to update profile.");
            });
    };


    // const handleSaveProfile = () => {
    //     // Send updated profile to backend
    //     axios.put(`${BASE_URL}/api/user`, { name: editedUser.name }, {
    //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    //     })
    //         .then(() => {
    //             setUser({ ...editedUser, tools: editedTools.split(',').map(tool => tool.trim()) });
    //             toast.success("Profile Updated Successfully!");
    //             setEditMode(false);
    //         })
    //         .catch((error) => {
    //             console.error("Error updating profile:", error);
    //             toast.error("Failed to update profile.");
    //         });
    // };

    return (
        <div className="w-full min-h-screen bg-gray-100">
            <Navbar />
            <Toaster />

            <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 mt-10">
                {/* Profile Card */}
                <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col items-center">
                        <img src={user.image} alt="Profile" className="rounded-full w-40 h-40 object-cover border-4 border-green-500" />

                        {editMode ? (
                            <TextField
                                value={editedUser.name}
                                onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                                label="Name"
                                variant='outlined'
                                className="mt-3 w-full"
                            />
                        ) : (
                            <h2 className="text-xl font-bold mt-3">{user.name}</h2>
                        )}

                        <h3 className="text-gray-600 mt-2">Tools Owned: {user.tools.length}</h3>

                        <div className="mt-3">
                            {editMode ? (
                                <TextField
                                    value={editedTools}
                                    onChange={(e) => setEditedTools(e.target.value)}
                                    label="Tools (comma-separated)"
                                    variant='outlined'
                                    className="w-full"
                                />
                            ) : (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {user.tools.map((tool, index) => (
                                        <span key={index} className="text-sm bg-gray-300 px-3 py-1 rounded-full">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Button
                            variant="contained"
                            color={editMode ? "success" : "primary"}
                            className="mt-4"
                            onClick={editMode ? handleSaveProfile : handleEditProfile}
                        >
                            {editMode ? "Save Profile" : "Edit Profile"}
                        </Button>
                    </div>
                </div>

                {/* Machines Section */}
                <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between border-b pb-3">
                        <h2 className="text-xl font-bold">Available Machines</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {machineList.map((machine) => (
                            <div key={machine.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                                <img src={machine.image} alt={machine.name} className="w-full h-40 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold mt-2">{machine.name}</h3>
                                <p className={`text-sm mt-1 ${machine.bookingStatus ? 'text-green-600' : 'text-red-600'}`}>
                                    {machine.bookingStatus ? "Available" : "Booked"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Profile;

