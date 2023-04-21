import React, { Component } from "react";
// stockData


class Info extends React.Component {

  render() {
    let stockdata = this.props.stockData;
    // let stockdate = `${stockdata.stockDate}/`;
    // let basicprice = `${stockdata.basicPrice}/`; 
    // let floorprice = `${stockdata.floorPrice}/`; 
    // let open = `${stockdata.open}/`; 
    // let high = `${stockdata.high}/`; 
    // let low = `${stockdata.low}/`; 
    // let close = `${stockdata.close}/`;

    return(
      <section>
        <div>
          <h3>{stockdata.basicPrice}</h3>
        </div>
      </section>
    );
  }
}

export default Info; 