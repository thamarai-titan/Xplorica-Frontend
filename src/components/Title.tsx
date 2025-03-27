import t1 from "../img/t1.jpg";
import { useEffect, useState } from "react";
export const Title = () => {
    const images: string[] = [
        "https://cdn.pixabay.com/photo/2016/04/05/11/04/nepal-1309205_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/05/31/14/16/sea-7233667_1280.jpg",
    ];
    const text: string[] = [
        "Hello",
        "EveryOne",
        "All of YOU",
    ]

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
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
