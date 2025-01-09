import { useDispatch, useSelector } from "react-redux";
import {
    setProducts, 
    selectProducts, 
    selectSelectedProduct,
    setSelectedProduct,
    fetchProducts,
    createNewProduct,
    updateProduct,
    selectProductSearchTerm,
    setSearchTerm
} from "../app/state/productSlice";
import { Product, ProductDTO } from "../types/product";
import { AppDispatch } from "../app/state/store";

export default function useProductsHook() {
    const dispatch = useDispatch<AppDispatch>();
    const allProducts = useSelector(selectProducts);
    const searchTerm = useSelector(selectProductSearchTerm)
    const selectedProduct = useSelector(selectSelectedProduct)


    let products = [...allProducts];
    if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        products = products.filter(product => 
            product.name.toLowerCase().includes(searchLower)
        );
    }

    function handleSearchTerm(searchTerm: string) {
        dispatch(setSearchTerm(searchTerm))
    }

    function handleAddProduct(newProduct: ProductDTO) {
        dispatch(createNewProduct(newProduct));
    }

    async function handleFetchProducts() {
        dispatch(fetchProducts())
    }

    function handleSetProducts(newProducts: Product[]) {
        dispatch(setProducts(newProducts));
    }

    function handleUpdateProduct(id: string, product: ProductDTO ) {
        dispatch(updateProduct({id: id, productDTO: product}));  
    }

    function handleSetProduct(selectedProduct: Product) {
        dispatch(setSelectedProduct(selectedProduct))
    }

    // function handleDeleteProduct(productId: string) {
    //     dispatch(deleteProduct(productId));
    // }

    return {
        products,
        selectedProduct,
        handleAddProduct,
        handleSetProducts,
        handleSetProduct,
        handleFetchProducts,
        handleUpdateProduct,
        handleSearchTerm
    };
}
