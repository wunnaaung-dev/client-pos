import { Label } from '../../components/ui/label'
import { Input } from '../../components'

const ProductCategoryForm = () => {
    return (
        <div className="grid gap-4">
            <div className='space-y-3'>
                <Label htmlFor="name" className="text-right">
                    Name
                </Label>
                <br />
                <Input
                    id="name"
                    defaultValue=""
                    placeholder="Enter Category Name Here..."
                    className="col-span-3"
                />
            </div>
        </div>
    )
}

export default ProductCategoryForm