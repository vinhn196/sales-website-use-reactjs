import React, { useEffect } from "react";
import Header from "./shared/components/layout/Header";
import Menu from "./shared/components/layout/Menu";
import Slider from "./shared/components/layout/Slider";
import { Provider } from "react-redux";
import store from "./redux-setup/store";
import Sidebar from "./shared/components/layout/Sidebar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Footer from "./shared/components/layout/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Success from "./pages/Success";
import { getCategories } from "./services/Api";

const App = () => {
  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    getCategories({}).then(({ data }) => setCategories(data.data.docs));
  }, []);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            {/* End Header */} {/* Body */}
            <div id="body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <nav>
                      <Menu categories={categories} />
                    </nav>
                  </div>
                </div>
                <div className="row">
                  <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                    {/* Slider */}
                    <Slider />
                    {/* End Slider */} {/* Feature Product */}
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/Cart" element={<Cart />} />
                      <Route path="/Category-:id" element={<Category />} />
                      <Route
                        path="/ProductDetails-:id"
                        element={<ProductDetails />}
                      />
                      <Route path="*" element={<NotFound />} />
                      <Route path="/Search" element={<Search />} />
                      <Route path="/Success" element={<Success />} />
                    </Routes>
                    {/* End Latest Product */}
                  </div>
                  <Sidebar />
                </div>
              </div>
            </div>
            <Footer />
            {/* End Body */}
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
};
export default App;
