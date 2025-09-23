import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectInstance({ title, text, images = [], imageLeft = false }) {
    const hasImages = images.length > 0;
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
                threshold: 0.3
            }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);
    
    return (
        <div ref={ref} className={`my-6 md:my-12 max-w-5xl mx-auto transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0" : imageLeft ? "opacity-0 translate-x-[-50px]" : "opacity-0 translate-x-[50px]"}`}>
            <hr className="md:hidden mb-6" />
            <h2 className="mb-4 py-1 bg-gray-300/90 text-2xl text-gray-800 text-center font-bold shadow rounded">{title}</h2>
            {hasImages && (
                <div className="relative">
                    <div className={`mx-auto ${imageLeft ? "md:float-right md:ml-4" : "md:float-left md:mr-4"} w-80 md:w-112`}>
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            loop={true}
                            className="rounded swiper-custom"
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <a href={image.src} target="_blank" rel="noopener noreferrer" className="h-64 flex">
                                        <img
                                            src={image.src}
                                            alt={image.caption}
                                            className="items-center justify-center flex w-full h-64 object-contain rounded"
                                        />
                                    </a>
                                    <p className="bg-gray-300/70 text-center text-sm text-gray-800 italic my-2">{image.caption}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
            <div className="w-full">
                {text}
            </div>
        </div>
    );
}
