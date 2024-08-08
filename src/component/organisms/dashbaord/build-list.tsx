import { deleteProject, updateProject } from "@/redux/projetcSlice";
import React from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

export const BuildList = () => {
  const dispatch = useDispatch();
  const projectDataa = useSelector(
    (state: any) => state.addproject.projetBuild
  );
  return (
    <section className="mt-10">
      <h4 className="mb-3 font-lusitana font-[400] text-2xl">
        Project Build List
      </h4>
      <table className="table-auto w-full bg-white shadow rounded">
        <thead className="border-b border-gray-100">
          <tr>
            <th className="pl-6 py-6">
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>SrNo.</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th className="pl-6 py-6">
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Builder Name</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th>
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Project Name</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th>
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Complete</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th>
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Start Date</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th>
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Budget</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th>
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Client Name</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th>
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Action</p>
                <TiArrowUnsorted />
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          {projectDataa?.map((val: any, index: number) => (
            <tr
              key={index}
              className={`text-xs ${
                index % 2 === 0 ? "bg-cream" : ""
              } border-b border-gray-100`}
            >
              <td className="pl-6 py-6">{index + 1}</td>
              <td className="pl-6 py-6">{val.builderName}</td>
              <td>{val.projectName}</td>
              <td>{val.projectComplete}</td>
              <td>{val.startDate}</td>
              <td>{val.budget}</td>
              <td>{val.clientName}</td>
              <td>{val.projectLocation}</td>
              <td
                className="cursor-pointer"
                onClick={() => {
                  console.log("Dispatching delete with id:", val.id);
                  dispatch(updateProject(val.id));
                }}
              >
                Update
              </td>
              <td
                className="pl-6 py-6 cursor-pointer"
                onClick={() => {
                  console.log("Dispatching delete with id:", val.id);
                  dispatch(deleteProject(val.id));
                }}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
