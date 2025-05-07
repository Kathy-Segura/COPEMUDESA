import Image  from "next/image"

export default function VidSeccion(){
  return(
    <section className="flex justify-center mt-20">
    <div 
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl"
        style={{
        backgroundImage: "url('/diosas.png')", // Imagen de fondo
        backgroundSize: "cover", 
        backgroundPosition: "center",
        height: "400px" // Ajuste de altura
        }}
    >
        <video 
        src="/vid-diosas.mp4" 
        controls 
        poster="/diosas.png"
        className="w-full h-full rounded-2xl object-cover"
        ></video>
    </div>
    </section>
  )
}