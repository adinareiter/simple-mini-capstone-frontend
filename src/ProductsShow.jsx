export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event);
  };

  return (
    <div>
      <h1>Photo information</h1>
      <p>Name: {props.product.name}</p>
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <p>Image: {props.product.image_url}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
          <div>
            Description: <input defaultValue={props.product.description} name="description" type="text" />
          </div>
          <div>
            Price: <input defaultValue={props.product.price} name="price" type="text" />
          </div>
          <div>
            Image Address: <input defaultValue={props.product.image_url} name="image_url" type="text" />
          </div>
          <button type="submit">Update Product</button>
        </div>
      </form>
    </div>
  );
}
