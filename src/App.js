import PropTypes from "prop-types"
import React, { Suspense, lazy } from "react"
import ScrollToTop from "./aaacmm/modules/helpers/scroll-top"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ToastProvider } from "react-toast-notifications"
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic"

// home pages
const MainPage = lazy(() => import("./aaacmm/pages/MainPage"))

// shop pages
const ProductListPage = lazy(() => import("./aaaproduct/pages/ProductListPage"))
const ProductDetailPage = lazy(() => import("./aaaproduct/pages/ProductDetailPage"))
const ProductAddPage = lazy(() => import("./aaaproduct/pages/ProductAddPage"))
const ProductEditPage = lazy(() => import("./aaaproduct/pages/ProductEditPage"))

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"))
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"))
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"))
const BlogDetailsStandard = lazy(() => import("./pages/blog/BlogDetailsStandard")
)

// other pages
const About = lazy(() => import("./pages/other/About"))
const Contact = lazy(() => import("./pages/other/Contact"))
const MyAccount = lazy(() => import("./pages/other/MyAccount"))
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"))

const CartPage = lazy(() => import("./aaaproduct/pages/CartPage"))
const WishlistPage = lazy(() => import("./aaaproduct/pages/WishlistPage"))
const Compare = lazy(() => import("./pages/other/Compare"))
const Checkout = lazy(() => import("./pages/other/Checkout"))

const NotFound = lazy(() => import("./pages/other/NotFound"))


const App = (props) => {
  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={MainPage}
                />
                {/* Homepages */}
                <Route
                  path={process.env.PUBLIC_URL + "/main"}
                  component={MainPage}
                />

                {/* Shop pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product-all"}
                  component={ProductListPage}
                />

                {/* Shop product pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product-detail/:id"}
                  render={(routeProps) => (
                    <ProductDetailPage {...routeProps} key={routeProps.match.params.prdNo} />
                  )}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product-detail/:id"}
                  component={ProductDetailPage}
                />
                 <Route
                  path={process.env.PUBLIC_URL + "/product-add"}
                  component={ProductAddPage}
                />
                 <Route
                  path={process.env.PUBLIC_URL + "/product-edit/:id"}
                  component={ProductEditPage}
                />

                {/* Blog pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/blog-standard"}
                  component={BlogStandard}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
                  component={BlogNoSidebar}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-right-sidebar"}
                  component={BlogRightSidebar}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-details-standard"}
                  component={BlogDetailsStandard}
                />

                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/my-account"}
                  component={MyAccount}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegister}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={CartPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={WishlistPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/compare"}
                  component={Compare}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/checkout"}
                  component={Checkout}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  )
}

App.propTypes = {
  dispatch: PropTypes.func
}

export default App