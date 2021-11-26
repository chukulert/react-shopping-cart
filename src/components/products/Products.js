import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

import classes from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(data);
      const productArray = [];
      data.forEach((product) => {
        productArray.push({
          id: product.id,
          title: product.title,
          category: product.cateogory,
          description: product.description,
          price: product.price,
          image: product.image,
          rating: product.rating.rate,
        });
      });
      setProducts(productArray);
      setIsLoading(false);
    };
    fetchProducts().catch((error) => {
      setIsLoading(false);
      console.log(error.message);
    });
  }, []);

  const productItems = products.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      title={product.title}
      category={product.category}
      description={product.description}
      price={product.price}
      image={product.image}
      rating={product.rating}
    />
  ));

  return (
    <div className={classes.productContainer}>
      <div className={classes.productGrid}>{productItems}</div>
    </div>
  );
};

export default Products;
