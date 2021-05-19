import React from "react"
import { Avatar } from "@material-ui/core"
import './SidebarRow.scss'

interface Props {
	src?: string,
	Icon?: React.FC,
	title: String,
}

function SidebarRow({ src, Icon, title }: Props): JSX.Element {
	return (
		<div className="sidebar-row">
			{src && <Avatar src={src} />}
			{Icon && <Icon />}
			<h4>{title}</h4>
		</div>
	)
}

export default SidebarRow