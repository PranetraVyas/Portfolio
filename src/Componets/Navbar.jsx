import { House } from 'lucide-react';
import { User } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { FolderGit2 } from 'lucide-react';
import { Mail } from 'lucide-react';

function Navbar() {
    return(
        <>
        <div className="rounded-full p-2 h-15 w-320 flex justify-center space-x-55">
                <House className='size-25  text-white hover:size-40 duration-300 drop-shadow-[0px_0px_39px_rgba(255,255,255,0.9)]'/>
                <User className='size-25  text-white hover:size-40 duration-300 drop-shadow-[0px_0px_39px_rgba(255,255,255,0.9)]'/>
                <Lightbulb className='size-25  text-white hover:size-40 duration-300 drop-shadow-[0px_0px_39px_rgba(255,255,255,0.9)]'/>
                <GraduationCap className='size-25  text-white hover:size-40 duration-300 drop-shadow-[0px_0px_39px_rgba(255,255,255,0.9)]'/>
                <FolderGit2 className='size-25  text-white hover:size-40 duration-300 drop-shadow-[0px_0px_39px_rgba(255,255,255,0.9)]'/>
                <Mail className='size-25  text-white hover:size-40 duration-300 drop-shadow-[0px_0px_39px_rgba(255,255,255,0.9)]'/>
        </div>
        </>
    );
};

export default Navbar