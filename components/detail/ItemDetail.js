import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCart } from "../../features/cartSlice";
import Image from 'next/image'

export const ItemDetail = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.quantity = quantity;
    data.info = props;
    console.log("action", data)
    const action = addCart(data);
    dispatch(action);
  };
  return (
    <div className="top-area">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="product-images">
            <main id="gallery">
              <div className="main-img">
               <Image src={props.src} id="current" alt="#" height={4500} width={5000} />
              </div>
              <div className="images">
              {/*
              <img
                  src="/assets/images/product-details/01.jpg"
                  className="img"
                  alt="#"
                />
               <img
                  src="/assets/images/product-details/02.jpg"
                  className="img"
                  alt="#"
                />
               <img
                  src="/assets/images/product-details/03.jpg"
                  className="img"
                  alt="#"
                />
               <img
                  src="/assets/images/product-details/04.jpg"
                  className="img"
                  alt="#"
                />
               <img
                  src="/assets/images/product-details/05.jpg"
                  className="img"
                  alt="#"
                />
              */}
              </div>
            </main>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="product-info">
              <h2 className="title">{props.title}</h2>
              <p className="category">
                <i className="lni lni-tag" /> {props.categories}
              </p>
              <h3 className="price">
                {props.price}.000 vnđ<span>{""}</span>
              </h3>
              <p className="info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="form-group color-option">
                    <label className="title-label" htmlFor="size">
                      Màu sắc
                    </label>
                    <div className="single-checkbox checkbox-style-1">
                      <input
                        type="radio"
                        id="checkbox-1"
                        {...register("color", { required: true })}
                        value="Đen"
                      />
                      <label htmlFor="checkbox-1">
                        <span />
                      </label>
                    </div>
                    <div className="single-checkbox checkbox-style-2">
                      <input
                        type="radio"
                        id="checkbox-2"
                        {...register("color", { required: true })}
                        value="Xanh"
                      />
                      <label htmlFor="checkbox-2">
                        <span />
                      </label>
                    </div>
                    <div className="single-checkbox checkbox-style-3">
                      <input
                        type="radio"
                        id="checkbox-3"
                        {...register("color", { required: true })}
                        value="Đỏ"
                      />
                      <label htmlFor="checkbox-3">
                        <span />
                      </label>
                    </div>
                    <div className="single-checkbox checkbox-style-4">
                      <input
                        type="radio"
                        id="checkbox-4"
                        {...register("color", { required: true })}
                        value="Lá"
                      />
                      <label htmlFor="checkbox-4">
                        <span />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="form-group">
                    <label htmlFor="color">Kích cỡ</label>
                    <select
                      className="form-control"
                      id="color"
                      {...register("size", { required: true })}
                    >
                      <option value="XL">XL</option>
                      <option value="L">L</option>
                      <option value="M">M</option>
                      <option value="S">S</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <div className="row align-items-end">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="quantity buttons_added">
                      <input
                        type="button"
                        defaultValue="-"
                        className="minus"
                        onClick={() => {
                          if (quantity <= 1) {
                            setQuantity(1);
                          } else {
                            setQuantity(quantity - 1);
                          }
                        }}
                      />
                      <input
                        type="text"
                        value={quantity}
                        title="Qty"
                        className="input-text qty text"
                        {...register("quantity", { required: true })}
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="plus"
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <div className="row align-items-end">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="button cart-button">
                      <button
                        type="submit"
                        className="btn"
                        style={{ width: "100%" }}
                      >
                        Thêm Vào Giỏ Hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
