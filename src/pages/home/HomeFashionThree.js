import React, { Fragment } from 'react'
import MetaTags from "react-meta-tags"
import LayoutOne from "../../layouts/LayoutOne"
import FeatureIconTwo from "../../wrappers/feature-icon/FeatureIconTwo"
import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen"
import CategoryTwoSlider from "../../wrappers/category/CategoryTwoSlider"

const HomeFashionThree = () => {
  return (<>
    <Fragment>
      <MetaTags>
        <title>ZER0 SHOP | Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderTen />
        {/* category */}
        <CategoryTwoSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />
        {/* feature icon */}
        <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" />
      </LayoutOne>
    </Fragment>
    </>
  )
}

export default HomeFashionThree
