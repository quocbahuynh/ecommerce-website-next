import Link from "next/link";
import Image from "next/image";

export const ProductPreview = (props) => {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <Link href={`/products/${props.slug}`}>
        <a>
          {/* Start Single Product */}
          <div className="single-product">
            <div
              className="product-image"
              style={{
                position: "relative",
                width: "300px",
                height: "300px",
                maxHeight: "300px",
                maxWidth: "300px",
              }}
            >
              <Image
                src={props.src}
                alt="#"
                layout="fill"
                style={{
                  width: "200px",
                  height: "200px",
                  maxHeight: "200px",
                  maxWidth: "200px",
                }}
              />
              <div className="button">
                <Link href={`/products/${props.slug}`}>
                  <a className="btn">
                    <i className="lni lni-cart" /> Add to Cart
                  </a>
                </Link>
              </div>
            </div>
            <div className="product-info">
              <span className="category">{props.category}</span>
              <h4 className="title">
                <Link href={`/products/${props.slug}`}>
                  <a href="product-grids.html">{props.title}</a>
                </Link>
              </h4>
              <ul className="review">
                <li>
                  <i className="lni lni-star-filled" />
                </li>
                <li>
                  <i className="lni lni-star-filled" />
                </li>
                <li>
                  <i className="lni lni-star-filled" />
                </li>
                <li>
                  <i className="lni lni-star-filled" />
                </li>
                <li>
                  <i className="lni lni-star-filled" />
                </li>
                <li>
                  <span>5.0 Review(s)</span>
                </li>
              </ul>
              <div className="price">
                <span>${props.price}</span>
              </div>
            </div>
          </div>
          {/* End Single Product */}
        </a>
      </Link>
    </div>
  );
};
