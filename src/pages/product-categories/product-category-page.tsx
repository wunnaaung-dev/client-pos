import { Button, SearchBar, Toolbar } from "../../components"
import { Plus } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog"
import AlertDialog from "../../components/shared/alert_dialog"
import ProductCategoryForm from "./product-category-form"
import ProductCategoriesTable from "./product-categories-table"
import { useState } from "react"
import useProductCategoryHook from "../../hooks/useProductCategoryHook"


const ProductCategories = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const {handleAddProductCategory,} = useProductCategoryHook()
  const handleSaveCategory = async () => {
    handleAddProductCategory()
    setIsDialogOpen(false)
  }

  return (
    <div>
      <Toolbar>
        <SearchBar onSearch={() => console.log("Searching...")} />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus />
              Create Product Category
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <AlertDialog
              type="create"
              dialogTitle="Create Product Category"
              onClick={handleSaveCategory}
            >
              <ProductCategoryForm />
            </AlertDialog>
          </DialogContent>
        </Dialog>
      </Toolbar>
      <ProductCategoriesTable />
    </div>
  )
}

export default ProductCategories