import CircleImage from "./UI/image";
import robot from '../public/robot-with-tablet.jpg';
import TextContainer from "./UI/text-container";
import robot_study from '../public/robot-study.jpeg'
import robot_learn from '../public/robot-learn.jpeg'
import robot_teach from '../public/robot teach.jpeg'

function Services(){
    return(
    <div className="flex gap-[40px] justify-around sm:items-start ">
        <div className="flex flex-col gap-[50px] items-center">
            <CircleImage src={robot_study} alt="Robot writing" width={250} height={250}/>
            <TextContainer>Study Planning</TextContainer>
        </div>
        <div className="flex flex-col gap-[50px] items-center">
            <CircleImage src={robot_teach} alt="Robot help in teaching" width={250} height={250}/>
            <TextContainer> AI Tutoring</TextContainer>
        </div>
        <div className="flex flex-col gap-[50px] items-center">
            <CircleImage src={robot_learn } alt="Robot with a laptop" width={250} height={250}/>
            <TextContainer>Assessment & Evaluation</TextContainer>
        </div>
        <div className="flex flex-col gap-[50px] items-center">
            <CircleImage src={robot_teach} alt="Robot help in teaching" width={250} height={250}/>
            <TextContainer>Private Tutoring</TextContainer>
        </div>
    </div>
    )
}

export default Services;