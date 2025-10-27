import {ProductCard} from "../ProductCard";
import { useRef, useState, useEffect } from "react";
import {ScrollButton} from "../ScrollButton";
import type {ICarousel} from "./type.ts";
import {ScrollDirection} from "../ScrollButton/type.ts";

const Carousel = ({ products, onImageClick, setShowModal }: ICarousel ) => {
    const carouselRef = useRef<HTMLElement>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const checkScrollPosition = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setIsAtStart(scrollLeft <= 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            checkScrollPosition();
            carousel.addEventListener('scroll', checkScrollPosition);
            return () => carousel.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative">
            <ScrollButton
                direction={ScrollDirection.left}
                onClick={scrollLeft}
                disabled={isAtStart}
            />

            <section
                ref={carouselRef}
                className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory
                     [scrollbar-width:none] [-ms-overflow-style:none]
                     [&::-webkit-scrollbar]:hidden"
            >
                {products.map((p, i) => (
                    <ProductCard key={i} product={p} onImageClick={onImageClick} setShowModal={setShowModal} />
                ))}
            </section>

            <ScrollButton
                direction={ScrollDirection.right}
                onClick={scrollRight}
                disabled={isAtEnd}
            />
        </div>
    );
}

export default Carousel;
