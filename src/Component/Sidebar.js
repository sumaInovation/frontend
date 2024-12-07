

const Navbar=()=>{

    return(
<div class="flex h-screen bg-gray-100">

    {/* <!-- sidebar --> */}
    <div class="hidden lg:flex flex-col w-64 bg-gray-800 ">
        <div class="flex items-center justify-center h-16 bg-gray-950">
            <span class="text-white font-bold uppercase">MENU</span>
            
        </div>
        <div class="flex flex-col flex-1 overflow-y-auto">
        
            <nav class="flex-1 px-2 py-4 bg-gray-800">
            
                <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Report Dwonload
                </a>
                
                <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                   Daily Production
                </a>
                <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Monthly Production
                </a>
            </nav>
        </div>
    </div>
      
    {/* <!-- Main content --> */}
    <div class="flex flex-col flex-1 overflow-y-auto">
        <div class="flex items-center justify-between h-16 bg-gray-950 border-b border-gray-200">
            <div class="flex items-center px-4">
                <button class="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <input class="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search"/>
            </div>
            <div class="flex items-center pr-4 ">

                <button
                    class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="p-4  bg-gray-800 h-screen">
            <h1 class="text-3xl font-bold text-center text-white">Real Time Data Monitoring System</h1>
            {/* Mian content */}
            <div className="lg:grid grid-cols-12 grid-rows-12 gap-1">
            <div className="m-4 bg-stone-300 text-white p-4 col-span-4 row-span-3 rounded-lg shadow">
            </div>
            <div className="m-4 bg-stone-300 text-white p-4 col-span-4 row-span-3 rounded-lg shadow">
            </div>
            <div className="m-4 bg-stone-300 text-white p-4 col-span-4 row-span-3 rounded-lg shadow">
            </div>
            

            </div>
        </div>
    </div>
    
</div>
    )
}
export default Navbar