import './Login.scss'
import logo from './fb_logo.svg'
import { Button } from '@material-ui/core'
import { auth, provider } from '../config/firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

function Login(): JSX.Element {
	const [state, dispatch] = useStateValue()

	const signIn = () => {
		auth.signInWithPopup(provider)
			.then(result => {
				dispatch({
					type: actionTypes.SET_USER,
					payload: result.user,
				})
				console.log(result.user)
			})
			.catch(err => alert(err.message))
	}



	return (
		<div className="login">
			<div className="login__logo">
				<img src={logo} alt="Facebook" />
				<img
					src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
					alt="Facebook" />
			</div>
			<Button
				type="submit"
				onClick={signIn}
			>
				Sign In
			</Button>
		</div>
	)

}

export default Login
