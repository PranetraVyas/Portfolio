import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import {Link, NavLink} from 'react-router-dom';

function Box() {
    return (
        <div className="border-2 rounded-lg border-black h-175 w-375 ">
            <div className="flex flex-col text-white w-100">
                <h1 className="mt-4 ml-4 text-6xl font-thin leading-none">Pranetra Vyas</h1>
                <h1 className="mt-4 ml-4 text-sm font-thin leading-none">Full stack developer</h1>

                <a href="/helloworld.docx" download className="mt-50 ml-4 text-[22px] font-thin leading-none hover:text-fuchsia-800 hover:text-[27px] duration-500">Projects</a>
                <NavLink className="mt-5 ml-4 text-[22px] font-thin leading-none  hover:text-fuchsia-800 hover:text-[27px] duration-500">Education</NavLink>
                <a href="/helloworld.docx" download target='_blank'className="mt-5 ml-4 text-[22px] font-thin leading-none  hover:text-fuchsia-800 hover:text-[27px] duration-500">Resume</a>
            </div>
            <div className="flex text-amber-50 mt-62 mr-4 font-thin gap-4 justify-end items-end">
                <a href={""} target="_blank">
                    <Instagram className='hover:text-fuchsia-800 duration-300' />
                </a>
                <a href={"https://www.linkedin.com/in/pranetra-vyas-68b801343/"} target="_blank">
                    <Linkedin className='hover:text-fuchsia-800 duration-300' />
                </a>
                <a href={"https://github.com/PranetraVyas"} target="_blank">
                    <Github className='hover:text-fuchsia-800 duration-300' />
                </a>
            </div>
        </div>
    )
}

export default Box;