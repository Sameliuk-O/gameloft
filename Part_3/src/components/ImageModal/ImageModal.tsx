import type {IImageModal} from "./type.ts";

/**
 * Image viewer modal component
 * @param image - Image URL
 * @param title - image title
 * @param onClose - modal window closing function
 * @param showModal - modal window display state
 */
const ImageModal = ({ image, title, onClose, showModal }: IImageModal) => {
    return (
        <div
            className={`fixed inset-0 bg-black/80 flex items-center justify-center
                 z-[1000] transition-all duration-[400ms] ease-in-out
                 ${showModal ? 'opacity-100 visible' : 'opacity-0 invisible'}`
            }
            onClick={onClose}
        >
            <div
                className={`relative max-w-[90%] transition-transform duration-300 ease-in-out
                    ${showModal ? 'scale-100' : 'scale-90'}`
                }
                onClick={(e) => e.stopPropagation()}
            >
                <span
                    className="absolute -top-[35px] -right-[10px] text-4xl text-white
                         cursor-pointer transition-colors duration-300
                         hover:text-bg-rose-400"
                    onClick={onClose}
                >
                    &times;
                </span>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto rounded-[10px] shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                />
            </div>
        </div>
    );
}

export default ImageModal;
