import PropTypes from "prop-types";
import React, { useEffect, useState, Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb"
import LayoutOne from "../../layouts/LayoutOne"
import EditPrd from '../../wrappers/product/EditPrd'
import axios from 'axios'

const EditProduct = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
          <title>ZER0 SHOP | Product Edit Page</title>
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>Edit Product</BreadcrumbsItem>
      
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        
        <EditPrd />
        
      </LayoutOne>

    </Fragment>)
};

EditProduct.propTypes = {
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

export default connect(mapStateToProps)(EditProduct);