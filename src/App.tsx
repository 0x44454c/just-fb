import './App.scss';
import { useEffect, useState } from 'react';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { useStateValue } from './StateProvider';
import { CircularProgress } from '@material-ui/core';
import { actionTypes } from './reducer';
import { auth } from './config/firebase';

function App() {
	const [{ user }, dispatch] = useStateValue()
	const [pending, setLoading] = useState(true)

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			dispatch({
				type: actionTypes.SET_USER,
				payload: user
			})
			setLoading(false)
		}
		)
	}, [])
	if (pending) {
		return (
			<div className="progress">
				<CircularProgress color="secondary" thickness={4} />
			</div>
		)
	} else {

		return (
			<div className="main">

				{ !user ? (
					<Login />
				) : (
					<>
						<Header />
						<div className="main__body">
							<Sidebar />
							<Feed />
							<Widgets />
						</div>
					</>
				)
				}

			</div>
		)
	}
}

export default App;
