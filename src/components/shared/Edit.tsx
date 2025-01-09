import { Pencil } from "lucide-react"
import { Button } from "../ui/button"

const Edit = ({ onClick }: { onClick: () => void }) => {
    return (
        <Button className="w-8" variant="ghost" type="button" onClick={onClick}>
                <Pencil className="text-violet-600 cursor-pointer"/>
        </Button>
    )
}

export default Edit