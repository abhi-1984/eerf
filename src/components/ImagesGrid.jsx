import culturalImage1 from "../assets/cultural/1.jpg"
import culturalImage2 from "../assets/cultural/2.jpg"
import culturalImage3 from "../assets/cultural/3.jpg"
import culturalImage4 from "../assets/cultural/4.jpg"
import culturalImage5 from "../assets/cultural/5.jpg"
import economicalImage1 from "../assets/economical/1.jpg"
import economicalImage2 from "../assets/economical/2.jpg"
import economicalImage3 from "../assets/economical/3.jpg"
import educationalImage1 from "../assets/education/1.jpg"
import educationalImage2 from "../assets/education/2.jpg"
import educationalImage3 from "../assets/education/3.jpg"
import educationalImage4 from "../assets/education/4.jpg"
import educationalImage5 from "../assets/education/5.jpg"

import environmentalImage1 from "../assets/environmental/1.jpg"
import environmentalImage2 from "../assets/environmental/2.jpg"
import environmentalImage3 from "../assets/environmental/3.jpg"
import environmentalImage4 from "../assets/environmental/4.jpg"
import environmentalImage5 from "../assets/environmental/5.jpg"

import healthImage1 from "../assets/health/1.jpg"
import healthImage2 from "../assets/health/2.jpg"
import healthImage3 from "../assets/health/3.jpg"
import healthImage4 from "../assets/health/4.jpg"
import healthImage5 from "../assets/health/5.jpg"

import scienceImage1 from "../assets/scientific/1.jpg"
import scienceImage2 from "../assets/scientific/2.jpg"
import scienceImage3 from "../assets/scientific/3.jpg"
import scienceImage4 from "../assets/scientific/4.jpg"
import scienceImage5 from "../assets/scientific/5.jpg"

import socialImage1 from "../assets/social/1.jpg"
import socialImage2 from "../assets/social/2.jpg"
import socialImage3 from "../assets/social/3.jpg"
import socialImage4 from "../assets/social/4.jpg"

import spiritualImage1 from "../assets/spiritual/1.jpg"
import spiritualImage2 from "../assets/spiritual/2.jpg"
import spiritualImage3 from "../assets/spiritual/3.jpg"
import spiritualImage4 from "../assets/spiritual/4.jpg"
import spiritualImage5 from "../assets/spiritual/5.jpg"

import mediaImage1 from "../assets/mass-media/1.jpg"

export default function ImagesGrid({ wing }) {
  console.log("wig", wing)

  if (wing === "Cultural Wing") {
    return (
      <section className="pb-32">
        <div className="max-w-[840px] mx-auto grid grid-cols-4 gap-5 grid-rows-2">
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-1">
            <img
              src={culturalImage1.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md">
            <img
              src={culturalImage2.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-span-2 col-span-2 col-start-2 row-start-1">
            <img
              src={culturalImage3.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
            <img
              src={culturalImage4.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
            <img
              src={culturalImage5.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
        </div>
      </section>
    )
  }

  if (wing === "Environmental Wing") {
    return (
      <section className="pb-32">
        <div className="max-w-[840px] mx-auto grid grid-cols-4 gap-5 grid-rows-2">
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-1">
            <img
              src={environmentalImage1.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md">
            <img
              src={environmentalImage2.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-span-2 col-span-2 col-start-2 row-start-1">
            <img
              src={environmentalImage3.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
            <img
              src={environmentalImage4.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
            <img
              src={environmentalImage5.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
        </div>
      </section>
    )
  }

  if (wing === "Spiritual Wing") {
    return (
      <section className="pb-32">
        <div className="max-w-[840px] mx-auto grid grid-cols-4 gap-5 grid-rows-2">
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-1">
            <img
              src={spiritualImage1.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md">
            <img
              src={spiritualImage2.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-span-2 col-span-2 col-start-2 row-start-1">
            <img
              src={spiritualImage3.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
            <img
              src={spiritualImage4.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
            <img
              src={spiritualImage5.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
        </div>
      </section>
    )
  }

  if (wing === "Scientific Wing") {
    return (
      <section className="pb-32">
        <div className="max-w-[840px] mx-auto grid grid-cols-4 gap-5 grid-rows-2">
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-1">
            <img
              src={scienceImage1.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md">
            <img
              src={scienceImage2.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-span-2 col-span-2 col-start-2 row-start-1">
            <img
              src={scienceImage3.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
            <img
              src={scienceImage4.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
            <img
              src={scienceImage5.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
        </div>
      </section>
    )
  }

  if (wing === "Social Wing") {
    return (
      <section className="pb-32">
        <div className="max-w-[840px] mx-auto grid grid-cols-2 gap-5">
          <div className="w-full h-full relative aspect-video bg-gray-100 rounded-md">
            <img
              src={socialImage1.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-video bg-gray-100 rounded-md">
            <img
              src={socialImage2.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-video bg-gray-100 rounded-md">
            <img
              src={socialImage3.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-video bg-gray-100 rounded-md">
            <img
              src={socialImage4.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
         
        </div>
      </section>
    )
  }

  if (wing === "Health Wing") {
    return (
      <section className="pb-32">
        <div className="max-w-[840px] mx-auto grid grid-cols-4 gap-5 grid-rows-2">
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-1">
            <img
              src={healthImage1.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md">
            <img
              src={healthImage2.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-span-2 col-span-2 col-start-2 row-start-1">
            <img
              src={healthImage3.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
            <img
              src={healthImage4.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
            <img
              src={healthImage5.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
        </div>
      </section>
    )
  }

  if (wing === "Economical Wing") {
    return (
      <section className="pb-32">
        <div className="max-w-[840px] mx-auto grid grid-cols-3 gap-5 grid-rows-2">
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-1">
            <img
              src={economicalImage1.src}
              alt="economicalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md">
            <img
              src={economicalImage2.src}
              alt="economicalImage2"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-span-2 col-span-2 col-start-2 row-start-1">
            <img
              src={economicalImage3.src}
              alt="economicalImage3"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
        </div>
      </section>
    )
  }

  if (wing === "Mass Media Wing") {
    return (
      <section className="pb-32">
        <div className="max-w-[840px] mx-auto ">
          <div className="w-full h-full relative bg-gray-100 aspect-video">
            <img
              src={mediaImage1.src}
              alt="mediaImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
        </div>
      </section>
    )
  }

  if (wing === "Educational Wing") {
    return (
      <section className="pb-32">
        <div className="max-w-[840px] mx-auto grid grid-cols-4 gap-5 grid-rows-2">
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-1">
            <img
              src={educationalImage1.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md">
            <img
              src={educationalImage2.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-span-2 col-span-2 col-start-2 row-start-1">
            <img
              src={educationalImage3.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
            <img
              src={educationalImage4.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
          <div className="w-full h-full relative aspect-square bg-gray-100 rounded-md row-start-2">
            <img
              src={educationalImage5.src}
              alt="culturalImage1"
              className="w-full h-full object-cover rounded-md absolute inset-0"
            />
          </div>
        </div>
      </section>
    )
  }
  
  if (wing === "Political Wing") {
    return null
  }
  else {
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
}
