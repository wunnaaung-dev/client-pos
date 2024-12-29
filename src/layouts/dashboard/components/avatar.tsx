import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";

const UserAvatar = () => {
    return (
        <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export default UserAvatar;