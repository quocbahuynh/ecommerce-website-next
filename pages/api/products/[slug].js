import { products } from "../../../data";

export default function handler({ query: { slug } }, res) {
  if (slug === "all") {
    res.status(200).json(products);
  } else {
    const result = products.filter((item) => item.slug === slug);
    res.status(200).json(result[0]);
  }
}
