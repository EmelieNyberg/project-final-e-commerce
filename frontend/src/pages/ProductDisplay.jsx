import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useCartStore } from "../stores/CartStore";

const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  position: relative;
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

export const ProductDisplay = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null); // Förvald storlek
  const [quantity, setQuantity] = useState(1); // Antal produkter
  const addToCart = useCartStore((state) => state.addToCart);

  // Hämta produktdata från API
  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  // Lägg till i varukorgen
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      // price: parseFloat(product.price.replace("$", "")),
      size: selectedSize,
      quantity,
      image: product.image,
    });
    setQuantity(1); // Återställ antalet efter tillägg
  };

  // Öka/minska antalet produkter
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Om ingen produkt laddas, visa en loading-indikator
  if (!product) return <p>Loading...</p>;

  return (
    <ProductDetailsWrapper>
      <BackButton to="/products">← Back</BackButton>

      <ImageWrapper>
        <img src={product.image.url} alt={product.title} />
      </ImageWrapper>
      <InfoWrapper>
        <h1>{product.title}</h1>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Price:</strong> {product.price}
        </p>

        <p>
          <strong>Sizes:</strong>
        </p>
        <SizeButtonWrapper>
          {product.size.map((size) => (
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
          <button onClick={handleAddToCart}>ADD TO CART</button>
        </CartWrapper>

        <Divider />
        <p>
          <strong>Description:</strong> {product.description}
        </p>
      </InfoWrapper>
    </ProductDetailsWrapper>
  );
};
