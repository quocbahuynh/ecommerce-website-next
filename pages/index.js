import { Banner } from "../components/home/Banner";
import { ProductsWapper } from "../components/home/ProductsWapper";
import { ProductPreview } from "../components/products/ProductPreview";
import { server } from "../config";

export default function Home({ data }) {
  return (
    <>
      <Banner />
      <ProductsWapper>
        {data.map((item, index) => (
          <ProductPreview
            title={item.title}
            price={item.price}
            category={item.categories}
            src={item.src}
            slug={item.slug}
            key={index}
          />
        ))}
      </ProductsWapper>
      {/* End Trending Product Area */}
      {/* Start Call Action Area */}
      <section className="call-action section">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 offset-lg-2 col-12">
              <div className="inner">
                <div className="content">
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Currently You are using free
                    <br />
                    Lite version of ShopGrids
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    Please, purchase full version of the template to get all
                    pages,
                    <br /> features and commercial license.
                  </p>
                  <div className="button wow fadeInUp" data-wow-delay=".8s">
                    <a href="javascript:void(0)" className="btn">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Call Action Area */}
      {/* Start Banner Area */}
      <section className="banner section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div
                className="single-banner"
                style={{
                  backgroundImage:
                    'url("/assets/images/banner/banner-1-bg.jpg")',
                }}
              >
                <div className="content">
                  <h2>Smart Watch 2.0</h2>
                  <p>
                    Space Gray Aluminum Case with <br />
                    Black/Volt Real Sport Band{" "}
                  </p>
                  <div className="button">
                    <a href="product-grids.html" className="btn">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div
                className="single-banner custom-responsive-margin"
                style={{
                  backgroundImage:
                    'url("/assets/images/banner/banner-2-bg.jpg")',
                }}
              >
                <div className="content">
                  <h2>Smart Headphone</h2>
                  <p>
                    Lorem ipsum dolor sit amet, <br />
                    eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="button">
                    <a href="product-grids.html" className="btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Area */}
      {/* Start Shipping Info */}
      <section className="shipping-info">
        <div className="container">
          <ul>
            {/* Free Shipping */}
            <li>
              <div className="media-icon">
                <i className="lni lni-delivery" />
              </div>
              <div className="media-body">
                <h5>Free Shipping</h5>
                <span>On order over $99</span>
              </div>
            </li>
            {/* Money Return */}
            <li>
              <div className="media-icon">
                <i className="lni lni-support" />
              </div>
              <div className="media-body">
                <h5>24/7 Support.</h5>
                <span>Live Chat Or Call.</span>
              </div>
            </li>
            {/* Support 24/7 */}
            <li>
              <div className="media-icon">
                <i className="lni lni-credit-cards" />
              </div>
              <div className="media-body">
                <h5>Online Payment.</h5>
                <span>Secure Payment Services.</span>
              </div>
            </li>
            {/* Safe Payment */}
            <li>
              <div className="media-icon">
                <i className="lni lni-reload" />
              </div>
              <div className="media-body">
                <h5>Easy Return.</h5>
                <span>Hassle Free Shopping.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/products/all`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
