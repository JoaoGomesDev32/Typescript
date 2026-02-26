import { Provider } from "@/components/ui/provider"
import {
  Input,
  Button,
  Card,
  Field,
  Stack
} from "@chakra-ui/react"

function App() {
  return (
    <Provider>
      <Card.Root maxW="lg" mx="auto" mt="20">
        <Card.Header>
          <Card.Title color="purple" fontWeight="bold">Faça o login</Card.Title>
        </Card.Header>
        <Card.Body>
          <Stack gap="4" w="full">
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input placeholder="Email" type="email"/>
            </Field.Root>
            <Field.Root>
              <Field.Label>Senha</Field.Label>
              <Input placeholder="Senha" type="password" />
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent="center">
          <Button variant="solid" colorPalette="purple">Entrar</Button>
        </Card.Footer>
      </Card.Root>
    </Provider>
  )
}

export default App
