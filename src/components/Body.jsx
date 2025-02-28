import Login from "./Login"
import Browse from "./Browse"
import { addUser, removeUser } from "../utils/userSlice"
import { createBrowserRouter, useNavigate } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { auth } from "../utils/Firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
const Body = () => {
	const dispatch = useDispatch()
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/browse",
			element: <Browse />,
		},
	])
	useEffect(() => {
		console.log(getAuth().currentUser)
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				)
			} else {
				//user signed out
				dispatch(removeUser())
			}
		})
	}, [])
	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	)
}

export default Body
