import { TypeAnimation } from 'react-type-animation';

function Text(){
    return(
        <>
        <div className="">
            <h1 className="text-[100px]  text-black">My Name is</h1>
            <h1 className="text-[90px] text-red-600 decoration-red-700 underline decoration-wavy">Pranertra Vyas</h1>
        </div>
        </>
    )
} 

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Text
