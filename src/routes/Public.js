import { useContext, useEffect } from 'react'

import UsersContext from '../context/UsersContext'


export default function Public({ component: Component} ) {

	const ctxUser = useContext(UsersContext)

	const {
		authStatus,
		verifyingToken
	} = ctxUser

	useEffect(() => {
		verifyingToken()

	}, [authStatus])


	return (
		<Component />
	)

}