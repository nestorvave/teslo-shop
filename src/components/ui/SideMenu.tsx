import { IoExitOutline } from "react-icons/io5";
import { TbTicket } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
export const SideMenu = () => {
  return (
    <section className="fixed right-0 top-0 z-10 m-0 h-screen w-60 border bg-white">
      <div className="mt-24 flex flex-col items-center justify-center border ">
        <div className="flex w-full flex-col gap-1  ">
          <input />
          <li className="p-3 flex  items-center gap-6 hover:bg-gray-100 ">
            <FaRegUserCircle />
            Profiles
          </li>
          <li className="p-3 flex  items-center gap-6 hover:bg-gray-100 ">
            <TbTicket />
            My orders{" "}
          </li>
          <li className="p-3 flex items-center gap-6  hover:bg-gray-100 ">
            {" "}
            <IoExitOutline /> Exit
          </li>
        </div>
      </div>
    </section>
  );
};
