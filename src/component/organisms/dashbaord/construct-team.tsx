import { teamData } from "@/constants/dahboard-data/teamData";
import { deleteTeam } from "@/redux/teamslice";
import React from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

export const ConstructTeam = () => {
  const teamDataa = useSelector((state: any) => state.addteam.teamMembers);
  const dispatch = useDispatch();

  return (
    <section className="mt-10">
      <h4 className="mb-3 font-lusitana font-[400] text-2xl">
        Construction Team List
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
                <p>Name</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th className="pl-6 py-6">
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Position</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th className="pl-6 py-6">
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Email</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th className="pl-6 py-6">
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Phone Number</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th className="pl-6 py-6">
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Age</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th className="pl-6 py-6">
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Date of Birth</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th className="pl-6 py-6">
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Salary</p>
                <TiArrowUnsorted />
              </a>
            </th>
            <th className="pl-6 py-6">
              <a className="flex items-center text-xs text-gray-500" href="#">
                <p>Action</p>
                <TiArrowUnsorted />
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          {teamDataa?.map((team: any, index: number) => (
            <tr
              key={index}
              className={`text-xs ${
                index % 2 === 0 ? "bg-cream" : ""
              } border-b border-gray-100`}
            >
              <td className={`pl-6 py-6 `}>{index + 1}</td>
              <td
                className={`pl-6 py-6 ${
                  index % 2 === 0 ? "bg-brownish" : "bg-cream"
                }`}
              >
                {team.name}
              </td>
              <td className="pl-6 py-6">{team.position}</td>
              <td className="pl-6 py-6">{team.email}</td>
              <td className="pl-6 py-6">{team.phoneNumber}</td>
              <td className="pl-6 py-6">{team.age}</td>
              <td className="pl-6 py-6">{team.dateOfBirth}</td>
              <td className="pl-6 py-6">{team.salary}</td>
              <td
                className="pl-6 py-6 cursor-pointer"
                onClick={() => {
                  dispatch(deleteTeam(team.id));
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
