import { signOut } from "firebase/auth"
import { auth } from "../utils/Firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector, useStore } from "react-redux"
import { removeUser } from "../utils/userSlice"

const Header = () => {
	const navigate = useNavigate()
	const user = useSelector((store) => store.user)
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/")
			})
			.catch((error) => {
				// navigate("/error")
				console.log(error.message)
			})
	}
	return (
		<div className='absolute px-8 py-3 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
			<img
				src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460'
				alt='logo'
				className='w-44'
			/>
			{user && (
				<div className='flex p-2 gap-2'>
					<img alt='usericon' src={user?.photoURL} className='w-12 h-12' />
					<button
						className='font-bold text-white cursor-pointer'
						onClick={handleSignOut}
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	)
}

export default Header
