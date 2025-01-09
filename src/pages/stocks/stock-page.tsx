import { useState } from "react";
import { Button } from "../../components";
import StockInTable from "./stock-in-table";
import StockOutTable from "./stock-out-table";

const Stocks = () => {
  const [stockStatus, setStockStatus] = useState<"stock-in" | "stock-out">("stock-in");

  return (
    <div>
      <div className="flex gap-2 mt-3">
        <Button
          type="button"
          onClick={() => setStockStatus("stock-in")}
          className={`${stockStatus === "stock-in" ? "bg-violet-500" : "bg-slate-300"} rounded-full`}
        >
          Stock In
        </Button>
        <Button
          type="button"
          onClick={() => setStockStatus("stock-out")}
          className={`${stockStatus === "stock-out" ? "bg-violet-500" : "bg-slate-300"} rounded-full`}
        >
          Stock Out
        </Button>
      </div>
      <section className="mt-3">
        {stockStatus === "stock-in" && <StockInTable />}
        {stockStatus === "stock-out" && <StockOutTable />}
      </section>
    </div>
  );
};

export default Stocks;
