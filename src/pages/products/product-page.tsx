import { Button, SearchBar, Toolbar } from "../../components"
import {Plus} from 'lucide-react'
import { useNavigate } from "react-router-dom"
import ProductsTable from "./product-table"
import useProductsHook from "../../hooks/useProductsHook"


const Products = () => {
  const navigate = useNavigate()
  const {handleSearchTerm} = useProductsHook()
  return (
    <>
      <Toolbar>
        <SearchBar onSearch={handleSearchTerm} />
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