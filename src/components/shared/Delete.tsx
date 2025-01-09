import { Trash2 } from "lucide-react"
import { Button } from "../ui/button"

const Delete = ({ onClick, className }: { onClick?: () => void, className?: string }) => {
    return (
        <Button className={className} variant="ghost" type="button" onClick={onClick}>
                <Trash2 className="text-red-600 cursor-pointer"/>
        </Button>
    )
}

export default Delete