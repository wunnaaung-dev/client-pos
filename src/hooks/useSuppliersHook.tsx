import { useDispatch, useSelector } from "react-redux";
import { selectSuppliers } from "../app/state/supplierSlice";

export default function useSuppliersHook() {
    const dispatch = useDispatch();
    const suppliers = useSelector(selectSuppliers)


    return {
        suppliers
    }
}