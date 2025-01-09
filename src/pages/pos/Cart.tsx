import { Button } from "../../components";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import usePOSHook from "../../hooks/usePOSHook";
import { RotateCcw, Banknote } from "lucide-react";
import Voucher from "./Voucher";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import OrderItem from "./OrderItem";

const columnHeaders: string[] = ["Product", "Qty", "Price", "Subtotal", "Remove"];

const Cart = () => {
  const { orders, totalQty, subTotal, grandTotal, handleClearCart } = usePOSHook();

  return (
    <div className="p-2 rounded shadow-md h-full relative bg-white">
      {/* Cart Table */}
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-gray-100">
              {columnHeaders.map((header) => (
                <TableCell
                  className="py-3 text-sm font-semibold text-gray-600 last:text-right "
                  key={header}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columnHeaders.length}
                  className="text-center text-gray-500"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold">No Items Found</span>
                    <p className="text-sm text-gray-400">
                      Add products to the cart to see them here.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              orders?.map((order, index) => (
                <OrderItem key={order.productCode} orderItem={order} index={index} />
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Totals Section */}
      <div className="text-right space-y-4 text-gray-700 absolute bottom-6 right-4 border-t border-gray-300 pt-4">
        <div>
          <p className="font-medium">
            <span className="font-semibold">Total Qty:</span> {totalQty}
          </p>
          <p className="font-medium">
            <span className="font-semibold">Subtotal:</span>{" "}
            {subTotal.toLocaleString()}
          </p>
          <p className="font-medium">
            <span className="font-semibold">Grand Total:</span>{" "}
            {grandTotal.toLocaleString()}
          </p>
        </div>
        <div className="flex gap-2">
          {/* Reset Button */}
          <Button
            disabled={orders?.length === 0}
            onClick={handleClearCart}
            className="px-10"
            variant="destructive"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>

          {/* Pay Now Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                disabled={orders?.length === 0}
                className="px-10 bg-emerald-500 hover:bg-emerald-600"
              >
                Pay Now
                <Banknote className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="min-w-[800px] [&>button.absolute.right-4.top-4]:hidden">
              <Voucher />
              <Button
                onClick={() => window.print()}
                className="print:hidden mt-4"
              >
                Print Voucher
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Cart;
