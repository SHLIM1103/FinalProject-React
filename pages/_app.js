import { Fragment } from "react"
import App from "next/app"
import Head from "next/head"
import withReduxStore from "../lib/with-redux-store"
import { Provider } from "react-redux"
import { ToastProvider } from "react-toast-notifications"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import { fetchProducts } from "../redux/actions/productActions"
import products from "../data/products.json"
import "../assets/scss/styles.scss"
import Preloader from "../components/Preloader"

class MyApp extends App {
  constructor(props) {
    super(props)
    this.persistor = persistStore(props.reduxStore)
    props.reduxStore.dispatch(fetchProducts(products))
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Fragment>
        <Head>
          <title># ZER0 SH0P #</title>
          <link rel="icon" href={process.env.PUBLIC_URL + "/favicon.ico"} />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,3000,4000,5000,6000,7001,3001,4001,5001,6001,700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <ToastProvider placement="bottom-left">
          <Provider store={reduxStore}>
            <PersistGate loading={<Preloader />} persistor={this.persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </ToastProvider>
      </Fragment>
    )
  }
}

export default withReduxStore(MyApp)
