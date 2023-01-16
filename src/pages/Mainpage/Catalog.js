import styled from "styled-components";
import ProductCard from "./ProductCard";

export default function Catalog() {
	return (
		<CatalogContainer>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
		</CatalogContainer>
	);
}

const CatalogContainer = styled.section`
  margin-top: 20px;
	width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
