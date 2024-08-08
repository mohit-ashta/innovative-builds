import { SideNav } from "@/component/organisms/SideNav";
import { TopHeader } from "@/component/organisms/dashbaord/top-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 h-full bg-[#d7a888]">
        <SideNav />
      </div>
      <div className="flex-grow  md:overflow-y-auto">
        <TopHeader />{" "}
        <div className="p-10 max-h-[calc(100vh-110px)] overflow-x-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
