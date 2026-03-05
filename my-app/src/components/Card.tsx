/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Input,
	Box,
	Center
  } from "@chakra-ui/react"
import { login } from "../services/login"
import { useState, useEffect } from "react"
import { DButton } from "./DButton"
import { api } from "../api"

interface UserData {
	email: string,
	password: string,
	name: string
}

export const Card = () => {
	const [ email, setEmail ] = useState<string>(" ")
	const [ userData, setUserData ] = useState<null | UserData>()

	useEffect(() => {
		const getData = async () => {
			const data: any | UserData = await api
			setUserData(data)
		}

		getData()
	}, [])

	console.log(userData)

	return (
		<Box as="section" maxW="lg" mx="auto" mt="20">
			{
			userData === null || userData === undefined ?
			<h1>Loading...</h1> :
			<h1>Informações carregadas</h1>
			}
			<Center>
				<h1>Faça o login</h1>
			</Center>
			<Input placeholder="Email" type="email" value={ email } onChange={(event) => setEmail(event.target.value) } />
			<Input placeholder="Senha" type="password" />
			<Center>
				<DButton onClick={() => login(email)}>Entrar</DButton>
			</Center>
		</Box>
	)
}