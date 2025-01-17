import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  position: relative; /* Gör det möjligt att placera tillbaka-knappen relativt */
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  margin-top: 50px;
  img {
    max-width: 100%;
    object-fit: cover;
  }
`;

const InfoWrapper = styled.div`
  flex: 1;
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    margin: 5px 0;
  }
`;

const SizeButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const SizeButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#000" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? "#000" : "#f0f0f0")};
  }
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ff7bbc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #c79ced;
    }
  }

  span {
    font-size: 18px;
    font-weight: bold;
    width: 30px;
    text-align: center;
  }
`;

const Divider = styled.hr`
  margin: 20px 0;
  border: 1px solid #ddd;
`;

const DropdownWrapper = styled.div`
  margin-top: 20px;

  button {
    background: none;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0;

    &:hover {
      color: #555;
    }
  }

  .content {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
`;

export const ProductDisplay = () => {
  const { id } = useParams(); // Hämta produkt-ID från URL
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null); // State för vald storlek
  const [quantity, setQuantity] = useState(1); // State för antal
  const [isMaterialOpen, setIsMaterialOpen] = useState(false); // State för material
  const [isWashOpen, setIsWashOpen] = useState(false); // State för tvättråd
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false); // State för "Mer info"

  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Fel vid hämtning av produkt:", error));
  }, [id]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <ProductDetailsWrapper>
      {/* Tillbaka-knapp */}
      <BackButton to="/products">← Tillbaka</BackButton>

      <ImageWrapper>
        <img src={product.image.url} alt={`Image of ${product.title}`} />
      </ImageWrapper>
      <InfoWrapper>
        <h1>{product.title}</h1>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Price:</strong> {product.price}</p>

        {/* Size-knappar */}
        <p><strong>Sizes:</strong></p>
        <SizeButtonWrapper>
          {product.size.map((size) => (
            <SizeButton
              key={size}
              selected={selectedSize === size}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </SizeButton>
          ))}
        </SizeButtonWrapper>

        {/* Antalsjustering och Lägg till i varukorg-knapp */}
        <CartWrapper>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
          <button>ADD TO CART</button>
        </CartWrapper>

        {/* Beskrivning */}
        <p><strong>Description:</strong> {product.description}</p>

        <Divider />

        {/* Dropdown för Mer info */}
        <DropdownWrapper>
          <button onClick={() => setIsMoreInfoOpen(!isMoreInfoOpen)}>
            {isMoreInfoOpen ? "-" : "+"} Mer info
          </button>
          {isMoreInfoOpen && (
            <div className="content">
              {/* Dropdown för Material */}
              <DropdownWrapper>
                <button onClick={() => setIsMaterialOpen(!isMaterialOpen)}>
                  {isMaterialOpen ? "-" : "+"} Material
                </button>
                {isMaterialOpen && <p>{product.material}</p>}
              </DropdownWrapper>

              {/* Dropdown för Wash */}
              <DropdownWrapper>
                <button onClick={() => setIsWashOpen(!isWashOpen)}>
                  {isWashOpen ? "-" : "+"} Wash
                </button>
                {isWashOpen && <p>{product.wash}</p>}
              </DropdownWrapper>
            </div>
          )}
        </DropdownWrapper>
      </InfoWrapper>
    </ProductDetailsWrapper>
  );
};
