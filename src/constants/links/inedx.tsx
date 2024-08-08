import { AiOutlineProduct } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
export const dashboardLinks = [
  { id: 1, name: "Home", href: "/dashboard", icon: <MdSpaceDashboard /> },
  {
    id: 2,
    name: "Add Project Detail",
    href: "/dashboard/add-project-detail",
    icon: <AiOutlineProduct />,
  },
  {
    id: 3,
    name: "Add Team Detail",
    href: "/dashboard/add-team",
    icon: <RiTeamFill />,
  },
  {
    id: 4,
    name: "Settings",
    href: "/dashboard/settings",
    icon: <IoSettingsOutline />,
  },
];
