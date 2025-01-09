import { useDispatch, useSelector } from "react-redux";
import { addOrder, removeOrder, selectOrders, selectSubTotal, selectTotalQty, selectGrandTotal, increaseQuantity, decreaseQuantity, clearCart, selectBuyer, setCustomer, changeSaleType, selectSaleType } from "../app/state/posSlice";
import { Order } from "../types/pos";
import { Buyer } from "../types/customer";
import { SaleType } from "../types/sale";

export default function usePOSHook() {
    const dispatch = useDispatch()
    const orders = useSelector(selectOrders)
    const totalQty = useSelector(selectTotalQty)
    const subTotal = useSelector(selectSubTotal)
    const grandTotal = useSelector(selectGrandTotal)
    const buyer = useSelector(selectBuyer)
    const saleType = useSelector(selectSaleType)


    const handleAddOrder = (newOrder: Order) => {
        dispatch(addOrder(newOrder))
    }

    const handleSetBuyer = (buyer: Buyer) => {
        dispatch(setCustomer(buyer))
    }
    

    const handleAddQuantity = (productCode: string) => {
        dispatch(increaseQuantity(productCode))
    }

    const handleDecreaseQuantity = (productCode: string) => {
        dispatch(decreaseQuantity(productCode))
    }

    const handleRemoveOrder = (productCode: string) => {
        dispatch(removeOrder(productCode))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleSaleType = (saleType: SaleType) => {
        dispatch(changeSaleType(saleType))
    }

    return {
        orders,
        buyer,
        totalQty,
        subTotal,
        grandTotal,
        saleType,
        handleAddOrder,
        handleAddQuantity,
        handleDecreaseQuantity,
        handleRemoveOrder,
        handleClearCart,
        handleSetBuyer,
        handleSaleType
    }
}