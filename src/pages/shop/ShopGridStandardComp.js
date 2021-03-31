import PropTypes from "prop-types";
import React from 'react';
import Paginator from 'react-hooks-paginator';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import ShopSidebar from '../../wrappers/product/ShopSidebar';
import ShopTopbar from '../../wrappers/product/ShopTopbar';
import ShopProducts from '../../wrappers/product/ShopProducts';

const ShopGridStandardComp = ({ product }) => {
    return (
        <LayoutOne headerTop="visible">
            {/* breadcrumb */}
            <Breadcrumb />

            <div className="shop-area pt-95 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 order-2 order-lg-1">
                            {/* shop sidebar */}
                            <ShopSidebar product={product} getSortParams={getSortParams} sideSpaceClass="mr-30"/>
                        </div>
                        <div className="col-lg-9 order-1 order-lg-2">
                            {/* shop topbar default */}
                            <ShopTopbar getLayout={getLayout} getFilterSortParams={getFilterSortParams} productCount={product.length} sortedProductCount={currentData.length} />

                            {/* shop page content default */}
                            <ShopProducts layout={layout} product={currentData} />

                            {/* shop product pagination */}
                            <div className="pro-pagination-style text-center mt-30">
                                <Paginator
                                    totalRecords={sortedProducts.length}
                                    pageLimit={pageLimit}
                                    pageNeighbours={2}
                                    setOffset={setOffset}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    pageContainerClass="mb-0 mt-0"
                                    pagePrevText="«"
                                    pageNextText="»"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutOne>
    )
}

ShopGridStandardComp.propTypes = {
  location: PropTypes.object,
  product: PropTypes.array
}

export default ShopGridStandardComp