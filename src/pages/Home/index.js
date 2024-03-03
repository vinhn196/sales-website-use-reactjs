import { useEffect } from "react";
import React from "react";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";

const Home = () => {
  const [featureProduct, setFeatureProduct] = React.useState([]);
  const [lastestProduct, setLastestProduct] = React.useState([]);
  useEffect(() => {
    // Featured
    getProducts({
      params: {
        limit: 6,
        "filter[is_featured]": true,
      },
    }).then(({ data }) => {
      setFeatureProduct(data.data.docs);
    }, []);

    getProducts({
      params: {
        limit: 6,
      },
    }).then(({ data }) => {
      setLastestProduct(data.data.docs);
      // console.log(data.data.docs);
    });
  }, []);
  return (
    <>
      <div className="products">
        <h3>Sản phẩm nổi bật</h3>
        <div className="product-list card-deck">
          {featureProduct.map((value) => (
            <ProductItem item={value} />
          ))}
        </div>
      </div>
      {/* End Feature Product */} {/* Latest Product */}
      <div className="products">
        <h3>Sản phẩm mới</h3>
        <div className="product-list card-deck">
          {lastestProduct.map((value) => (
            <ProductItem item={value} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
