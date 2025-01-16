// AddToCartButton.jsx
import { useCartStore } from "../stores/CartStore";

export const AddToCartButton = () => {
    const addCartItem = useCartStore((state) => state.addCartItem);

    return <button onClick={addCartItem}>Add to Cart</button>;
};
