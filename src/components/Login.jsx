import { useRef, useState } from "react"
import { auth } from "../utils/Firebase"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth"
import Header from "./Header"
import { checkValidData } from "../utils/Validate"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const name = useRef(null)
	const email = useRef(null)
	const password = useRef(null)
	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm)
	}
	const handleButtonClick = () => {
		//Validate the form data
		const isValid = checkValidData(email.current.value, password.current.value)
		setErrorMessage(isValid)
		if (isValid) {
			return
		}
		if (!isSignInForm) {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user
					updateProfile(user, {
						displayName: name.current.value,
						photoURL: "https://avatars.githubusercontent.com/u/74921777?v=4",
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							)
							navigate("/browse")
						})
						.catch((error) => {
							setErrorMessage(error.message)
						})
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message
					setErrorMessage(errorCode + ":" + errorMessage)
				})
		} else {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user
					console.log(user)
					navigate("/browse")
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message
					setErrorMessage(errorCode + ":" + errorMessage)
				})
		}
	}
	return (
		<div>
			<Header />
			<div>
				<img
					src='https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg'
					alt='Netflix'
					className='absolute'
				/>
				<form
					onSubmit={(e) => e.preventDefault()}
					className='p-12 absolute w-3/12 my-[10%] mx-[35%] bg-black right-0 left-0 rounded-lg opacity-75'
				>
					<h1 className='font-bold text-3xl py-4 text-white'>
						{isSignInForm ? "Sign In" : "Sign Up"}
					</h1>
					<div className='flex flex-col justify-center'>
						{!isSignInForm && (
							<input
								type='text'
								ref={name}
								id='userName'
								placeholder='Full Name'
								className='p-2 my-2 bg-gray-800 w-full text-gray-300 placeholder:text-gray-300'
							/>
						)}
						<input
							type='email'
							ref={email}
							id='email'
							placeholder='Email Address'
							className='p-2 my-2 bg-gray-800 w-full text-gray-300 placeholder:text-gray-300'
						/>
						<input
							type='password'
							ref={password}
							id='password'
							placeholder='Password'
							className='p-2 my-2 bg-gray-800 w-full text-gray-300 placeholder:text-gray-300'
						/>
						<p className='text-red-500 font-bold text-lg py-2'>
							{errorMessage}
						</p>
						<button
							className='p-3 my-6 bg-[#E50914] w-full text-white rounded-lg'
							onClick={handleButtonClick}
						>
							{isSignInForm ? "Sign In" : "Sign Up"}
						</button>
						<p
							className='py-4 text-white cursor-pointer'
							onClick={toggleSignInForm}
						>
							{isSignInForm
								? "New to Netflix? Sign Up Now"
								: "Already Registered? Sign In Now"}
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
