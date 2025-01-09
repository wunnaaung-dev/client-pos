import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/state/store";
import { generateVoucherNo, selectVoucherNo } from "../app/state/saleSlice";

export default function useSaleHook() {
    const dispatch = useDispatch<AppDispatch>()
    const voucherNo = useSelector(selectVoucherNo)

    async function handleGenerateVoucherNo() {
        dispatch(generateVoucherNo())
    }

    return {
        voucherNo,
        handleGenerateVoucherNo
    }
}