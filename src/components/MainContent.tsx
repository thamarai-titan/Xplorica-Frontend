import {  useEffect, useState } from "react";
import { Cross } from "../icons/Cross";
interface DataType {
    id: number;
    place: string;
    country: string;
    shortinfo: string;
    images: string[];
    knownFor: { [key: string]: string };
    bestTime: string;
}

export const MainContent = () => {
    const [data, SetData] = useState<DataType[]>([]); 
    const [id, setId] = useState<number>(0); 
    const [show , setShow] = useState<boolean>(false)


    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/');
                const result: DataType[] = await response.json();
                SetData(result);
            } catch {
                console.log("Error in the Data Loading");
            }
        };
        FetchData();
    }, []);

    const handleClick = (placeId: number) => {
        setShow(true);
        setId(placeId);
    };
    
    return (
        <>
            <div className="mx-auto 2xl:w-7xl">
                <h1 className="mx-auto flex justify-center md:text-3xl sm:text-2xl font-bold mb-3 md:w-5x dark:text-white 2xl:w-7xl">
                    Here are the Top 25 Places You Must Visit in Your Lifetime
                </h1>
            </div>
            <div className="flex flex-wrap gap-5 justify-center pt-8 mx-auto 2xl:w-7xl">
                {data.map((place, index) => (
                    <div key={index} className="w-[500px] h-[500px] bg-white p-2 rounded hover:-translate-y-2 border-1">
                        <div className="p-2">
                            <div className="w-full h-[300px] pt-2">
                                {place.images.length > 0 && (
                                    <img src={place.images[0]} alt={place.place} className="w-full h-full overflow-hidden" />
                                )}
                            </div>
                            <div className="pt-3 font-mono">
                                <h1 className="font-bold">City: {place.place}</h1>
                                <h1>Country: {place.country}</h1>
                                <p className="line-clamp-2">{place.shortinfo}</p>
                                <div className="pt-3">
                                    <button
                                        onClick={() => handleClick(place.id)}
                                        className="bg-black text-white p-2 rounded px-4 dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-gray-200 border-1"
                                    >
                                        View more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {show && 
    <div className="fixed inset-0 bg-opacity-100 flex justify-center items-center z-50 ">
      <div className="w-[90%] max-w-4xl bg-white p-6 rounded-lg shadow-lg relative h-[600px] dark:bg-black">
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-700 dark:text-white hover:text-black dark:hover:text-white"
        >
          <Cross />
        </button>

        {/* Title & Country */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">{data[id-1].place}</h2>
          <p className="text-gray-600">{data[id-1].country}</p>
        </div>

        {/* Featured Image */}
        <div className="w-full h-[300px] mb-4">
          <img
            src={data[id-1].images[0]}
            alt={data[id-1].place}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Best Time to Visit */}
        <div className="text-lg font-semibold  text-black dark:text-white mb-2">
          Best Time to Visit: <span className="font-normal">{data[id-1].bestTime}</span>
        </div>

        {/* Known For - Grid Layout */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold  text-black dark:text-white">Known For:</h3>
          <ul className="grid grid-cols-2 gap-3 mt-2 text-gray-600">
            {Object.values(data[id-1].knownFor).map((spot, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded-md text-center">
                {spot}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>}
            
        </>
    );
};
