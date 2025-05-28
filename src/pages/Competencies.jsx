import CompetencyCategory from "/src/components/CompetencyCategory";

export default function Competencies() {
    const programmingLanguages = [
        { name: "Python", logo: "/src/assets/logos/python.png" },
        { name: "Java", logo: "/src/assets/logos/java.png" },
        { name: "C#", logo: "/src/assets/logos/csharp.png" },
        { name: "JavaScript", logo: "/src/assets/logos/javascript.png" },
        { name: "Haskell", logo: "/src/assets/logos/haskell.png" }
    ];
    const frontendTechnologies = [
        { name: "CSS + HTML", logo: "/src/assets/logos/htmlcss.png" },
        { name: "React", logo: "/src/assets/logos/react.png" },
        { name: "Vue.js", logo: "/src/assets/logos/vuejs.png" },
        { name: "Tailwind CSS", logo: "/src/assets/logos/tailwindcss.png" },
        { name: "Bootstrap", logo: "/src/assets/logos/bootstrap.png" },
        { name: "Vite", logo: "/src/assets/logos/vite.png" }
    ];
    const backendTechnologies = [
        { name: "Node.js", logo: "/src/assets/logos/nodejs.png" },
        { name: "Express.js", logo: "/src/assets/logos/expressjs.png" },
        { name: "Azure Python Functions", logo: "/src/assets/logos/azurepythonfunctionapp.png" },
        { name: "CosmosDB", logo: "/src/assets/logos/cosmosdb.png" }
    ];
    const cloudAndDeployment = [
        { name: "Microsoft Azure", logo: "/src/assets/logos/azure.png" },
        { name: "Google App Engine", logo: "/src/assets/logos/gae.png" },
        { name: "Netlify", logo: "/src/assets/logos/netlify.png" },
        { name: "Heroku", logo: "/src/assets/logos/heroku.png" }
    ]
    const cybersecurity = [
        { name: "Burp Suite", logo: "/src/assets/logos/burpsuite.png" },
        { name: "Wireshark", logo: "/src/assets/logos/wireshark.png" },
        { name: "Web Penetration Testing", logo: "/src/assets/logos/xss.png" },
        { name: "Cyber Kill Chain Analysis", logo: "/src/assets/logos/killchain.png" }
    ];
    const aiAndData = [
        { name: "Numpy", logo: "/src/assets/logos/numpy.png" },
        { name: "Pandas", logo: "/src/assets/logos/pandas.png" },
        { name: "Tensorflow", logo: "/src/assets/logos/tensorflow.png" },
        { name: "Scikit-Learn", logo: "/src/assets/logos/scikitlearn.png" },
        { name: "OpenAI API", logo: "/src/assets/logos/openai.png" }
    ];
    const developmentMethodologies = [
        { name: "SCRUM", logo: "/src/assets/logos/scrum.png" },
        { name: "Agile Development", logo: "/src/assets/logos/agile.png" },
        { name: "UML", logo: "/src/assets/logos/uml.png" }
    ];
    const testing = [
        { name: "JUnit", logo: "/src/assets/logos/junit.png" },
        { name: "Python unittest", logo: "/src/assets/logos/pythonunittest.png" }
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