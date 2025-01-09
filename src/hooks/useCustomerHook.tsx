import { useDispatch, useSelector } from "react-redux";
import { selectCustomers } from "../app/state/customerSlice";

export default function useCustomerHook() {
    const customers = useSelector(selectCustomers)
    const dispatch = useDispatch()


    return {
        customers,
    }
}