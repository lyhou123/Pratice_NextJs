'use client';
import { Carousel } from 'flowbite-react';
export default function CarouselComponent() {
  return (
    <div className="h-[600px] bg-[url('https://istad.co/resources/img/slide/slide-1.jpg')] bg-no-repeat bg-cover bg-center">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 justify-align-content-center ">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="text-white max-w-2xl mb-4 font-extrabold tracking-tight leading-none text-[30px] dark:text-white">Center of Science and Technology Advanced Development</h1>
            <p className=" text-white text-[16px] mb-6 font-lightlg:mb-8  dark:text-gray-400">CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.</p>
            <a href="#" className="bg-blue-900 text-white inline-flex items-center justify-center px-5 py-2 text-base font-medium text-centerborder border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Enroll Now
            </a> 
        </div>             
    </div>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 justify-align-content-center ">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className=" max-w-2xl mb-4 font-extrabold tracking-tight leading-none text-[30px] dark:text-white text-white">Center of Science and Technology Advanced Development</h1>
            <p className=" text-white text-[16px] mb-6 font-light lg:mb-8  dark:text-gray-400">CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.</p>
            <a href="#" className="bg-blue-900 text-white inline-flex items-center justify-center px-5 py-2 text-base font-medium text-centerborder border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Enroll Now
            </a> 
        </div>             
    </div>
      </Carousel>
    </div>
  )
}
