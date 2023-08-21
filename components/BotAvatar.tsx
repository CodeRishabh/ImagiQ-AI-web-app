import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { AvatarFallback } from "./ui/avatar"

export const BotAvatar = () => {
    return (
        <Avatar className="h-8 w-8 shrink-0 overflow-hidden ">
            <AvatarImage className="h-8 w-8" src="/logo.png"/>
        </Avatar>
    )
}