import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/Auth/AuthLayout";
import AuthTitle from "../../components/Auth/AuthTitle";
import Button from "../../components/Auth/Button";
import Form from "../../components/Auth/Form";
import Wrapper from "../../common/Wrapper";
import { postLogin } from "../../services/axios";

export default function SignIn() {
	const navigate = useNavigate();
	const [signInData, setSignInData] = useState({});
	const token = localStorage.getItem("token");

	if (token) {
		return <Navigate to="/" />;
	}

	function handleInput(e) {
		setSignInData({
			...signInData,
			[e.target.name]: e.target.value,
		});
	}

	async function sendForm(e) {
		e.preventDefault();
		try {
			const token = await postLogin(signInData);
			localStorage.setItem("token", token);
			navigate("/");
		} catch (error) {
			console.log(error);
			alert("Não foi possível realizar o login. Verifique os campos!");
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
