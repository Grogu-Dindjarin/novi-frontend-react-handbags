import "./App.css";
import NavBarButton from "./components/NavBarButton.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

function App() {
  const handleButtonClick = (event) => {
    return console.log(event.target.innerText);
  };

  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <NavBarButton
          event={handleButtonClick}
          innerText={"to the collection"}
          isDisabled={false}
        />
        <NavBarButton
          event={handleButtonClick}
          innerText={"shop all bags"}
          isDisabled={false}
        />
        <NavBarButton
          event={handleButtonClick}
          innerText={"pre-orders"}
          isDisabled={true}
        />
      </nav>
      <main>
        <Product
          isBestSeller={true}
          imgSrc={"src/assets/bag_1.png"}
          productName={"The handy bag"}
          price={400}
        />
        <Product
          isBestSeller={true}
          imgSrc={"src/assets/bag_2.png"}
          productName={"The stylish bag"}
          price={250}
        />
        <Product
          isBestSeller={false}
          imgSrc={"src/assets/bag_3.png"}
          productName={"The simple bag"}
          price={300}
        />
        <Product
          isBestSeller={false}
          imgSrc={"src/assets/bag_4.png"}
          productName={"The trendy bag"}
          price={150}
        />
      </main>
      <footer>
        <Tile
          isPhotoTile={false}
          tileTitle={"The Brand"}
          innerText={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid blanditiis, eius enim ex exercitationem, fugiat ipsam iure maiores minus nam obcaecati optio quae quaerat, quod quos sapiente veniam vero."
          }
          imgSrc={null}
          imgAlt={null}
        />
        <Tile
          isPhotoTile={true}
          tileTitle={null}
          imgSrc={"src/assets/brand.png"}
          imgAlt={"brand image"}
          innerText={null}
        />
        <Tile
          isPhotoTile={true}
          tileTitle={null}
          imgSrc={"src/assets/our_story.png"}
          imgAlt={"image of two girlfriends hugging"}
          innerText={null}
        />
        <Tile
          isPhotoTile={false}
          tileTitle={"Our Story"}
          innerText={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid blanditiis, eius enim ex exercitationem, fugiat ipsam iure maiores minus nam obcaecati optio quae quaerat, quod quos sapiente veniam vero."
          }
          imgSrc={null}
          imgAlt={null}
        />
      </footer>
    </>
  );
}

export default App;
