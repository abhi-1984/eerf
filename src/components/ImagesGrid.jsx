import culturalImage1 from "../assets/cultural/1.jpg"
import culturalImage2 from "../assets/cultural/2.jpg"
import culturalImage3 from "../assets/cultural/3.jpg"
import culturalImage4 from "../assets/cultural/4.jpg"
import culturalImage5 from "../assets/cultural/5.jpg"


export default function ImagesGrid({wing}) {


  if(wing === 'Cultural Wing') {
    return(
      <section className="pb-32">
      <div className="max-w-[840px] mx-auto grid grid-cols-4 gap-5 grid-rows-2">
        <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-1">
          <img src={culturalImage1.src} alt="culturalImage1" className="w-full h-full object-cover rounded-md absolute inset-0" />
        </div>
        <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md">
        <img src={culturalImage2.src} alt="culturalImage1" className="w-full h-full object-cover rounded-md absolute inset-0" />
        </div>
        <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-span-2 col-span-2 col-start-2 row-start-1">
        <img src={culturalImage3.src} alt="culturalImage1" className="w-full h-full object-cover rounded-md absolute inset-0" />
        </div>
        <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
        <img src={culturalImage4.src} alt="culturalImage1" className="w-full h-full object-cover rounded-md absolute inset-0" />
        </div>
        <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
        <img src={culturalImage5.src} alt="culturalImage1" className="w-full h-full object-cover rounded-md absolute inset-0" />
        </div>
      </div>
    </section>
    )
  }

  return (
    <section className="pb-32">
      <div className="max-w-[840px] mx-auto grid grid-cols-4 gap-5 grid-rows-2">
        <div className="w-full h-full aspect-square bg-gray-100 rounded-md row-start-1"></div>
        <div className="w-full h-full aspect-square bg-gray-100 rounded-md"></div>
        <div className="w-full h-full aspect-square bg-gray-100 rounded-md row-span-2 col-span-2 col-start-2 row-start-1"></div>
        <div className="w-full h-full aspect-square bg-gray-100 rounded-md row-start-2"></div>
        <div className="w-full h-full aspect-square bg-gray-100 rounded-md row-start-2"></div>
      </div>
    </section>
  )
}
