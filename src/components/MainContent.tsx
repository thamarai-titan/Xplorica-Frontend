import React, {  useEffect, useState } from "react";
import ViewData from "./ViewData";
import { showState } from "../atoms/show";
import { useRecoilState } from "recoil";

interface DataType {
    id: number;
    place: string;
    country: string;
    shortinfo: string;
    images: string[];
}

export const MainContent = () => {
    const [data, SetData] = useState<DataType[]>([]); // Ensure data is always an array
    const [id, setId] = useState<number | null>(null); // Ensure id can be null
    const [show, setShow] = useRecoilState(showState);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/');
                const result: DataType[] = await response.json(); // Explicitly define result type
                SetData(result);
            } catch {
                console.log("Error in the Data Loading");
            }
        };
        FetchData();
    }, []);

    const handleClick = (placeId: number) => {
        setId(placeId);
        setShow(true);
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
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {show && id !== null && (
                <div className="fixed top-[5%] left-[5%] w-[90%] h-[550px] bg-red-200">
                    <ViewData id={id} data={data} />
                </div>
            )}
        </>
    );
};
