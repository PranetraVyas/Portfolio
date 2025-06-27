import { House } from 'lucide-react';
import { User } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { FolderGit2 } from 'lucide-react';
import { Mail } from 'lucide-react';

function Navbar() {
    return(
        <>
        <div className="border-1 rounded-4xl p-3 h-15 w-90 flex justify-center items-center space-x-7 backdrop:xl hover:h-20 hover:w-100 duration-500">
                <House className='rounded-full size-9 p-1 text-white hover:size-20 duration-300'/>
                <User className='rounded-full size-9 p-1 text-white hover:size-20 duration-300'/>
                <Lightbulb className='rounded-full size-9 p-1 text-white hover:size-20 duration-300'/>
                <GraduationCap className='rounded-full size-9 p-1 text-white hover:size-20 duration-300'/>
                <FolderGit2 className='rounded-full size-9 p-1 text-white hover:size-20 duration-300'/>
                <Mail className='rounded-full size-9 p-1 text-white hover:size-20 duration-300'/>
        </div>
        </>
    );
};

export default Navbar