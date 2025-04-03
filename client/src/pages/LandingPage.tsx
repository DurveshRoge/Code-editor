import { useNavigate } from "react-router-dom";
 
 function LandingPage() {

    const navigate =useNavigate()
    const navigateRoom =()=>{
        navigate("/room")

    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-5 text-center">
      <img src="/logo.png" alt="Code Collab Logo" className="w-72 mb-6" />
      <p className="text-lg text-gray-300 mt-1 max-w-2xl">
        Code Collab is a real-time collaborative code editor that enables developers 
        to work together seamlessly from anywhere. Share, edit, and build code 
        with your team in an interactive and efficient way.
      </p>
      <p className="text-xl text-white font-semibold mt-4">
        Code Together, Create Faster!
      </p>
      <button onClick={navigateRoom} className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition">
        Try
      </button>
    </div>
  );
}


export default LandingPage;