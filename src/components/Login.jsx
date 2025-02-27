import { useState } from "react"
import Header from "./Header"

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true)
	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm)
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
				<form className='p-12 absolute w-3/12 my-[10%] mx-[35%] bg-black right-0 left-0 rounded-lg opacity-75'>
					<h1 className='font-bold text-3xl py-4 text-white'>
						{isSignInForm ? "Sign In" : "Sign Up"}
					</h1>
					<div className='flex flex-col items-center'>
						{!isSignInForm && (
							<input
								type='text'
								name=''
								id=''
								placeholder='Full Name'
								className='p-2 my-2 bg-gray-800 w-full text-gray-300 placeholder:text-gray-300'
							/>
						)}
						<input
							type='text'
							name=''
							id=''
							placeholder='Email Address'
							className='p-2 my-2 bg-gray-800 w-full text-gray-300 placeholder:text-gray-300'
						/>
						<input
							type='password'
							name=''
							id=''
							placeholder='Password'
							className='p-2 my-2 bg-gray-800 w-full text-gray-300 placeholder:text-gray-300'
						/>
						<button className='p-3 my-6 bg-[#E50914] w-full text-white rounded-lg'>
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
