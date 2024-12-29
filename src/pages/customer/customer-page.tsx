import { Plus } from "lucide-react"
import { Button, SearchBar, Toolbar } from "../../components"
import { DataTable } from "../../components/data-table/data-table"
import { useNavigate } from "react-router-dom"
import { customerMockData, customerTableColumns } from "../../mockData/customerMock"

const Customer = () => {
  const navigate= useNavigate()
  return (
    <div>
      <Toolbar>
        <SearchBar onSearch={() => console.log("Searching...")} />
        <Button onClick={() => navigate("/customer/create")}>
          <Plus />
          Create Customer
        </Button>
      </Toolbar>
      <DataTable data={customerMockData} columns={customerTableColumns}/>
    </div>
  )
}

export default Customer