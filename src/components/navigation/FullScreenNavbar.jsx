import {X} from "lucide-react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
const FullScreenNavbar = ({setOpenMenu}) => {
 const tags = [
    {name:"Projects",to:"/projecrs"},
    {name:"Agence",to:"/agence"},
    {name:"Contact",to:"/contact"},
    {name:"Blogue",to:"/blog"},
  ]
  return (
    <div className="h-screen w-full z-50 fixed bg-black">
        <X className="text-white absolute top-[-5%] right-[0] cursor-pointer" strokeWidth={.5} 
        size={200} onClick={() => setOpenMenu(false)}/>

        <div className="flex h-full w-full items-center flex-col justify-center pt-4">
        {tags.map((tag,index)=>(
            <>
            <Link 
            className={`text-white text-8xl font-[font1] font-bold cursor-pointer flex uppercase relative show-banner
            justify-center w-full  leading-[6vw] pt-4  border-b border-white/50 ${index == 0 && "border-t"}`} to={tag.to} key={index}>{tag.name}
            <div className="opacity-0 banner">
            <Banner/>
            </div>
            </Link>
            </>
        ))}
        </div>
    </div>
  )
}

export default FullScreenNavbar