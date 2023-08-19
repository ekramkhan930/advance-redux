import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const productData = [
    {
      id: "p1",
      title: "first Product",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: "p2",
      title: "second Product",
      price: 5,
      description: "This is a second product - amazing!",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productData.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
