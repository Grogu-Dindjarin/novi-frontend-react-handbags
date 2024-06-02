function Tile({ isPhotoTile, imgSrc, imgAlt, tileTitle, innerText }) {
  return (
    <section>
      {isPhotoTile && <img src={imgSrc} alt={imgAlt} />}
      {!isPhotoTile && <h2>{tileTitle}</h2>}
      {!isPhotoTile && <p>{innerText}</p>}
    </section>
  );
}

export default Tile;
