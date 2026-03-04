import {
	Input,
	Box,
	Center
  } from "@chakra-ui/react"
import { login } from "../services/login"
import { useState } from "react"
import { DButton } from "./DButton"

export const Card = () => {
	const [ email, setEmail ] = useState(" ")

	return (
		<Box as="section" maxW="lg" mx="auto" mt="20">
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