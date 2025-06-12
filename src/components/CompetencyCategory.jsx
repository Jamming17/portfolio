export default function CompetencyCategory({ title, tools }) {
    return (
        <div className="mb-5 md:mb-10">
            <hr className="md:hidden mb-5" />
            <h2 className="mb-4 py-1 bg-gray-300/90 text-3xl text-gray-800 text-center font-bold shadow rounded">{title}</h2>
            <div className="flex flex-wrap gap-4 text-center justify-center">
                {tools.map((tool, index) => (
                    <div key={index} className="w-34 p-2 gap-2 bg-gray-300/90 text-gray-800 shadow rounded">
                        <img 
                            src={tool.logo}
                            alt={`${tool.name} logo`}
                            className="w-30 h-30 object-contain"
                        />
                        <p className="mt-3 break-words text-lg">{tool.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}