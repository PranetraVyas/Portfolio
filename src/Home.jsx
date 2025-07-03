import Silk from "./Componets/Silk/Silk";

function Home() {
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
            <div>
                
            </div>
        </div>
    )
}

export default Home;