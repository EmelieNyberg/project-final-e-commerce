import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useCartStore } from "../stores/CartStore";

// Wrapper för hela produktinformationen
const ProductDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 5px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; /* Två kolumner för större skärmar */
    align-items: start;
  }
`;

const BackButton = styled(Link)`
  background-color: #c79ced; // Lila bakgrund
  color: white;               // Vit text
  padding: 12px 24px;         // Padding för att göra knappen större
  border: none;               // Ingen kant
  border-radius: 30px;        // Rundade hörn
  font-size: 16px;            // Textstorlek
  font-weight: bold;          // Fetstil
  display: flex;              // Flexbox för att placera text och ikon
  align-items: center;        // Centrerar texten och ikonen vertikalt
  justify-content: center;    // Centrerar innehållet horisontellt
  cursor: pointer;            // Markera knappen som klickbar
  transition: background-color 0.3s ease; // Animerad övergång för bakgrundsfärg
  position: absolute;
  top: 100px;
  left: 400px;
  text-decoration: none; 

  &:hover {
    background-color: #ff7bbc; // En något mörkare lila vid hover
  }

  @media (max-width: 768px) {
    top: 100px; /* Justerar för mobiler */
    left: 50px; /* Justerar avstånd för mobil */
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    padding-top: 50px;
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      max-width: 80%;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    font-size: 16px;
  }
`;

// Wrapper för storleksknappar
const SizeButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Stil för varje storleksknapp
const SizeButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid ${(props) => (props.selected ? "#c79ced" : "#ddd")};
  border-radius: 30px;
  background-color: ${(props) => (props.selected ? "#c79ced" : "white")};
  color: ${(props) => (props.selected ? "white" : "#000")};
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? "#b17cd8" : "#f0f0f0")};
  }
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  button {
    background-color: #c79ced;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff7bbc;
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

const Dropdown = styled.div`
  margin-top: 10px;
  /* border: 1px solid #ddd; */
  overflow: hidden;

  button {
    background-color: #c79ced;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff7bbc
    }
  }

  .content {
    padding: 10px;
    background-color: white;
    border-top: 1px solid #ddd;
    display: ${(props) => (props.open ? "block" : "none")};
  }
`;

export const ProductDisplay = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null); // Förvald storlek
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [quantity, setQuantity] = useState(1); // Antal produkter
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      size: selectedSize,
      quantity,
      image: product.image,
    });
    setQuantity(1); // Återställ antalet efter tillägg
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) return <p>Loading...</p>;

  return (
    <ProductDetailsWrapper>
      <BackButton to="/products">←</BackButton>

      <ImageWrapper>
        <img src={product.image.url} alt={product.title} />
      </ImageWrapper>
      <InfoWrapper>
        <h1>{product.title}</h1>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>

        <p>
          <strong>Sizes:</strong>
        </p>
        <SizeButtonWrapper>
          {product.size?.map((size) => (
            <SizeButton
              key={size}
              selected={selectedSize === size}
              onClick={() => setSelectedSize((prev) => (prev === size ? null : size))}
            >
              {size}
            </SizeButton>
          ))}
        </SizeButtonWrapper>

        <CartWrapper>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
          <button onClick={handleAddToCart}>Add to cart</button>
        </CartWrapper>

        <Divider />
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <Dropdown open={isDropdownOpen}>
          <button onClick={() => setIsDropdownOpen((prev) => !prev)}>
            Read more<span>{isDropdownOpen ? "-" : "+"}</span>
          </button>
          <div className="content">
            <p>
              <strong>Wash:</strong> {product.wash || "Not available"}
            </p>
            <p>
              <strong>Material:</strong> {product.material || "Not available"}
            </p>
          </div>
        </Dropdown>
      </InfoWrapper>
    </ProductDetailsWrapper>
  );
};
