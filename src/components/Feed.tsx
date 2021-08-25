import React, { useEffect, useState } from 'react'
import './Feed.scss'
import MessageSender from './MessageSender'
import Post from './repComps/Post'
import StoryReel from './StoryReel'
import db from '../config/firebase'

function Feed(): JSX.Element {
	const [posts, setPosts] = useState<Array<any>>([])
	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot(snapshot => {
				setPosts(snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data()
				})))
			})
	}, [])

	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />

			{/* <Post
				profilePic="https://i.pinimg.com/236x/6e/28/c6/6e28c6b213f899537fc8f03a72bdaf27.jpg"
				image="https://wallpaperaccess.com/full/508751.jpg"
				username="Bill Joans"
				message="Hello"
			/> */}

			{posts.map(post => (
				<Post
					key={post.id}
					id={post.id}
					profilePic={post.data.profilePic}
					image={post.data.image}
					username={post.data.username}
					message={post.data.message}
					timestamp={post.data.timestamp}
					uid={post.data.uid}
				/>
			))}
		</div>
	)
}

export default Feed
