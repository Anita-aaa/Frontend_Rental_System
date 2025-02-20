


import React from 'react';

const AddProduct = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      {/* Header Section */}
      <div className="border-l-2 border-green-600 pl-6">
        <h1 className="text-2xl font-semibold text-gray-700">Describe Your Equipment</h1>
        <p className="mt-2 text-md text-gray-500">Provide key details of your equipment to Sell or Rent Out</p>
      </div>

      {/* Form Section */}
      <form className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Title Input */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Title*</label>
            <input
              type="text"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Equipment Title"
            />
          </div>

          {/* Manufacturer Dropdown */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Manufacturer*</label>
            <select className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500">
              <option disabled>Choose Manufacturer</option>
              <option>Manufacturer 1</option>
              <option>Manufacturer 2</option>
              <option>Manufacturer 3</option>
            </select>
          </div>

          {/* Description Input */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Description*</label>
            <input
              type="text"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Equipment Description"
            />
          </div>

          {/* Daily Rental Input */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Daily Rental*</label>
            <input
              type="number"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Daily Rental Price"
            />
          </div>

          {/* Hourly Rental Input */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Hourly Rental*</label>
            <input
              type="number"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Hourly Rental Price"
            />
          </div>

          {/* Equipment Type Dropdown */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Equipment Type*</label>
            <select className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500">
              <option disabled>Choose Equipment Type</option>
              <option>Type 1</option>
              <option>Type 2</option>
              <option>Type 3</option>
            </select>
          </div>

          {/* Manufacturing Year Input */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Manufacturing Year*</label>
            <input
              type="number"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Manufacturing Year"
            />
          </div>

          {/* Model Input */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Model*</label>
            <input
              type="text"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Equipment Model"
            />
          </div>

          {/* Condition Input */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Condition*</label>
            <input
              type="text"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Condition of Equipment"
            />
          </div>

          {/* Location Input */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Location*</label>
            <input
              type="text"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Equipment Location"
            />
          </div>

          {/* HorsePower Input */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">HorsePower*</label>
            <input
              type="number"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="HorsePower"
            />
          </div>

          {/* Height Input */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Height*</label>
            <input
              type="number"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Height of Equipment"
            />
          </div>

          {/* Width Input */}
          <div className="border p-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Width*</label>
            <input
              type="number"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Width of Equipment"
            />
          </div>

          {/* Date Range Picker (Dummy UI) */}
          <div className="w-full px-4 mb-6">
            <label className="block text-lg bg-gray-200 hover:bg-gray-300 font-bold text-gray-500 inline-block p-3 cursor-pointer">
              Select Date Range
            </label>
            <div className="mt-3 bg-white p-4 rounded shadow-md">
              <p className="text-gray-600">Start Date: <span className="font-semibold">2025-01-01</span></p>
              <p className="text-gray-600">End Date: <span className="font-semibold">2025-12-31</span></p>
            </div>
          </div>

        </div>

        {/* Submit Button */}
        <button type="submit" className="mt-10 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full mx-auto block">
          Add Equipment
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
