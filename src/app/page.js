"use client"
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Nav2 from "@/componentes/Nav2"
import { BsDatabaseCheck } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiFillTool } from "react-icons/ai";
import { v4 as uuidv4} from  "uuid"

import { useRouter } from 'next/navigation';
import { auth , registerUser } from '@/firebase';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({
    TTTuid:uuidv4(),
    name: '',
    email: '',
   
  });

  

  const setDataHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = () =>{
    
    window.location.href = 'https://go.hotmart.com/T88410936L?dp=1';
  }

 const onSubmit = async (e)=>{
   
  e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  console.log('Por el submit');

  try {
    console.log('El user es en register', user);
    await registerUser(user);
   


    toast.promise(
      Promise.resolve('Registro  Correcto'), // Resuelve la promesa cuando la notificación se cierra
      {
        loading: 'Cargando...',
        success: (resolved) => {
          console.log("SE LOGORO PARECE ");
          window.location.href = 'https://go.hotmart.com/T88410936L?dp=1'; // Redirige a la página 'home' después de que la notificación se cierre
          return resolved;
        },
      }
    );

  } catch (error) {
    console.error('Error en onSubmit de register', error);
  }



 }





  return (
    <div>
      <div className="bg-orange-300">
        <div className=" h-[570px]  "
          style={{
            backgroundImage: 'url("./Img/g11.png")',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <nav className="flex  flex-col pt-20   lg:flex-row lg:pl-10 lg:pt-20  lg:space-x-4">
            <div className="flex justify-center lg:justify-left">
              <Image
                src="/Img/jj.png"
                width={100}
                height={100}
                alt="ho"
              />
            </div>
            <div>
              <h1 className=" text-center  lg:text-left text-2xl font-bold text-gray-400">Jonh Klein </h1>
              <h2
                className=" text-center  lg:text-left text-xl font-bold text-gray-400">Services</h2>
            </div>


          </nav>



          <div className="  pt-10 flex flex-col justify-center lg:flex-row lg:justify-between lg:px-10" >

            <div className="">
              <video className="mt-14 w-[400px] " autoPlay muted playsInline>
                <source src="/Img/p2.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="pt-14 ">
              <h1
                className="text-black text-center lg:text-left font-bold text-3xl"> Desarrollo Android sin Limites: Curso Completo de Firebase</h1>
              <h2 className="  text-black pt-5 lg:pt-0 text-center lg:text-left text-xl">Se indispensable para tu Equipo. No te pierdas esta oportunidad</h2>
            </div>
          </div>
        </div>
      </div>




      <section className=" h-[600px]  mt-[400px] lg:mt-20  flex  flex-col lg:px-20 lg:flex-row lg:justify-between">
        <form  onSubmit={(e) => onSubmit(e)} className=" rounded  pt-10 px-5 lg:px-10 w-[300] bg-gray-200 lg:w-[400px] h-[340px] flex flex-col gap-2">
          <h1 className="text-orange-500 font-bold text-xl">Dejanos tus datos enviarte para mas conocimeinto de Calidad !  </h1>
          <label className="font-bold">Nombre</label>
          <input
            className=" rounded"
            type="text"
            name= "name"
            onChange={setDataHandler}
          />
          <label className="font-bold">Correo </label>
          <input
            className=" rounded"
            type="email"
            name= "email"
            onChange={setDataHandler}
          />

          <button className="p-3 font-bold text-white text-xl mt-30 bg-orange-500 hover:font-bold "> Comprar</button>
        </form>

        <div className="mt-10 lg:mt-0">
          <Image
            src="/Img/firebaseA.png"
            width={500}
            height={200}
            alt="ho"
          />

        </div>
      </section>

      <h1 className=" text-3xl font-bold text-center  p-6 lg:p-10"> Lo que obtendras al incorpar Firebase en tus Aplicaciones Android</h1>



      <section className= "pt-10  px-10 gap-6 lg:gap-0 lg:h-[500px] flex flex-col justify-center lg:px-10 lg:flex-row lg:justify-between  ">
   
   <div className="p-6 w-[300px] h-[440px] bg-orange-400">
     <h2 className="text-gray-200 font-bold text-2xl">Alojamiento Confiable</h2>
     <p className="text-white ">
       Los usuarios podran acceder de manera rapida y segura a tu aplicacion gracias a los modos optimos de autentificacion que ofrece Firebase
     </p>
     <div className="flex justify-center pt-24">
     <BsFillPersonCheckFill className="text-white text-6xl " />
     </div>
   </div>
   <div className="p-6 w-[300px] h-[440px] bg-orange-400">
     <h2 className="text-gray-200 font-bold text-2xl">Base de Datos Escalables</h2>
     <p className="text-white ">
       Firebase proporciona un manejo eficiente de la informacion con un acceso rapido y seguro a tu aplicacion. Sin la necesidad de utilizar servidores
     </p>
      
     <div className="flex justify-center pt-24" >
     <BsDatabaseCheck className="text-white text-6xl" />
     </div>
   </div>
   <div className=" p-6 w-[300px] h-[440px] bg-orange-400">
     <h2 className="text-gray-200 font-bold text-2xl">Desarrollo  Gratuito y Herramienta de Analisis</h2>
     <p className="text-white ">
       Firebase  ofrece un comienzo gratuito del uso de sus herramientas. Entre otros recursos incluye Google Analitic y servicio de hosting gratuito
     </p>
     <div className="flex justify-center pt-20">
     <AiFillTool className="text-white text-6xl" />
     </div>
   </div>

 </section>


 <div className="bg-white mt-10 flex justify-center">
         <Image
        src="/Img/titulo.png"
        width= {900}
        height={400}
        alt="ho"
      />
      </div>
      <div className=" mx-10 lg:mx-0 flex justify-center " >
   <video  className= "mt-14 w-[800px] " autoPlay muted  playsInline>
        <source src="/Img/temario.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
   </div>

      <div className=" mx-10 lg:mx-0 bg-color3 mt-10 flex justify-center">
   <video  className= "mt-14 w-[800px] " autoPlay muted  playsInline>
        <source src="/Img/bono2.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      </div>

      <div className= " mt-10 mb-10 flex justify-center">
        <button
         onClick= {onClick}
         
         className=" rounded font-bold text-white p-4 text-2xl bg-orange-500"> Comprar AHORA</button>
      </div>



      <footer className= " bg-red-400 p-10 text-center text-white">
      <h2 className="font-bold text-2xl">Alguna duda? Comunicate con nosotros</h2>
      <p>William-Champion@outlook.com</p>
    </footer>





    </div>
  )

}
