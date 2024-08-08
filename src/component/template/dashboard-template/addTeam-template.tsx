import Layout from "@/component/organisms/dashbaord/layout";
import { addTeam } from "@/redux/teamslice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const AddTeamTemplate = () => {
  const router = useRouter();
  const usedispatch = useDispatch();

  const initialData = {
    name: "",
    position: "",
    age: "",
    dateOfBirth: "",
    salary: "",
    phoneNumber: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    usedispatch(addTeam(formData));
    setFormData(initialData);
    router.push("/dashboard");
  };

  return (
    <Layout>
      <h3 className="text-2xl text-center mb-10 font-[600]">Add Team</h3>
      <div className="max-w-xl mx-auto border p-8 rounded-xl shadow-xl text-brownish">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <label>Name</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label>Position</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Enter your Position"
            />
          </div>
          <div>
            <label>Age</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your Age"
            />
          </div>
          <div>
            <label>Date Of Birth</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              type="Date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="Enter your Date Of Birth"
            />
          </div>
          <div>
            <label>Salary</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Enter your Salary"
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
            />
          </div>
        </div>
        <div className="mt-10 text-end">
          <button
            className="bg-brownish px-6 py-2 text-cream rounded-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};
