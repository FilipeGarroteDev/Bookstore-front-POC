import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/Auth/AuthLayout";
import AuthTitle from "../../components/Auth/AuthTitle";
import Button from "../../components/Auth/Button";
import Form from "../../components/Auth/Form";
import Wrapper from "../../common/Wrapper";
import { postSignUp } from "../../services/axios";

export default function SignIn() {
	const navigate = useNavigate();
	const [signUpData, setSignUpData] = useState({});
	const token = localStorage.getItem("token");

	if (token) {
		return <Navigate to="/" />;
	}

	function handleInput(e) {
		setSignUpData({
			...signUpData,
			[e.target.name]: e.target.value,
		});
	}

	async function sendForm(e) {
		e.preventDefault();
		try {
			await postSignUp(signUpData);
			navigate("/sign-in");
		} catch (error) {
			console.log(error);
			alert("Não foi possível realizar o cadastro. Verifique os campos!");
		}
	}

	return (
		<Wrapper>
			<AuthLayout>
				<AuthTitle>Cadastre-se aqui!</AuthTitle>
				<Form onSubmit={sendForm}>
					<input
						type="email"
						name="email"
						placeholder="E-mail"
						onChange={handleInput}
					/>
					<input
						type="name"
						name="name"
						placeholder="Usuário"
						onChange={handleInput}
					/>
					<input
						type="password"
						name="password"
						placeholder="Senha"
						onChange={handleInput}
					/>
					<Button>Entrar</Button>
				</Form>
				<span onClick={() => navigate("/sign-in")}>Já tem conta? Login</span>
			</AuthLayout>
		</Wrapper>
	);
}
