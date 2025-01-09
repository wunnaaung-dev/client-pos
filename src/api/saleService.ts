import { api } from "."

export type VoucherRes = {
    data: {
        voucher_number: string
    }
}

export const saleService = {
    generateVoucher: async() => {
        try {
            const response = await api.get<VoucherRes>("/next-voucher-number")
            return response.data.data.voucher_number
        } catch (error) {
            console.log("error in voucher generate", error)
        }
    }
}