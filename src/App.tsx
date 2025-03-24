import axios from "axios"
import { useEffect, useState } from "react"

interface DataIten{
  id:string,
  name:string,
}
const App = ()=>{
  const [content , setContent] = useState<DataIten[]>([])

  useEffect(() => {
    const f = async () =>{
    const response = await axios.get<DataIten[]>("http://localhost:3000/")
    setContent(response.data)
    }
    f()
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default App