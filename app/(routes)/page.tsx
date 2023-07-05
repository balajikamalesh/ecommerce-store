import React from "react";
import Container from "../components/ui/Container";
import Billboard from "../components/Billboard";
import getBillboard from "../../actions/getBillboard";
import getProducts from "../../actions/getProducts";
import ProductList from "../components/ProductList";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("50f65091-37e6-4a23-b28e-5ab1e2652cf3");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
