import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Product from "./Product/Product";
// import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes, unisex.",
    price: "$65",
    image:
      "https://media.istockphoto.com/id/1149654373/photo/creative-minimal-paper-idea-concept-white-shoe-with-white-background-3d-render-3d-illustration.jpg?s=612x612&w=0&k=20&c=Z1sy46GDIY5D7XI-eSvoRRlPmaMjmZpeRvFKNQVQFto=",
  },
  {
    id: 2,
    name: "Shirt",
    description: "Causul white shirt for women.",
    price: "$25",
    image:
      "https://media.istockphoto.com/id/1129386535/photo/businesswoman-studio-portrait-confidence-woman-in-elegant-white-shirt-isolated-on-blue.jpg?s=612x612&w=0&k=20&c=R5GLd2Kuz8Q6D_Fb_kMBFHgsMoeu-CN0sw1zWtdV7kk=",
  },
];

const Products = () => {
  const classes = useStyles();
  console.log(classes);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}> </div>
      <Grid container jusfify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

export default Products;
