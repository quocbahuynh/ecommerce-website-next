import { CartSingle } from "./CartSingle";
import { useSelector } from "react-redux";
import Link from "next/link";

export const CartWapper = () => {
  const cart = useSelector((state) => state.cart);
  let sum = 0;
  cart.map((item) => sum += parseFloat(item.info.price) * Number(item.quantity))
  return (
    <div className="shopping-item">
      <div className="dropdown-cart-header">
        <span>{cart.length} Sản Phẩm</span>
        <a></a>
      </div>
      <ul className="shopping-list">
        {cart.map((item, index) => (
          <CartSingle
            title={item.info.title}
            price={item.info.price}
            src={item.info.src}
            slug={item.info.slug}
            quantity={item.quantity}
            color={item.color}
            key={index}
          />
        ))}
      </ul>
      <div className="bottom">
        <div className="total">
          <span style={{fontFamily: 'Arial'}}>Tổng Tiền</span>
          <span className="total-amount">{sum}.000 vnđ</span>
        </div>
        <div className="button">
          <Link href="/checkout">
            <a className="btn animate">Checkout</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
