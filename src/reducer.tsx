export const initState = {
	user: null
}

export enum actionTypes {
	SET_USER = 'SET_USER',
}

const reducer = (state: Object, action: { type: string, payload: any }) => {
	// console.log(action)
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.payload
			}
		default:
			return state
	}
}

export default reducer