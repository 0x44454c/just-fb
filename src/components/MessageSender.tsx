import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Send, Videocam } from '@material-ui/icons'
import React, { useState } from 'react'
import db from '../config/firebase'
import firebase from 'firebase'
import { useStateValue } from '../StateProvider'
import './MessageSender.scss'

function MessageSender(): JSX.Element {
	const [{ user }, dispatch] = useStateValue()

	const [inp, setInp] = useState('')
	const [imgUrl, setImgUrl] = useState('')

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		db.collection('posts').add({
			message: inp,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			image: imgUrl,
			username: user.displayName
		})

		setInp("")
		setImgUrl("")
	}

	function properCase(str: string): string {
		return str.split(' ')
			.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
			.join(' ')
	}

	return (
		<div className="message-sender">
			<div className="message-sender__top">
				<Avatar src={user.photoURL} />
				<form >

					<input
						value={inp}
						onChange={(e) => setInp(e.target.value)}
						placeholder={`What's on your mind, ${properCase(user.displayName)}?`}
						className="message-sender__input"
					/>
					<input
						value={imgUrl}
						onChange={(e) => setImgUrl(e.target.value)}
						placeholder="Image Url (Optional)" />
					<button
						type="submit"
						onClick={handleSubmit}
						className="message-sender__post"
					>
						POST <Send fontSize="small" />
					</button>
				</form>
			</div>
			<div className="message-sender__bottom">
				<div className="message-sender__option">
					<Videocam style={{ color: 'red' }} />
					<h3>Live Video</h3>
				</div>
				<div className="message-sender__option">
					<PhotoLibrary style={{ color: 'green' }} />
					<h3>Photo/Video</h3>
				</div>
				<div className="message-sender__option">
					<InsertEmoticon style={{ color: 'orange' }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	)
}

export default MessageSender
