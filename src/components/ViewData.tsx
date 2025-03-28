
const ViewData = ({id,data,show,setShow}) => {
    const datas=data.filter((e)=>e.id==id)
    console.log(datas);
    
    
  return (
    <div>
        <button onClick={()=>setShow(!show)}>close</button>
      {datas?.map((data:String,index)=>{
                return (
                    <div key={index} className="w-full h-[100%] flex overflow-hidden bg-gray-200 p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded">
                       
                        <div className="w-[50%] h-full">
                        {data?.images?.length > 0 && <img src={data.images[0]} alt="Paris" className="w-full h-full overflow-hidden"/>}
                        
                        </div>
                        <div>
                        <h1 className="font-bold">City : {data.place}</h1>
                        <h1>Country : {data.country}</h1>
                        <p className="line-clamp-2">{data.shortinfo}</p>
                        </div>
                        <button onClick={()=>handleClick(data?.id)}>View</button>
                    </div>
                )
            })}
    </div>
  )
}

export default ViewData
