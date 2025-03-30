import Head from "next/head";


export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return { props: { product } };
}



export default function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>{product.title} | FakeStore</title>
      </Head>
      <div className="container">
        <div className="product-container">
          <img src={product.image} alt={product.title} className="product-page-image" />
          <div className="product-details">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <button className=" w-full bg-[#00ff26] text-background font-medium text-xl rounded-md cursor-pointer">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
