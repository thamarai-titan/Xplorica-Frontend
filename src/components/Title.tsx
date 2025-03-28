import { useEffect, useState } from "react";
export const Title = () => {
    const images: string[] = [
        "https://cdn.pixabay.com/photo/2016/04/05/11/04/nepal-1309205_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/06/05/19/45/mountains-8811206_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/05/31/14/16/sea-7233667_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/09/21/16/49/arch-7470764_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/10/07/08/59/sky-7504583_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/01/08/14/09/mont-saint-michel-6924072_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/18/20/02/nature-1207955_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/05/16/13/14/scenery-5177531_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/05/24/13/29/dubrovnik-5214286_1280.jpg"
    ];
   

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); 
    }, []);

    return (

            <div className="flex justify-center items-center md:h-dvh mx-auto 2xl:w-7xl sm:h-[500px] h-[400px]">
                <div
                    className="bg-cover bg-center transition-all duration-1000 ease-in-out 
             hover:-translate-y-3 
             h-[300px] w-[300px]   /* Default for small screens */
             sm:h-[400px] sm:w-[400px] /* Medium phones */
             md:h-3/4 md:w-3/4 /* Tablets and up */
             lg:h-[600px] lg:w-[900px] /* Laptops */
             xl:h-[600px] xl:w-[1000px] /* Large screens */
             2xl:h-[800px] 2xl:w-[1000px] /* Extra large screens */"
                    style={{ backgroundImage: `url(${images[currentIndex]})` }}
                >
               
                    </div>
            </div>

    );
};
