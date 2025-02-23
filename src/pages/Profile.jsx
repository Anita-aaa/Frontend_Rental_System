

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

