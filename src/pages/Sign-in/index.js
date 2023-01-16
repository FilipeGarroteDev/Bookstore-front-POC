import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/Auth/AuthLayout";
import AuthTitle from "../../components/Auth/AuthTitle";
import Button from "../../components/Auth/Button";
import Form from "../../components/Auth/Form";
import Wrapper from "../../components/Auth/Wrapper";

export default function SignIn() {
	const navigate = useNavigate();
	const [signInData, setSignInData] = useState({});

	function handleInput(e) {
		setSignInData({
			...signInData,
			[e.target.name]: e.target.value,
		});
	}

	async function sendForm(e) {
		e.preventDefault();
		try {
			const token = await postSignUp(signUpData);
			localStorage.setItem("token", token);
			navigate("/");
		} catch (error) {
			console.log(error);
			alert("Não foi possível realizar o login!");
		}
	}

	return (
		<Wrapper>
			<AuthLayout>
				<AuthTitle>Login :)</AuthTitle>
				<Form onSubmit={sendForm}>
					<input
						name="email"
						type="email"
						placeholder="E-mail"
						onChange={handleInput}
					/>
					<input
						name="password"
						type="password"
						placeholder="Senha"
						onChange={handleInput}
					/>
					<Button>Entrar</Button>
				</Form>
				<span onClick={() => navigate("/sign-up")}>Efetuar cadastro</span>
			</AuthLayout>
		</Wrapper>
	);
}
