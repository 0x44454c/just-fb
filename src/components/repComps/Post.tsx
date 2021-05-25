import { Avatar, IconButton } from '@material-ui/core'
import { ChatBubbleOutline, MoreVertRounded, NearMeRounded, ThumbUpRounded } from '@material-ui/icons'
import React from 'react'
import './Post.scss'

interface Props {
	profilePic?: string,
	image?: string,
	username?: string,
	timestamp?: any,
	message?: string
}

function Post({ profilePic, image, username, timestamp, message }: Props): JSX.Element {
	return (
		<div className="post">
			<div className="post__top">
				<div className="right">
					<Avatar src={profilePic} className="post__avatar" />
					<div className="post__top-info">
						<h3>{username}</h3>
						<p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
					</div>
				</div>
				<div className="left">
					<IconButton>
						<MoreVertRounded />
					</IconButton>
				</div>
			</div>
			<div className="post__bottom">
				<p>{message}</p>
			</div>
			<div className="post__image">
				<img src={image} alt="" />
			</div>
			<div className="post__options">
				<div className="post__option">
					<ThumbUpRounded />
					<p>Like</p>
				</div>
				<div className="post__option">
					<ChatBubbleOutline />
					<p>Comment</p>
				</div>
				<div className="post__option">
					<NearMeRounded />
					<p>Share</p>
				</div>
				{/* <div className="post__option">
					 <AccountCircleRounded /> 
					
				</div> */}
			</div>

		</div>
	)
}

export default Post