import CompetencyCategory from "/src/components/CompetencyCategory";

import pythonLogo from "../assets/logos/python.png";
import javaLogo from "../assets/logos/java.png";
import csharpLogo from "../assets/logos/csharp.png";
import javascriptLogo from "../assets/logos/javascript.png";
import haskellLogo from "../assets/logos/haskell.png";

import htmlcssLogo from "../assets/logos/htmlcss.png";
import reactLogo from "../assets/logos/react.png";
import vuejsLogo from "../assets/logos/vuejs.png";
import tailwindcssLogo from "../assets/logos/tailwindcss.png";
import bootstrapLogo from "../assets/logos/bootstrap.png";
import viteLogo from "../assets/logos/vite.png";

import nodejsLogo from "../assets/logos/nodejs.png";
import expressjsLogo from "../assets/logos/expressjs.png";
import azurepythonfunctionappLogo from "../assets/logos/azurepythonfunctionapp.png";
import cosmosdbLogo from "../assets/logos/cosmosdb.png";

import azureLogo from "../assets/logos/azure.png";
import gaeLogo from "../assets/logos/gae.png";
import netlifyLogo from "../assets/logos/netlify.png";
import herokuLogo from "../assets/logos/heroku.png";

import burpsuiteLogo from "../assets/logos/burpsuite.png";
import wiresharkLogo from "../assets/logos/wireshark.png";
import xssLogo from "../assets/logos/xss.png";
import killchainLogo from "../assets/logos/killchain.png";

import numpyLogo from "../assets/logos/numpy.png";
import pandasLogo from "../assets/logos/pandas.png";
import tensorflowLogo from "../assets/logos/tensorflow.png";
import scikitlearnLogo from "../assets/logos/scikitlearn.png";
import openaiLogo from "../assets/logos/openai.png";

import scrumLogo from "../assets/logos/scrum.png";
import agileLogo from "../assets/logos/agile.png";
import umlLogo from "../assets/logos/uml.png";

import junitLogo from "../assets/logos/junit.png";
import pythonunittestLogo from "../assets/logos/pythonunittest.png";


export default function Competencies() {
    const programmingLanguages = [
        { name: "Python", logo: pythonLogo },
        { name: "Java", logo: javaLogo },
        { name: "C#", logo: csharpLogo },
        { name: "JavaScript", logo: javascriptLogo },
        { name: "Haskell", logo: haskellLogo }
    ];
    const frontendTechnologies = [
        { name: "CSS + HTML", logo: htmlcssLogo },
        { name: "React", logo: reactLogo },
        { name: "Vue.js", logo: vuejsLogo },
        { name: "Tailwind CSS", logo: tailwindcssLogo },
        { name: "Bootstrap", logo: bootstrapLogo },
        { name: "Vite", logo: viteLogo }
    ];
    const backendTechnologies = [
        { name: "Node.js", logo: nodejsLogo },
        { name: "Express.js", logo: expressjsLogo },
        { name: "Azure Python Functions", logo: azurepythonfunctionappLogo },
        { name: "CosmosDB", logo: cosmosdbLogo }
    ];
    const cloudAndDeployment = [
        { name: "Microsoft Azure", logo: azureLogo },
        { name: "Google App Engine", logo: gaeLogo },
        { name: "Netlify", logo: netlifyLogo },
        { name: "Heroku", logo: herokuLogo }
    ];
    const cybersecurity = [
        { name: "Burp Suite", logo: burpsuiteLogo },
        { name: "Wireshark", logo: wiresharkLogo },
        { name: "Web Penetration Testing", logo: xssLogo },
        { name: "Cyber Kill Chain Analysis", logo: killchainLogo }
    ];
    const aiAndData = [
        { name: "Numpy", logo: numpyLogo },
        { name: "Pandas", logo: pandasLogo },
        { name: "Tensorflow", logo: tensorflowLogo },
        { name: "Scikit-Learn", logo: scikitlearnLogo },
        { name: "OpenAI API", logo: openaiLogo }
    ];
    const developmentMethodologies = [
        { name: "SCRUM", logo: scrumLogo },
        { name: "Agile Development", logo: agileLogo },
        { name: "UML", logo: umlLogo }
    ];
    const testing = [
        { name: "JUnit", logo: junitLogo },
        { name: "Python unittest", logo: pythonunittestLogo }
    ];
    return (
        <div className="prose max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Competencies</h1>
            <p className="text-lg mb-10">
                Below is a list of programming languages, software, frameworks, libraries and other tools that I have learned and practiced as a computer scientist. I have of course used more tools than just those listed below, but I have chosen to list only tools that I either know well now or would be able to get back into comfortably quickly.<br className="mb-6" />
                If you require more information about my skill in a particular area, feel free to contact me on one of the platforms listed in the footer of the page!
            </p>
            <CompetencyCategory title="Programming Languages" tools={programmingLanguages} />
            <CompetencyCategory title="Frontend Technologies" tools={frontendTechnologies} />
            <CompetencyCategory title="Backend Technologies" tools={backendTechnologies} />
            <CompetencyCategory title="Cloud and Deployment" tools={cloudAndDeployment} />
            <CompetencyCategory title="Cybersecurity" tools={cybersecurity} />
            <CompetencyCategory title="AI and Data" tools={aiAndData} />
            <CompetencyCategory title="Development Methodologies" tools={developmentMethodologies} />
            <CompetencyCategory title="Testing" tools={testing} />
        </div>
    );
}