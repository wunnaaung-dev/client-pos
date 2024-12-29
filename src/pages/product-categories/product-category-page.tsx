// import { useNavigate } from "react-router-dom"
import { Button, SearchBar, Toolbar } from "../../components"
import { Plus } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog"
import AlertDialog from "../../components/shared/alert_dialog"
import ProductCategoryForm from "./product-category-form"
import { DataTable } from "../../components/data-table/data-table"

import { productCategoryMock, productCategoryColumns } from "../../mockData/productCategoryMock"

const ProductCategories = () => {
  // const navigate = useNavigate()
  return (
    <div>
      <Toolbar>
        <SearchBar onSearch={() => console.log("Searching...")} />
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus />
              Create Product Category
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <AlertDialog
              dialogTitle="Create Product Category"
              onClick={() => {
                console.log("Create button clicked");
              }}
            >
              <ProductCategoryForm />
            </AlertDialog>

          </DialogContent>
        </Dialog>

      </Toolbar>
      <DataTable data={productCategoryMock} columns={productCategoryColumns}/>
    </div>
  )
}

export default ProductCategories