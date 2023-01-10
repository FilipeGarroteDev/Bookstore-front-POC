import { useNavigate } from "react-router-dom"
import AuthLayout from "../../components/Auth/AuthLayout"
import AuthTitle from "../../components/Auth/AuthTitle"
import Button from "../../components/Auth/Button"
import Form from "../../components/Auth/Form"
import Wrapper from "../../components/Auth/Wrapper"

export default function SignIn() {
  const navigate = useNavigate()

	return (
    <Wrapper>
      <AuthLayout>
      <AuthTitle>Cadastre-se aqui!</AuthTitle>
      <Form>
        <input placeholder="E-mail"/>
        <input placeholder="Usuário"/>
        <input placeholder="Senha"/>
        <Button>Entrar</Button>
      </Form>
      <span onClick={() => navigate("/sign-in")}>Já tem conta? Login</span>
    </AuthLayout>
    </Wrapper>
  )
}
