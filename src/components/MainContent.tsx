import { useEffect,useState } from "react"
import ViewData from "./ViewData"
 
interface DataType {
    id: number;
    place: string;
    country: string;
    shortinfo: string;
    images: string[];
}

export const MainContent = () => {
    
    const [data,SetData] = useState<DataType[] | null>(null);
    
    useEffect(()=>{

        const FetchData =  async () => {
            try{
            const response = await fetch('http://localhost:3000/')
            const result = await response.json()
            SetData(result)
            }
            catch{
                console.log("Error in the Data Loading")
            }
        }
        FetchData()
    },[])
    //const [change,setChange]=useState(0)
    const [id,setId]=useState()
    const [show,setShow]=useState(false)
    const handleClick=(id:any)=>{
        setId(id);
        setShow(true);
        
    }
    return <>
        <div className="mx-auto 2xl:w-7xl">
        <h1 className="mx-auto flex justify-center md:text-3xl sm:text-2xl font-bold mb-3 md:w-5x dark:text-white 2xl:w-7xl">Here are the Top 25 Places You Must visit in Your Life time</h1> 
        </div>
        <div className="flex flex-wrap gap-5 justify-center pt-8 mx-auto 2xl:w-7xl">
            {data?.map((data,index)=>{
                return (
                    <div key={index} className="w-[500px] h-[500px] bg-white p-2 rounded hover:-translate-y-2 border-1">
                       
                       <div className="p-2">
                       <div className="w-full h-[300px] pt-2">
                        {data?.images?.length > 0 && <img src={data.images[0]} alt="Paris" className="w-full h-full overflow-hidden"/>}
                        
                        </div>
                        <div className="pt-3 font-mono">
                        <h1 className="font-bold">City : {data.place}</h1>
                        <h1>Country : {data.country}</h1>
                        <p className="line-clamp-2">{data.shortinfo}</p>
                        <div className="pt-3">
                        <button onClick={()=>handleClick(data?.id)} className="bg-black text-white p-2 rounded px-4 dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-gray-200 border-1" >View</button>
                        </div>
                        </div>
                        
                       </div>
                    </div>
                )
            })}
        </div>
               {show &&  <div className="fixed top-[5%] left-[5%] w-[90%] h-[550px] bg-red-200">
                    <ViewData id={id} data={data} show={show} setShow={setShow}/>
                </div>}
    </>
        
}