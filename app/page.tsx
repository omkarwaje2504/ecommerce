import Navigation from "@/app/components/navigation"
import { Home } from "@/constants"; 
import Link from "next/link";

const Home: React.FC<Home>=({children})=> {
  return (
    <div>
    <div className="bg-gray-50 shadow-sm fixed top-0 w-full">
    <Navigation />
    </div>
    <div className="p-6 w-full h-full mt-36">
      {children}
    </div>
    </div>
  );
}

export default Home;