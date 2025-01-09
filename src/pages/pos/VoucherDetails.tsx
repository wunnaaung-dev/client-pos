import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHeader, TableRow } from "../../components/ui/table"
import usePOSHook from "../../hooks/usePOSHook"

const VoucherDetails = () => {
  const { orders, grandTotal } = usePOSHook()
  return (
    <Table>
        <TableCaption>A list of Voucher Items</TableCaption>
        <TableHeader>
            <TableRow>
                <TableCell className="w-[100px]">စဉ်</TableCell>
                <TableCell>အမျိုးအမည်</TableCell>
                <TableCell>အရေအတွက်</TableCell>
                <TableCell>နှုန်း</TableCell>
                <TableCell className="text-right">သင့်ငွေ</TableCell>
            </TableRow>
        </TableHeader>
        <TableBody>
            {orders?.map((order, index) => (
                <TableRow key={order.productCode}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{order.productName}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>{order.price.toLocaleString()} MMK</TableCell>
                    <TableCell className="text-right">{order.subtotal.toLocaleString()} MMK</TableCell>
                </TableRow>
            ))}
        </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colSpan={4}>စုစုပေါင်း</TableCell>
                <TableCell className="text-right">{grandTotal.toLocaleString()} MMK</TableCell>
            </TableRow>
        </TableFooter>
    </Table>
  )
}

export default VoucherDetails
