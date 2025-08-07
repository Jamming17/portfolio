import { Link } from "react-router-dom";
import stonehengeImg from "../assets/stonehenge.jpg";

export default function Home() {
    return (
        <div className="prose max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 mt-6 md:mt-0">Homepage</h1>
            <img
                src={stonehengeImg}
                alt="A picture of me at Stonehenge"
                className="md:float-right w-70 h-110 ml-6 mb-4 object-cover shadow-lg"
            />
            <p className="text-lg">
                Hello! My name is Jack and welcome to my website! This website has been fully built by me using my full-stack development skills. The code and more infomation about this site is available on my <a href="https://github.com/Jamming17/portfolio" className="underline">GitHub</a>.<br className="mb-6"/>
                I have studied at the University of Southampton for the past three years and have now graduated with a <strong className="text-yellow-100">Bachelor's Degree in Computer Science</strong>. Throughout my university experience, I have developed a strong interest in many areas of software development.<br className="mb-6"/>
                My degree has given me a solid foundation in many programming languages, full-stack development, cloud development, machine learning and secure development. Details of my skills can be found on the <Link to="/competencies" className="underline">competencies</Link> page of this site. Additionally, I have completed many projects which can be found in detail on the <Link to="/projects" className="underline">projects</Link> page.<br className="mb-6"/>
                I am particularly passionate about writing clean and efficient code to ease collaboration work and keeping software secure and protected against vulnerabilities.<br className="mb-6"/>
                I am currently based in the UK and actively seeking opportunities in <strong className="text-yellow-100">England</strong>. I am eager to bring my adaptability, enthusiasm and problem-solving skills into the tech industry as I begin my career.
            </p>
        </div>
    );
}