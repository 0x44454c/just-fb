import React from 'react'
import './StoryReel.scss'
import Story from './repComps/Story'

function StoryReel(): JSX.Element {
	return (
		<div className="story-reel">
			<Story
				image="https://www.wallpapertip.com/wmimgs/29-298920_mountain-beautiful-landscape-photography.jpg"
				proSrc="https://i.pinimg.com/236x/6e/28/c6/6e28c6b213f899537fc8f03a72bdaf27.jpg"
				title="First Last"
			/>
			<Story
				image="https://www.wallpapertip.com/wmimgs/29-298920_mountain-beautiful-landscape-photography.jpg"
				proSrc="https://i.pinimg.com/236x/6e/28/c6/6e28c6b213f899537fc8f03a72bdaf27.jpg"
				title="First Last"
			/>
			<Story
				image="https://www.wallpapertip.com/wmimgs/29-298920_mountain-beautiful-landscape-photography.jpg"
				proSrc="https://i.pinimg.com/236x/6e/28/c6/6e28c6b213f899537fc8f03a72bdaf27.jpg"
				title="First Last"
			/>
			<Story
				image="https://www.wallpapertip.com/wmimgs/29-298920_mountain-beautiful-landscape-photography.jpg"
				proSrc="https://i.pinimg.com/236x/6e/28/c6/6e28c6b213f899537fc8f03a72bdaf27.jpg"
				title="First Last"
			/>
		</div>
	)
}

export default StoryReel
