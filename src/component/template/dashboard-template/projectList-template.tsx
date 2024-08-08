import Layout from "@/component/organisms/dashbaord/layout";
import { addProject } from "@/redux/projetcSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Define the shape of form data
interface FormData {
  id: string;
  builderName: string;
  projectName: string;
  projectComplete: string;
  startDate: string;
  budget: string;
  clientName: string;
  projectLocation: string;
}

// Define the shape of error messages
interface Errors {
  clientName?: string;
  budget?: string;
}

export const ProjectListTemplate = () => {
  const router = useRouter();
  
  const dispatch = useDispatch();

  const initialData: FormData = {
    id: "",
    builderName: "",
    projectName: "",
    projectComplete: "",
    startDate: "",
    budget: "",
    clientName: "",
    projectLocation: "",
  };
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});

  const onValidate = (): boolean => {
    let isValid = true;
    const errorMessages: Errors = {};

    if (!formData.clientName.trim()) {
      isValid = false;
      errorMessages.clientName = "Client Name is required";
    }
    if (!formData.budget.trim()) {
      isValid = false;
      errorMessages.budget = "Budget is required";
    }
    setErrors(errorMessages);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (): void => {
    if (onValidate()) {
      dispatch(addProject(formData));
      setFormData(initialData);
      router.push("/dashboard");
    }
  };

  return (
    <Layout>
      <h3 className="text-2xl text-center mb-10 font-[600]">
        Add Project Detail
      </h3>
      <div className="max-w-xl mx-auto border p-8 rounded-xl shadow-xl text-brownish">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <label>Builder Name</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              onChange={handleChange}
              value={formData.builderName}
              name="builderName"
              type="text"
              placeholder="Enter Builder Name"
            />
          </div>

          <div>
            <label>Project Name</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              onChange={handleChange}
              value={formData.projectName}
              name="projectName"
              type="text"
              placeholder="Enter Project Name"
            />
          </div>
          <div>
            <label>Project Complete</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              onChange={handleChange}
              value={formData.projectComplete}
              name="projectComplete"
              type="text"
              placeholder="Is the project complete?"
            />
          </div>
          <div>
            <label>Start Date</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              onChange={handleChange}
              value={formData.startDate}
              name="startDate"
              type="date"
              placeholder="Select Start Date"
            />
          </div>
          <div>
            <label>Budget</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              onChange={handleChange}
              value={formData.budget}
              name="budget"
              type="number"
              placeholder="Enter Budget"
            />
            {errors.budget && (
              <small className="text-red-500">{errors.budget}</small>
            )}
          </div>
          <div>
            <label>Client Name</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              onChange={handleChange}
              value={formData.clientName}
              name="clientName"
              type="text"
              placeholder="Enter Client Name"
            />
            {errors.clientName && (
              <small className="text-red-500">{errors.clientName}</small>
            )}
          </div>
          <div>
            <label>Project Location</label>
            <input
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-brownish border border-coolGray-200 rounded-lg shadow-input"
              onChange={handleChange}
              value={formData.projectLocation}
              name="projectLocation"
              type="text"
              placeholder="Enter Project Location"
            />
          </div>
        </div>
        <div className="mt-10 text-end">
          <button
            className="bg-brownish px-6 py-2 text-cream rounded-lg"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};
