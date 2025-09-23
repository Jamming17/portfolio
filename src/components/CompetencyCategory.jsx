import { useEffect, useState, useRef } from "react";

export default function CompetencyCategory({ title, tools }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(ref.current);
                }
            },
            {
                threshold: 0.5
            }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div ref={ref} className={`mb-5 md:mb-10 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <hr className="md:hidden mb-5" />
            <h2 className="mb-4 py-1 bg-gray-300/90 text-3xl text-gray-800 text-center font-bold shadow rounded">{title}</h2>
            <div className="flex flex-wrap gap-4 text-center justify-center">
                {tools.map((tool, index) => {
                    return (
                        <div key={index} className={`w-34 p-2 gap-2 bg-gray-300/90 text-gray-800 shadow rounded transition-all duration-700 ease-out ${tool.gold && "border-4 border-amber-400"} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <img 
                                src={tool.logo}
                                alt={`${tool.name} logo`}
                                className="w-30 h-30 object-contain"
                            />
                            <p className="mt-3 break-words text-lg">{tool.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}