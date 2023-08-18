"use client"

export default function Navbar() {
  return (
    <div className="sticky z-10 h-min w-full flex items-center p-2 bg-opacity-50 bg-slate-100 text-black drop-shadow-xl font-medium">
    
    <a className="p-2 px-4 hover:text-blue-400" href="/dashboard">Home</a>
    
    <a className="p-2 px-4 hover:text-blue-400" href="/dashboard">Dashboard</a>
    
    <a className="p-2 px-4 hover:text-blue-400" href="/signup">SignUp</a>

    </div>
  );
}
