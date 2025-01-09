import React from "react";
import { Trash, Plus, Minus } from "lucide-react";
import { Button } from "../../components";
import { Order } from "../../types/pos";
import { Badge } from "../../components/ui/badge";
import usePOSHook from "../../hooks/usePOSHook";
import { TableRow, TableCell } from "../../components/ui/table";

interface OrderItemProps {
    orderItem: Order;
    index: number;
}

const OrderItem: React.FC<OrderItemProps> = ({ orderItem, index }) => {
    const { handleAddQuantity, handleDecreaseQuantity, handleRemoveOrder } =
        usePOSHook();

    return (
        <TableRow
            className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
        >
            {/* Product Name and Code */}
            <TableCell className="text-sm text-gray-800 py-3">
                <div>
                    <h3 className="font-medium">{orderItem.productName}</h3>
                    <Badge variant="default">{orderItem.productCode}</Badge>
                </div>
            </TableCell>

            {/* Quantity Controls */}
            <TableCell className="text-sm text-gray-800">
                <div className="flex items-center gap-2">
                    {/* Decrease Quantity Button */}
                    <Button
                        onClick={() => handleDecreaseQuantity(orderItem.productCode)}
                        className="bg-blue-500 hover:bg-blue-400 w-6 h-6 p-0 flex items-center justify-center rounded-md"
                    >
                        <Minus className="text-white w-3 h-3" />
                    </Button>
                    {/* Quantity Display */}
                    <span className="text-sm">{orderItem.quantity}</span>
                    {/* Increase Quantity Button */}
                    <Button
                        onClick={() => handleAddQuantity(orderItem.productCode)}
                        className="bg-blue-500 hover:bg-blue-400 w-6 h-6 p-0 flex items-center justify-center rounded-md"
                    >
                        <Plus className="text-white w-3 h-3" />
                    </Button>
                </div>
            </TableCell>


            {/* Price */}
            <TableCell className="text-sm text-gray-800">
                Ks {orderItem.price.toLocaleString()}
            </TableCell>

            {/* Subtotal */}
            <TableCell className="text-right text-sm text-gray-800">
                Ks {(orderItem.price * orderItem.quantity).toLocaleString()}
            </TableCell>

            {/* Remove Button */}
            <TableCell className="text-sm text-gray-800 text-right">
                <Button
                    onClick={() => handleRemoveOrder(orderItem.productCode)}
                    variant="ghost"
                    size="icon"
                >
                    <Trash className="h-5 w-5 text-red-500" />
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default OrderItem;
