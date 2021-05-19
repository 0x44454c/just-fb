import './Sidebar.scss'
import SidebarRow from './repComps/SidebarRow'

import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

interface Props{

}
function Sidebar({}:Props): JSX.Element {
	return (
		<div className="sidebar">
			<SidebarRow src="https://i.pinimg.com/236x/6e/28/c6/6e28c6b213f899537fc8f03a72bdaf27.jpg" title="Name"/>
			<SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
			<SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
			<SidebarRow Icon={PeopleIcon} title="Friends"/>
			<SidebarRow Icon={ChatIcon} title="Messenger"/>
			<SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
			<SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
			<SidebarRow Icon={ExpandMoreIcon} title="Marketplace"/>

		</div>
	)
}

export default Sidebar
