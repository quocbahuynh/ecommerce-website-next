import Link from "next/link";
import { useDispatch } from "react-redux";
import { removeCart } from "../../features/cartSlice";
import Image from 'next/image'
export const CartSingle = (props) => {
  const dispatch = useDispatch()
  console.log(props.slug);
  const handlerRemove = () => {
    const action = removeCart(props.slug)
    dispatch(action);
  };
  return (
    <li>
      <button
        onClick={handlerRemove}
        className="remove"
        title="Remove this item"
      >
        <i className="lni lni-close" />
      </button>
      <div className="cart-img-head">
        <Link href={`/products/${encodeURIComponent(props.slug)}`}>
          <a className="cart-img">
            <Image src={props.src} alt={props.title} height={40} width={40} layout="responsive" />
          </a>
        </Link>
      </div>
      <div className="content">
        <h4>
          <Link href={`/products/${encodeURIComponent(props.slug)}`}>
            <a>{props.title}</a>
          </Link>
        </h4>
        <p className="quantity">
          Màu: <span className="amount">{props.color}</span>
        </p>
        <p className="quantity">
          {props.quantity}x -{" "}
          <span className="amount">
            {parseFloat(props.price) * Number(props.quantity)}.000 vnđ
          </span>
        </p>
      </div>
    </li>
  );
};
