import { IoBagHandleSharp, IoBriefcaseSharp, IoLeafSharp, IoBarChartSharp, IoMapSharp, IoDocumentTextSharp } from "react-icons/io5"
import { BsDatabaseFill, BsGiftFill, } from "react-icons/bs"
import { AiFillHome, AiOutlineMenu } from "react-icons/ai"
import { RiFileList3Fill } from "react-icons/ri"
import { FaUserCircle } from "react-icons/fa"
import { FiLink2 } from "react-icons/fi"
import { MdSecurity } from "react-icons/md"

const App = () => {


  return (
    <div className="text-center">


      <div className="drawer drawer-start">

        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content absolute left-[50%] top-[50%]">

          <label htmlFor="my-drawer-4" 
          className="drawer-button btn btn-primary">Open Menu</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content text-lg font-semibold">

            <li><a className="text-primary mt-5"> <AiOutlineMenu /> Menu </a></li>
            <li><a className="text-primary"> <AiFillHome /> Dashboard </a></li>
            <li><a className="text-primary"> <IoBagHandleSharp /> eCommerce </a></li>
            <li><a className="text-primary"> <IoBriefcaseSharp />Widgets </a></li>
            <li><a className="text-primary"> <IoLeafSharp /> Icons </a></li>

            <hr className="mb-4" />

            <li><a className="text-primary"> <RiFileList3Fill />Forms </a></li>
            <li><a className="text-primary"> <BsDatabaseFill /> Tables </a></li>
            <li><a className="text-primary"> <IoBarChartSharp />Charts </a></li>
            <li><a className="text-primary"> <IoBarChartSharp />Invoice</a></li>
            <li><a className="text-primary"> <IoMapSharp /> Maps</a></li>

            <hr className="mb-4" />

            <li><a className="text-primary"> <IoDocumentTextSharp /> Documentaion </a></li>
            <li><a className="text-primary"> <MdSecurity /> Authentication</a></li>
            <li><a className="text-primary"> <FaUserCircle /> User Profile </a></li>
            <li><a className="text-primary"> <BsGiftFill />Others</a></li>
            <li><a className="text-primary"> <FiLink2 />Support </a></li>

          </ul>
        </div>
      </div>

    </div>
  );
};

export default App;