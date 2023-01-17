import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

export default function GitHubButton() {
	return (
		<StyledGitHubButton>
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
