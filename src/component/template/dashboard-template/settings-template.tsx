import Layout from "@/component/organisms/dashbaord/layout";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export const SettingsTemplate = () => {
  return (
    <Layout>
      <h3 className="text-2xl text-center mb-10 font-[600]">Settings</h3>
      <div className="max-w-xl mx-auto border p-8 rounded-xl shadow-xl">
        <div className="border-b cursor-pointer items-center pb-4 flex justify-between mb-3">
          Account <IoIosArrowForward />
        </div>
        <div className="border-b cursor-pointer items-center pb-4 flex justify-between mb-3">
          Security <IoIosArrowForward />
        </div>

        <div className="border-b cursor-pointer items-center pb-4 flex justify-between mb-3">
          Notification <IoIosArrowForward />
        </div>

        <div className="border-b cursor-pointer items-center pb-4 flex justify-between mb-3">
          Privacy & Appearance <IoIosArrowForward />
        </div>
        <div className="border-b cursor-pointer items-center pb-4 flex justify-between mb-3">
          Dispalay & Appearance <IoIosArrowForward />
        </div>

        <div className="border-b cursor-pointer items-center pb-4 flex justify-between mb-3">
          Accessibility <IoIosArrowForward />
        </div>

        <div className="border-b cursor-pointer items-center pb-4 flex justify-between mb-3">
          Storage and data <IoIosArrowForward />
        </div>
        <div className="border-b cursor-pointer items-center pb-4 flex justify-between mb-3">
          Advanced <IoIosArrowForward />
        </div>
      </div>
    </Layout>
  );
};
