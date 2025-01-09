import { useDispatch, useSelector } from 'react-redux';
import {selectProductCategories, newProductCategory, fetchProductCategories, setSelectedCategory, createProductCategory} from '../app/state/productCategorySlice'
import { AppDispatch } from '../app/state/store';
import { ProductCategoryDTO } from '../types/productCategory';

export default function useProductCategoryHook() {
    const dispatch = useDispatch<AppDispatch>();
    const productCategories = useSelector(selectProductCategories);
    const newCategory = useSelector(newProductCategory);

    const handleFetchProductCategories = async () => {
        await dispatch(fetchProductCategories());
    };

    const handleAddProductCategory = async () => {
        if (newCategory) {
            await dispatch(createProductCategory(newCategory));
            await handleFetchProductCategories();
        } else {
            console.error("New category is not defined.");
        }
    };

    const handlePrepareNewProductCategory = (newProductCategory: ProductCategoryDTO | null) => {
        dispatch(setSelectedCategory(newProductCategory));
    };

    return {
        productCategories,
        newCategory,
        handleFetchProductCategories,
        handlePrepareNewProductCategory,
        handleAddProductCategory,
    };
}
