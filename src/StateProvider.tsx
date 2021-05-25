import React, { createContext, useContext, useReducer } from "react";

interface Props {
	reducer: any,
	initState: any,
	children: JSX.Element
}

export const StateContext = createContext<any>("")

export function StateProvider({ reducer, initState, children }: Props): JSX.Element {
	return (<StateContext.Provider value={useReducer(reducer, initState)}>
		{children}
	</StateContext.Provider>)
}
export const useStateValue = () => useContext(StateContext)