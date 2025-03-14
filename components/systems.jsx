import CircleImage from "./UI/image";
import TextContainer from "./UI/text-container";
import stem from '../public/stem.jpeg'
import ib from '../public/ib (1).jpeg'
import british from '../public/british.jpeg'
import germany from '../public/germany.jpeg'
import french from '../public/french.jpeg'
import national from '../public/national.jpeg'
import american from '../public/american.jpg'

function Systems(){
    return(
        <div className="flex flex-col gap-8 md:gap-12 px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:mr-44">
                <div className="flex flex-col gap-4 md:gap-6 items-center">
                    <TextContainer>STEM</TextContainer>
                    <CircleImage 
                        src={stem} 
                        alt="stem education system" 
                        width={200} 
                        height={200}
                        className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
                    />
                </div>
                <div className="flex flex-col gap-4 md:gap-6 items-center">
                    <TextContainer>National English</TextContainer>
                    <CircleImage 
                        src={national} 
                        alt="national english education system" 
                        width={200} 
                        height={200}
                        className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
                    />
                </div>
                <div className="flex flex-col gap-4 md:gap-6 items-center">
                    <TextContainer>British</TextContainer>
                    <CircleImage 
                        src={british} 
                        alt="british education system" 
                        width={200} 
                        height={200}
                        className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
                    />
                </div>
                <div className="flex flex-col gap-4 md:gap-6 items-center">
                    <TextContainer>German</TextContainer>
                    <CircleImage 
                        src={germany} 
                        alt="german education system" 
                        width={200} 
                        height={200}
                        className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
                    />
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:ml-44">
                <div className="flex flex-col gap-4 md:gap-6 items-center">
                    <CircleImage 
                        src={national} 
                        alt="national arabic education system" 
                        width={200} 
                        height={200}
                        className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
                    />
                    <TextContainer>National Arabic</TextContainer>
                </div>
                <div className="flex flex-col gap-4 md:gap-6 items-center">
                    <CircleImage 
                        src={american} 
                        alt="american educational system" 
                        width={200} 
                        height={200}
                        className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
                    />
                    <TextContainer>American</TextContainer>
                </div>
                <div className="flex flex-col gap-4 md:gap-6 items-center">
                    <CircleImage 
                        src={french} 
                        alt="french educational system" 
                        width={200} 
                        height={200}
                        className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
                    />
                    <TextContainer>French</TextContainer>
                </div>
                <div className="flex flex-col gap-4 md:gap-6 items-center">
                    <CircleImage 
                        src={ib} 
                        alt="ib educational system" 
                        width={200} 
                        height={200} 
                        className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
                    />
                    <TextContainer>IB</TextContainer>
                </div>
            </div>
        </div>
    )
}

export default Systems;