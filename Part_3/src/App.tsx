import { useState } from 'react'
import './App.css'
import { PRODUCTS } from './constants/products';
import {Carousel} from "./components/Carousel";
import {ImageModal} from "./components/ImageModal";
import type {selectedImageTypes} from "./types/selectedImageTypes.ts";

/**
 * The main component of the application
 * Displays a product carousel and a modal window for viewing images
 */
function App() {
    const [selectedImage, setSelectedImage] = useState<selectedImageTypes>({img: "", title: ""});
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <section className=" p-10 text-gray-100">
                <div className="max-w-[1200px] mx-auto overflow-hidden">
                    <Carousel
                        products={PRODUCTS}
                        onImageClick={setSelectedImage}
                        setShowModal={setShowModal}
                    />
                </div>
            </section>
            <ImageModal
                image={selectedImage.img}
                title={selectedImage.title}
                onClose={() => setShowModal(false)}
                showModal={showModal}
            />
        </>
    );
}

export default App
