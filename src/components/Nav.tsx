import { Camera } from "../icons/Camera"
export const Nav = () => {
    return <>

    <nav className="shadow-2xs">
        <div className="flex justify-between items-center p-6">
            <div className="font-lato text-2xl">
                Xplorica
            </div>
            <div className="flex items-center">
                <span className="pe-5 font-medium font-mono">
                    Must Go Places
                </span>

                <div className="flex items-center bg-green-400 p-2 border-1 rounded px-3 font-mono">
                    <span>Explore</span>
                    <span className="ps-2"><Camera/></span>
                </div>
            </div>
        </div>
    </nav>
    </>
        
}