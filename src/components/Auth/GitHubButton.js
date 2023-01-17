import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../../services/firebase";
import { postSocialLogin } from "../../services/axios";

export default function GitHubButton() {
	const navigate = useNavigate()

  async function handleGitHubLogin(){
    const provider = new GithubAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
			console.log(result);
      const user = {
        name: result.user.reloadUserInfo.screenName,
        accessToken: result.user.uid,
        email: result.user.email ? result.user.email : `${result.user.reloadUserInfo.screenName}@github.com`
      }

      const token = await postSocialLogin(user);
      localStorage.setItem("token", token)
      localStorage.setItem("name", user.name)
      navigate("/")
    } catch (error) {
			console.log(error)
      alert("Deu ruim, meu bom")
    }
  }

	return (
		<StyledGitHubButton onClick={handleGitHubLogin}>
			<BsGithub />
			<span>Entrar com GitHub</span>
		</StyledGitHubButton>
	);
}

const StyledGitHubButton = styled.div`
	padding-left: 5px;
	width: 100%;
	height: 30px;
	background-color: #2b2b2b;
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
		color: #ffffff;
  }

	&:hover{
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
