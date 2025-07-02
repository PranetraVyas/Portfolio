import { FileDown } from 'lucide-react';

function Resumebtn(){
    return(
        <>  
        <button className="flex w-40 rounded-full h-13 justify-center items-center text-white backdrop-blur-[30px] hover:bg-black hover:h-17 hover:w-50 duration-700 hover:text-[25px] shadow-2xl">Resume
            <FileDown className='ml-1.5 hover:text-4xl'/>
        </button>
        </>
    )
};

export default Resumebtn;