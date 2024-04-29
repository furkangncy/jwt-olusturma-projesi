import Image from "next/image";
import qooline from "@/public/assets/icons/qooline.svg";


export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 flex items-center justify-center bg-[#201C1D] ">
        <div className="text-center flex flex-col justify-center items-center gap-5 ">
          <h1 className="text-4xl font-semibold text-white">Welcome to Qooline Admin Dashboard</h1>
          <Image src={qooline} alt="qooline-icon" width={250} height={250} />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-5">
        <div className="flex flex-col bg-white rounded-lg p-5 shadow-lg">
          <p className="text-[#201C1D] font-semibold text-[22px]">Login</p>
          <p className="mt-1 font-normal text-sm text-[#737485]">
            Welcome back. Enter your credentials to access your account.
          </p>
          <div className="flex flex-col mt-3">
            <label htmlFor="emailInput" className="text-[#191D23] font-medium text-sm">
              Email Address
            </label>
            <input
              type="email"
              id="emailInput"
              placeholder="Email Address"
              className="border-[#D0D5DD] rounded-[4px] border-[1px] w-full p-2 text-black"
            />
          </div>

          <div className="flex flex-col mt-3">
            <label htmlFor="passwordInput" className="text-[#191D23] font-medium text-sm">
              Password
            </label>
            <input
              type="password"
              id="passwordInput"
              placeholder="Password"
              className="border-[#D0D5DD] rounded-[4px] border-[1px] w-full p-2 text-black"
            />
          </div>

          <div className="flex items-center mt-5">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberme"
              className="w-4 h-4 mr-2"
            />
            <label htmlFor="rememberMe" className="text-[#191D23] font-normal text-sm">
              Keep me signed in
            </label>
          </div>
          
          <button className="mt-4 w-full bg-yellow-500 text-stone-900 font-semibold py-3 rounded-lg">
            Continue
          </button>
           </div>
      </div>
    </div>
  );
}
