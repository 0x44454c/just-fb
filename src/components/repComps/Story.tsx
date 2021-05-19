import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.scss'

interface Props {
	image: string,
	proSrc: string,
	title: string
}
function Story({ image, proSrc, title }: Props): JSX.Element {
	return (
		<div className="story" style={{backgroundImage:`url(${image})`}}>
			<Avatar src={proSrc} alt={title} className="story__avatar" />
			<h4>{title}</h4>
		</div>
	)
}

export default Story
