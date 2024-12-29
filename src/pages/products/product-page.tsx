import { Button, SearchBar, Toolbar } from "../../components"
import {Plus} from 'lucide-react'
import { useNavigate } from "react-router-dom"
import ProductsTable from "./product-table"


const Products = () => {
  const navigate = useNavigate()
  return (
    <>
      <Toolbar>
        <SearchBar onSearch={() => console.log("Searching...")} />
        <Button onClick={() => navigate("/products/create")}>
          <Plus />
          Create Product
        </Button>
      </Toolbar>
      <ProductsTable />
    </>
  )
}

export default Products