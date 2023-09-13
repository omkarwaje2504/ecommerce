import Image from "next/image";
const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-between p-3 w-11/12 items-center mx-auto ">
      <div>
        <Image src="/images/logo.svg" alt="logo" width={120} height={120} />
      </div>
      <div className="w-3/4 flex justify-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search product here ex:Monitor"
          className="bg-white border p-4 h-16 text-center rounded-2xl placeholder:font-medium placeholder:text-gray-400 w-3/4 "
        />
      </div>
      <div className="flex space-x-6 w-fit">
        <a
          href="/frontend/login"
          className=" font-medium text-lg bg-green-400 px-4 py-2 rounded-xl text-white hover:text-green-500 hover:bg-white hover:border-green-500 hover:border"
        >
          Login
        </a>
        <a href="/frontend/signup" className=" font-medium text-lg bg-blue-400 px-4 py-2 rounded-xl text-white hover:text-blue-500 hover:bg-white hover:border-blue-500 hover:border">
          Signup
        </a>
      </div>
    </nav>
  );
};
export default Navigation;
