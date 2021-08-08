export const ProductsWapper = (props) => {
  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Trending Product</h2>
            </div>
          </div>
        </div>
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
};
