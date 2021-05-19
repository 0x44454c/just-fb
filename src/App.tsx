import './App.scss';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="main">
			<Header />
			<div className="main__body">
				<Sidebar />
				<Feed/>
			</div>
		</div>
	);
}

export default App;
