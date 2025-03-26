export const Nav = () => {
    return <>
        <nav>
            <div className="flex justify-between items-center p-5 shadow-2xs 2xl:w-7xl mx-auto">
                <div className="font-lato sm:text-2xl">
                    Xplorica
                </div>
                <div>
                    <span className="hidden md:inline-block text-xl px-5">Toggle</span>
                    <button className="bg-black text-white p-2 rounded">Explore</button>
                </div>
            </div>
        </nav>
    </>     
        
}