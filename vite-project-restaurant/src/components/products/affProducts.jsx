import React from 'react';

const AffProducts = ({ products }) => {
  console.log(products);
  return (
    <div>
      { products && products.length > 0 && 
        products.map((product, ind) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-4 lunch" key={ind}>
            <div className="portfolio-item" style={{"width": "400px", "height": "400px"}}>
              <div className="hover-bg">
                {" "}
               <div className="hover-text">
                    <h4>{product.title}</h4>
                    <h6>{product.price} Dt</h6>
                    <h4>{product.previewDescription}</h4>
                  </div>
                  <img style={{"width": "400px", "height": "400px"}}
                    src={product.image}
                    className="img-responsive"
                    alt={product.image}
                  />{" "}
                {" "}
              </div>
            </div>
          </div>
          );
        })}
    </div>
  );
};

export default AffProducts;
