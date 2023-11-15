export function ProductsIndex(props) {
  console.log(props);
  return (
    <div id="products-index">
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>{product.price}</h4>
          <img src={product.image_url} alt="product pics" />
          <button type="button" onClick={() => props.onProductShow(product)}>
            View Product
          </button>
        </div>
      ))}
    </div>
  );
}
