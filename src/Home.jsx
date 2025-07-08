import Silk from "./Componets/Silk/Silk";
import Box from "./Componets/Box/Box";

function Home() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Silk
                    speed={5}
                    scale={0.5}
                    color="#7B7481"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            <div className="flex flex-col justify-center items-center h-screen w-screen">
                <Box />
            </div>
        </div>
    )
}

export default Home;