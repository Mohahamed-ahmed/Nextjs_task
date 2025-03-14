import CircleImage from './UI/image';
import TextContainer from './UI/text-container';
import cfaImage from '../public/cfa.jpeg'
import work from '../public/work.jpeg'
import devops from '../public/devops.jpeg'

function Courses(){
    return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-4 md:px-8">
        <div className="flex flex-col gap-6 items-center">
            <CircleImage 
                src={cfaImage} 
                alt="cfa study course" 
                width={250} 
                height={250}
                className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px]"
            />
            <TextContainer>CFA Level II Exam Study Course</TextContainer>
        </div>
        
        <div className="flex flex-col gap-6 items-center">
            <CircleImage 
                src={work} 
                alt="a man is working" 
                width={250} 
                height={250}
                className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px]"
            />
            <TextContainer>UI/UX design</TextContainer>
        </div>
        
        <div className="flex flex-col gap-6 items-center">
            <CircleImage 
                src={devops} 
                alt="devops course" 
                width={250} 
                height={250}
                className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px]"
            />
            <TextContainer>Intro to DevOps</TextContainer>
        </div>
        
        <div className="flex flex-col gap-6 items-center">
            <CircleImage 
                src={work} 
                alt="a man is working" 
                width={250} 
                height={250}
                className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px]"
            />
            <TextContainer>Safety in oil and Gas industry</TextContainer>
        </div>
    </div>
    )
}

export default Courses;