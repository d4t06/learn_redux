import { useSelector } from "react-redux"
import { selectAllUser } from "../User/usersSlice"

const PostAuth = ({userId}) => {
    const users = useSelector(selectAllUser)

    // console.log("userId = ", userId)

    const author = users.find(user => user.id === +userId)

    // console.log(users)

    return <span>by {author ? author?.name : "Unknown Author"}</span>

}
export default PostAuth