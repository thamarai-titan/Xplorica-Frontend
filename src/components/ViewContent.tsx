import { Cross } from "../icons/Cross"
interface MainContent{
    id:number,
    place: string;
    country: string;
    shortinfo: string;
    images: string[];
}
interface DataProps{
    id:number
    data:MainContent
}
export const ViewContent = ({id,data}:DataProps) => {
    return (
        <div className="fixed inset-0 inset-y-10 mx-auto 2xl:w-7xl flex justify-center ">
                    <div className="w-96 bg-amber-200 sm:w-2xl md:w-3xl xl:w-4xl 2xl:w-5xl">
                        <div className="flex justify-between p-4">
                            <h4>
                                {id}{data.place}
                            </h4>
                            <div>
                                <Cross/>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    
i                </div>
    )
}