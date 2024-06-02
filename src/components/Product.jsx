function Product({ isBestSeller, imgSrc, productName, price }) {
  return (
    <article>
      <span>{isBestSeller ? "Best seller" : "New collection"}</span>
      <img src={imgSrc} alt={`${productName}'s image`} />
      <p>{productName}</p>
      <h4>€{price},-</h4>
    </article>
  );
}

export default Product;
