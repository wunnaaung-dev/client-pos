import { useDispatch, useSelector } from "react-redux";
import { 
    addProduct, 
    setProducts, 
    updateProduct, 
    deleteProduct, 
    selectProducts, 
    selectSelectedProduct,
    setSelectedProduct
} from "../app/state/productSlice";
import { Product, ProductDTO } from "../types/product";

export default function useProductsHook() {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const selectedProduct = useSelector(selectSelectedProduct)

    function handleAddProduct(newProduct: ProductDTO) {
        dispatch(addProduct(newProduct));
    }

    function handleSetProducts(newProducts: Product[]) {
        dispatch(setProducts(newProducts));
    }

    function handleEditProduct(updatedProduct: Product) {
        dispatch(updateProduct(updatedProduct));  
    }

    function handleSetProduct(selectedProduct: Product) {
        dispatch(setSelectedProduct(selectedProduct))
    }

    function handleDeleteProduct(productId: string) {
        dispatch(deleteProduct(productId));
    }

    return {
        products,
        selectedProduct,
        handleAddProduct,
        handleSetProducts,
        handleEditProduct,
        handleDeleteProduct,
        handleSetProduct
    };
}
