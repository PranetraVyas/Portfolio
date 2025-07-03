import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Getin from './Componets/Getin.jsx/Getin'
import Silk from './Componets/Silk/Silk'
import Texthero from './Componets/Texthero.jsx/Texthero'

function App() {
  return (
   <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className='flex flex-col justify-center items-center h-screen w-screen mt-3'>
        <Texthero />
        <div className='mt-15'>
          <Link to="PranetraVyas">
            <Getin />
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default App
