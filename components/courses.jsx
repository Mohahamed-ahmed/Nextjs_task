import robot from '../public/robot-with-tablet.jpg';
import CircleImage from './UI/image';
import TextContainer from './UI/text-container';
import cfaImage from '../public/cfa.jpeg'
import work from '../public/work.jpeg'
import devops from '../public/devops.jpeg'

function Courses(){
    return(
        <div className="flex gap-[40px] justify-around sm:items-start ">
        <div className="flex flex-col gap-[50px] items-center">
            <CircleImage src={cfaImage} alt="cfa study course" width={250} height={250}/>
            <TextContainer>CFA Level II Exam Study Course</TextContainer>
        </div>
        <div className="flex flex-col gap-[50px] items-center">
            <CircleImage src={work} alt="a man working" width={250} height={250}/>
            <TextContainer>UI/UX design</TextContainer>
        </div>
        <div className="flex flex-col gap-[50px] items-center">
            <CircleImage src={devops} alt="devops course" width={250} height={250}/>
            <TextContainer>Safety in oil and Gas industry</TextContainer>
        </div>
        <div className="flex flex-col gap-[50px] items-center">
            <CircleImage src={work} alt="a man work" width={250} height={250}/>
            <TextContainer>Intro to DevOps</TextContainer>
        </div>
    </div>
    )
}

export default Courses;