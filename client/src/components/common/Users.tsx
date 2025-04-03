import { useAppContext } from "@/context/AppContext"
import { RemoteUser } from "@/types/user"
import Avatar from "react-avatar"

function Users() {
    const { users } = useAppContext()

    return (
        <div className="flex min-h-[200px] flex-grow justify-center overflow-y-auto py-2">
            <div className="flex h-full w-full flex-wrap items-start gap-x-2 gap-y-6">
                {users.map((user) => {
                    return <User key={user.socketId} user={user} />
                })}
            </div>
        </div>
    )
}

const User = ({ user }: { user: RemoteUser }) => {
    const { username} = user

    return (
        <div
            className="relative flex w-[100px] flex-col items-center gap-2"
        >
            <Avatar name={username} size="50" round={"12px"} />
            <p className="line-clamp-2 max-w-full text-ellipsis break-words">
                {username}
            </p>
     
        </div>
    )
}

export default Users
