import { Plus } from "lucide-react"
import { Button, SearchBar, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Toolbar } from "../../components"
import { DateRangePicker } from "../../components/inputs/DateRangePicker"
import PurchaseTable from "./purchase-table"
import { useNavigate } from "react-router-dom"

const Purchase = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Toolbar>
        <SearchBar onSearch={() => { }} />
        <div className="flex gap-3">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by date..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this week">This Week</SelectItem>
              <SelectItem value="last week">Last Week</SelectItem>
              <SelectItem value="this month">This Month</SelectItem>
              <SelectItem value="this year">This Year</SelectItem>
              <SelectItem value="last year">Last Year</SelectItem>
              <SelectItem value="all time">All Time</SelectItem>
            </SelectContent>
          </Select>
          <DateRangePicker />
          <Button className="" onClick={() => navigate("/purchases/create")}>
            <Plus />
            New Purchase
          </Button>
        </div>
      </Toolbar>
      <section>
        <PurchaseTable />
      </section>
    </div>
  )
}

export default Purchase


//

