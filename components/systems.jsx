import CircleImage from "./UI/image";
import robot from '../public/robot-with-tablet.jpg';
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
        <div className="flex flex-col gap-[50px]">
            <div className="flex justify-around items-start mr-44">
                <div className="flex flex-col gap-[50px] items-center">
                    <TextContainer>STEM</TextContainer>
                    <CircleImage src={stem} alt="stem education system" width={200} height={200}/>
                </div>
                <div className="flex flex-col gap-[50px] items-center">
                    <TextContainer>National English</TextContainer>
                    <CircleImage src={national} alt="national english education system" width={200} height={200}/>
                </div>
                <div className="flex flex-col gap-[50px] items-center">
                    <TextContainer>British</TextContainer>
                    <CircleImage src={british} alt="british education system" width={200} height={200}/>
                </div>
                <div className="flex flex-col gap-[50px] items-center">
                    <TextContainer>German</TextContainer>
                    <CircleImage src={germany} alt="german education system" width={200} height={200}/>
                </div>
            </div>
            {/*hello*/}
            <div className="flex gap-[20px] justify-around items-end ml-44">
                <div className="flex flex-col gap-[50px] items-center">
                    <CircleImage src={national} alt="national arabic education system" width={200} height={200}/>
                    <TextContainer>National Arabic</TextContainer>
                </div>
                <div className="flex flex-col gap-[50px] items-center">
                    <CircleImage src={american} alt="american educational system" width={200} height={200}/>
                    <TextContainer>American</TextContainer>
                </div>
                <div className="flex flex-col gap-[50px] items-center">
                    <CircleImage src={french} alt="french educational system" width={200} height={200}/>
                    <TextContainer>French</TextContainer>
                </div>
                <div className="flex flex-col gap-[50px] items-center">
                    <CircleImage src={ib} alt="ib educational system" width={200} height={200}/>
                    <TextContainer>IB</TextContainer>
                </div>
            </div>
        </div>
    )
}

export default Systems;