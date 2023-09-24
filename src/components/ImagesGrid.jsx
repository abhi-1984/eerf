import React from "react"

export default function ImagesGrid() {
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
