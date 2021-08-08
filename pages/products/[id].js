import { ItemDetail } from "../../components/detail/ItemDetail";
import { ItemReview } from "../../components/detail/ItemReview";
import { server } from "../../config";
import Head from 'next/head'

export default function ProductSingle({ posts }) {
  return (
    <>
    <Head>
    <title>{posts.title}</title>
    </Head>
      {/* Start Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">{posts.title}</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <li>
                  <a href="index.html">
                    <i className="lni lni-home" /> Home
                  </a>
                </li>
                <li>
                  <a>Products</a>
                </li>
                <li>{posts.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}

      <section className="item-details section">
        <div className="container">
          <ItemDetail title={posts.title} price={posts.price} categories={posts.categories} src={posts.src} slug={posts.slug}/>
          <ItemReview />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${server}/api/products/${params.id}`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${server}/api/products/all`);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.slug },
  }));
  return { paths, fallback: "blocking" };
}
