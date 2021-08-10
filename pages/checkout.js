import { useSelector } from "react-redux";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Image from 'next/image'

export default function Checkout() {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  let sum = 0;
  cart.map(
    (item) => (sum += parseFloat(item.info.price) * Number(item.quantity))
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.cart = cart;
    alert(JSON.stringify(data));
    localStorage.removeItem("persist:root");
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className="section container">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Giỏ Hàng</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              {cart.map((item, index) => (
                <li
                  className="list-group-item d-flex justify-content-between lh-condensed"
                  key={index}
                >
                  <Image src={item.info.src} height={50} width={50}/>
                  <div>
                    <h6 className="my-0">{item.info.title}</h6>
                    <small className="text-muted">
                      Số Lượng: {item.quantity}
                    </small>
                  </div>
                  <span className="text-muted">{item.info.price}.000 vnđ</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <p>Tổng Tiền</p>
                <div>
                  <h6 className="my-0"></h6>
                  <small className="text-muted"></small>
                </div>
                <span className="text-muted">{sum}.000 vnđ</span>
              </li>
            </ul>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Thông Tin Giao Hàng</h4>
            <form
              className="needs-validation"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">Họ và Tên</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    {...register("fullname")}
                  />
                  <div className="invalid-feedback">
                    Vui lòng nhập họ và tên
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Số Điện Thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    {...register("phone")}
                  />
                  <div className="invalid-feedback">
                    Vui lòng nhập số điện thoại
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  Địa Chỉ <span className="text-muted">(Optional)</span>
                </label>
                <textarea
                  className="form-control"
                  {...register("address")}
                ></textarea>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <button className="btn btn-primary btn-block" type="submit">
                Đặt Hàng
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
