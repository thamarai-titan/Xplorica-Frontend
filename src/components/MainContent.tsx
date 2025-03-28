import { useEffect,useState } from "react"
 


export const MainContent = () => {
    
    const [data,SetData] = useState<string[]>()
    
    useEffect(()=>{

        const FetchData =  async () => {
            try{
            const response = await fetch('')
            const result = await response.json()
            SetData(result)
            }
            catch{
                console.log("Error in the Data Loading")
            }
        }
        FetchData()
    },[])

    return (
        <div>
            {data}
        </div>
    )
}