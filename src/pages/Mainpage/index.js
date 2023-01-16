import Wrapper from "../../common/Wrapper";
import MainContainer from "../../common/MainContainer";
import Menu from "../../components/Menu";
import styled from "styled-components";
import Catalog from "./Catalog";

export default function MainPage() {
	return (
		<Wrapper>
			<MainContainer>
				<Menu />
				<ProductsPage>
					<h1>Produtos Disponíveis</h1>
          <Catalog />
				</ProductsPage>
			</MainContainer>
		</Wrapper>
	);
}

const ProductsPage = styled.section`
  width: 92%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  h1{
    color: #575555;
    font-size: 36px;
    font-weight: 700;
  }
`;
