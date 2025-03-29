import Head from "next/head";
import Link from "next/link";
import axios from "axios";


export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
  };
}
const cart = [] ;
export async function getProductsById(id) {
  axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
    cart.push(res.data);
  })
  console.log(cart);
  alert('Товар додано до кошика');

}
export async function getProductsDelete() {
  axios.delete(`https://fakestoreapi.com/products/${id}`).then((res) => {
    cart.pop(res.data);
  })
  console.log(cart);
  alert('Товар видалено з кошика');
}

console.log(getProductsById(1));

export default function Home({ products }) {

    
  
  return (
    <>
      <Head>
        <title>FakeStore | Головна</title>
      </Head>
      <div className="container">
        he
        <h1>🛍️ Список товарів</h1>
        <div className="grid">
          {products.map((product) => (
            <div >
         <div className="card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <Link href={`/product/${product.id}`}>View</Link>
            <button id={product.id} className="cartBtn" onClick={() => getProductsById(product.id)}>Add to cart</button>
            <button id={product.id} onClick={() => getProductsDelete(product.id)}>Remove</button>
</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
