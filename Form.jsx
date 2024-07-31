import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };
  const CancelBtn = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      address1: "",
      address2: "",
    });
  };
  return (
    <div
      onSubmit={handleSubmit}
      className="container  mx-auto mt-10 p-4 max-w-2xl bg-gray-300 rounded-lg shadow-md "
    >
      <form className="form flex flex-col space-y-4 rounded-sm box-border text-lg ">
        <label className="text-lg font-semibold text-gray-700 ">FirstName</label>
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          value={formData.firstname}
          placeholder=" FirstName"
          name="firstname"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="text-lg font-semibold text-gray-700 " >LastName</label>
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          value={formData.lastname}
          placeholder=" LastName"
          name="lastname"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="text-lg font-semibold text-gray-700 ">Email address</label>
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={(e) => handleChange(e)}
          value={formData.email}
          required
        ></input>
        <label className="text-lg font-semibold text-gray-700 ">Contact</label>
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="number"
          value={formData.contact}
          placeholder="Enter Your number"
          name="contact"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="text-lg font-semibold text-gray-700 ">Permanent-Address</label>
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          value={formData.address1}
          placeholder=" Permanent Address"
          onChange={(e) => handleChange(e)}
          name="address1"
          required
        />
        <label className="text-lg font-semibold text-gray-700 ">Temporary-Address</label>
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          value={formData.address2}
          placeholder=" Temporary Address"
          onChange={(e) => handleChange(e)}
          name="address2"
        />
   

      <div className="flex justify-center gap-10">
        <button
          className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="Submit"
        >
          Submit
        </button>
        <button
          onClick={CancelBtn}
          className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Cancel
        </button>
      </div>
      </form>
      {submittedData && (
                <div>
                    <h2>Submitted Data</h2>
                    <p><strong>First Name:</strong> {submittedData.firstname}</p>
                    <p><strong>LastName:</strong> {submittedData.lastname}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Contact:</strong> {submittedData.contact}</p>
                    <p><strong>Permanent Address:</strong> {submittedData.address1}</p>
                    <p><strong>Temporary Adress:</strong> {submittedData.address2}</p>
                </div>
            )}
    </div>
  );
}
