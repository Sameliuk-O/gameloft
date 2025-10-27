import type {IProduct} from "../../types/productTypes.ts";
import type {selectedImageTypes} from "../../types/selectedImageTypes.ts";

export interface ICarousel {
    products: IProduct[];
    onImageClick: (value: selectedImageTypes) => void;
    setShowModal: (val: boolean) => void;
}
