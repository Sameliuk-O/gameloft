import type {IProduct} from "../../types/productTypes.ts";
import type {selectedImageTypes} from "../../types/selectedImageTypes.ts";

export interface IProductCard {
    product: IProduct
    onImageClick: (val: selectedImageTypes) => void
    setShowModal: (val: boolean) => void;
}
