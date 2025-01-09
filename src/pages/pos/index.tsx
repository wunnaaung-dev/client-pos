import { useEffect } from "react";
import ProductCard from "../../components/card/ProductCard";
import usePOSHook from "../../hooks/usePOSHook";
import useProductsHook from "../../hooks/useProductsHook";
import { Order } from "../../types/pos";
import { Product } from "../../types/product";
import Cart from "./Cart";
import { SaleType } from "../../types/sale";
import useSaleHook from "../../hooks/useSaleHook";

const POS = () => {
  const { products } = useProductsHook();
  const { handleAddOrder, saleType } = usePOSHook();
  const {handleFetchProducts} = useProductsHook()
  const {handleGenerateVoucherNo} = useSaleHook()

  useEffect(() => {
    handleFetchProducts()
    handleGenerateVoucherNo()
  }, [handleFetchProducts, handleGenerateVoucherNo])

  const handleCardClick = (product: Product) => {
    const newOrder: Order = {
      productCode: product.product_code as string,
      productName: product.name,
      quantity: 1,
      price: saleType === SaleType.RETAIL ? Math.floor(product.retail_price) : Math.floor(product.wholesale_price),
      subtotal: saleType === SaleType.RETAIL ? Math.floor(product.retail_price) : Math.floor(product.wholesale_price),
    }
    handleAddOrder(newOrder);
  }

  return (
    <div className="flex justify-between gap-3 h-screen p-4">
      {/* Fixed Cart Section */}
      <div className="bg-[#F2F9FF] rounded-xl shadow-md w-[40vw] h-[calc(100vh-2rem)]">
        <div className="p-4 h-full">
          <Cart />
          {/* Cart content goes here */}


        </div>
      </div>

      {/* Scrollable Products Section */}
      <div className="bg-[#FBFBFB] rounded-xl shadow-md w-[60vw] h-[calc(100vh-2rem)]">
        <div className="h-full overflow-y-auto p-4">
          <ul className="grid grid-cols-4 gap-2">
            {products.map((product) => (
              <ProductCard
                onClick={() => handleCardClick(product)}
                key={product.name}
                name={product.name}
                price={saleType === SaleType.RETAIL ? Math.floor(product.retail_price) : Math.floor(product.wholesale_price)}
                productCode={product.product_code as string}
              />

            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default POS;