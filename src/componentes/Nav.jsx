
import Image from 'next/image'

export default function Nav (){
    return (
        <div className="bg-orange-300"
           
        >
           <div className = " h-[570px] bg-red-900 "
      
      >
       <nav className ="flex     pl-32 pt-20 space-x-4">
       <div className="flex justify-center lg:justify-left">
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