import CircleImage from "./UI/image";
import TextContainer from "./UI/text-container";
import robot_study from '../public/robot-study.jpeg'
import robot_learn from '../public/robot-learn.jpeg'
import robot_teach from '../public/robot teach.jpeg'

function Services(){
    return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-4 md:px-8">
        <div className="flex flex-col gap-6 items-center">
            <CircleImage 
                src={robot_study} 
                alt="Robot writing" 
                width={250} 
                height={250}
                className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px]"
            />
            <TextContainer>Study Planning</TextContainer>
        </div>
        
        <div className="flex flex-col gap-6 items-center">
            <CircleImage 
                src={robot_teach} 
                alt="Robot help in teaching" 
                width={250} 
                height={250}
                className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px]"
            />
            <TextContainer>AI Tutoring</TextContainer>
        </div>
        
        <div className="flex flex-col gap-6 items-center">
            <CircleImage 
                src={robot_learn} 
                alt="Robot with a laptop" 
                width={250} 
                height={250}
                className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px]"
            />
            <TextContainer>Assessment & Evaluation</TextContainer>
        </div>
        
        <div className="flex flex-col gap-6 items-center">
            <CircleImage 
                src={robot_teach} 
                alt="Robot help in teaching" 
                width={250} 
                height={250}
                className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px]"
            />
            <TextContainer>Private Tutoring</TextContainer>
        </div>
    </div>
    )
}

export default Services;