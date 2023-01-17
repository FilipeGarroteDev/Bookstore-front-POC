import styled from "styled-components";
import { TfiGoogle } from "react-icons/tfi";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase";
import { postSocialLogin } from "../../services/axios";
import { useNavigate } from "react-router-dom";

export default function GoogleButton() {
  const navigate = useNavigate()

  async function handleGoogleLogin(){
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = {
        name: result.user.displayName,
        accessToken: result.user.uid,
        email: result.user.email
      }

      const token = await postSocialLogin(user);
      localStorage.setItem("token", token)
      localStorage.setItem("name", user.name)
      navigate("/")
    } catch (error) {
      alert("Deu ruim, meu bom")
    }
  }

	return (
		<StyledGoogleButton onClick={handleGoogleLogin}>
			<TfiGoogle />
			<span>Entrar com Google</span>
		</StyledGoogleButton>
	);
}

const StyledGoogleButton = styled.div`
	padding-left: 5px;
	width: 100%;
	height: 30px;
	background-color: #dd4c39;
	border: none;
	border-radius: 8px;
	display: flex;
	align-items: center;
  justify-content: center;
  position: relative;

	span {
		margin-left: 8px;
		color: #ffffff;
		font-size: 14px;
	}

  svg{
    position: absolute;
    left: 10px;
  }

  &:hover{
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
