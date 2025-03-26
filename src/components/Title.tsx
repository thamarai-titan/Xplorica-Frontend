import t1 from "../img/t1.jpg"
export const Title = () => {

    const ia = [
        "https://cdn.pixabay.com/photo/2016/04/05/11/04/nepal-1309205_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/05/31/14/16/sea-7233667_1280.jpg"

    ]
    return <>
            <div className="flex justify-center items-center bg-cover h-96 w-96" style={{backgroundImage:`url(${t1})`}}>
             
            </div>
    </>
}       