import Image from 'next/image'
export default function Nav2(){
    return (
        <div>
           <div className = " h-[570px] bg-red-900 "
      
      >
       <nav className ="flex flex-row">
       <div className="flex justify-center ">
       <Image
          src="/Img/jj.png"
          width= {100}
          height={100}
          alt="ho"
        />
       </div>
       <div>
        <h1 className=" text-center  lg:text-left text-2xl font-bold text-gray-400">Jonh Clein </h1>
        <h2 
        className= " text-center  lg:text-left text-xl font-bold text-gray-400">Service</h2>
       </div>
  
      
       </nav>
        </div>
        </div>
    )
}