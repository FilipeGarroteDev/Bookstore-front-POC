import styled from "styled-components";
import { AiTwotoneHome, AiFillDollarCircle } from "react-icons/ai";
import {RiLogoutBoxFill} from "react-icons/ri"
import { useNavigate } from "react-router-dom";

export default function Menu() {
	const navigate = useNavigate();

	function logout(){
		localStorage.clear();
		navigate("/sign-in")
	}

	return (
		<MenuStyle>
			<MenuOption onClick={() => navigate("/")}>
				<AiTwotoneHome />
				<h3>Home</h3>
			</MenuOption>
			<MenuOption onClick={() => navigate("/checkout")}>
				<AiFillDollarCircle />
				<h3>Checkout</h3>
			</MenuOption>
			<MenuOption onClick={logout}>
				<RiLogoutBoxFill />
				<h3>Logout</h3>
			</MenuOption>
		</MenuStyle>
	);
}

const MenuStyle = styled.aside`
	height: 100%;
	width: 100px;
	border-right: 1px solid #9e9999;
	background-color: #d3c6c6;
`;

const MenuOption = styled.div`
	height: 100px;
	border-bottom: 0.5px solid #9e9999;
	border-top: 0.5px solid #9e9999;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 6px;
	color: #575555;
	transition: background-color 0.5s;

	svg {
		font-size: 30px;
	}

	&:hover{
		cursor: pointer;
		background-color: #b4acac;
	}
`;
