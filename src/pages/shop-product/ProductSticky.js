import PropTypes from "prop-types";
import React, { useEffect, useState, Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import ProductStickyComp from './ProductStickyComp'
import axios from 'axios'
import { connect } from "react-redux";

const ProductSticky = ({ location }) => {
  const { pathname } = location;
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    axios({
      url: `http://localhost:8080/products/product-number/` + localStorage.getItem('prdNo'),
      methos: `get`,
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'JWT fefege..'
      },
      data: {}
    })
    .then((res) => {
      setProducts(res.data)
    })
    .catch((err) => {
      console.log(`error !`)
      throw err
    })
  }, [])

  return (<Fragment>
    <MetaTags>
        <title>ZER0 SHOP | Product Page</title>
    </MetaTags>

    <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
    <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>Shop Product</BreadcrumbsItem>
    
    {products.map((product => {
      return (
        <ProductStickyComp product={product} key={product.prdNo} />
      )}))
    }

  </Fragment>)
};

ProductSticky.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.id;
  return {
    product: state.productData.products.filter(
      single => single.id === itemId
    )[0]
  };
};

export default connect(mapStateToProps)(ProductSticky);