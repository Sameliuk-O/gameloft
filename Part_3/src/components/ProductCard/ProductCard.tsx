import type {IProductCard} from "./type.ts";

const ProductCard = ({ product, onImageClick, setShowModal }: IProductCard) => {
    return (
        <article
            className="flex-[0_0_100%] md:flex-[0_0_calc((100%-20px)/2)] lg:flex-[0_0_calc((100%-40px)/3)]
                 bg-gray-800 rounded-lg overflow-hidden snap-start
                 cursor-pointer transition-all duration-300
                 hover:shadow-[0_6px_12px_rgba(255,255,255,0.12)]
                 group"
            onClick={() => {
                onImageClick({img: product.img, title: product.title})
                setShowModal(true)
            }}
        >
            <img
                src={product.img}
                alt={product.title}
                className="w-full max-h-[600px] object-cover object-top transition-transform duration-500
                   group-hover:scale-105"
            />
            <h3 className="p-4 pb-0 text-gray-100 text-xl">
                {product.title}
            </h3>
            <p className="p-4 pt-0.5 text-gray-300 text-sm">
                {product.desc}
            </p>
        </article>
    );
}

export default ProductCard;
