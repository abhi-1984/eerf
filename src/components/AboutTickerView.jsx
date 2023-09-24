import Image1 from "../assets/about/image-1.jpg"
import Image2 from "../assets/about/image-2.jpg"
import Image3 from "../assets/about/image-3.jpg"
import Image4 from "../assets/about/image-4.jpg"
import Image5 from "../assets/about/image-5.jpg"
import Image6 from "../assets/about/image-6.jpg"
import Image7 from "../assets/about/image-7.jpg"
import Image8 from "../assets/about/image-8.jpg"
import Image9 from "../assets/about/image-9.jpg"
import Image10 from "../assets/about/image-10.jpg"

export default function AboutTicketView() {
  return (
    <div className="w-full grid grid-cols-5 gap-5 px-5">
    
        <img
          src={Image1.src}
          loading="lazy"
          className="w-full aspect-video rounded-lg object-cover"
          alt=""
        />
        <img
          src={Image2.src}
          loading="lazy"
          className="w-full aspect-video rounded-lg object-cover"
          alt=""
        />
        <img
          src={Image3.src}
          loading="lazy"
          className="w-full aspect-video rounded-lg object-cover"
          alt=""
        />
        <img
          src={Image4.src}
          loading="lazy"
          className="w-full aspect-video rounded-lg object-cover"
          alt=""
        />
        <img
          src={Image5.src}
          loading="lazy"
          className="w-full aspect-video rounded-lg object-cover"
          alt=""
        />
     

     
        <img
          src={Image6.src}
          loading="lazy"
          className="w-full aspect-video rounded-lg object-cover"
          alt=""
        />
        <img
          src={Image7.src}
          loading="lazy"
          className="w-full aspect-video rounded-lg object-cover"
          alt=""
        />
        <img
          src={Image8.src}
          loading="lazy"
          className="w-full aspect-video rounded-lg object-cover"
          alt=""
        />
        <img
          src={Image9.src}
          loading="lazy"
          className="w-full aspect-video rounded-lg object-cover"
          alt=""
        />
        <img
          src={Image10.src}
          loading="lazy"
          className="w-full aspect-video rounded-lg object-cover"
          alt=""
        />
    
    </div>
  )
}
