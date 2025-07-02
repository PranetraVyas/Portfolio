import Textsec from "../Componets/Textsec"
import Navbar from "../Componets/Navbar"


function Landing(){
    return(
        <>
        <div className="flex flex-col bg-black h-screen w-screen">
            <div className="items-center ml-30 mt-1">
                <Navbar />
            </div>
            <div className="mr-160 mt-50">
                <Textsec />
            </div>
        </div>
       </>
        
    )
}

export default Landing