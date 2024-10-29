import { TbError404 } from "react-icons/tb";
import {  useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate=useNavigate()
  const handelClick=()=>{
    navigate("/All")
  }
  return (
    <div  className="justify-center items-center flex h-[100vh]  flex-col w-full  " >
<TbError404 size={320} className="text-gray-700 drop-shadow-2xl "/>
        <h1 className="text-5xl w-fit text-center text-gray-500 drop-shadow-2xl" >OOPS...<br/><span> Page Not Found</span></h1>
   <button onClick={handelClick} className="bg-gray-500 rounded-full p-2 m-10 cursor-pointer border-white  hover:bg-gray-800 text-white">Back To Home</button>
    </div>  

  )
}

export default NotFoundPage