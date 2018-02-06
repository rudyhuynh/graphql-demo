import React from "react";
import { graphql, createFragmentContainer } from "react-relay";
import styled from "styled-components";
import * as changeCartProductQuantity from "./mutations/ChangeCartProductQuantity";
import { withRouter } from "react-router-dom";

class Step1Cart extends React.Component {
  onChangeQuantity = (id, quantity) => {
    changeCartProductQuantity.commit(
      this.props.relay.environment,
      this.props.userName,
      id,
      quantity
    );
  };

  render() {
    const { cart } = this.props;
    const { products } = cart;
    return (
      <div>
        <button
          onClick={() => this.props.history.push("/order/2")}
          className="btn btn-primary"
        >
          Next
        </button>
        <h3 style={{ marginTop: 10 }}>Your cart:</h3>
        <ul className="list-group">
          {products.map(product => {
            const { id, name, price, remain, quantity } = product;
            return (
              <li className="list-group-item" key={id}>
                <div style={s.cartItems}>
                  <div style={{ flex: 1 }}>
                    <h5>{name}</h5>
                    <div style={{ fontStyle: "italic", fontSize: "0.8em" }}>
                      Remain {remain} item(s)
                    </div>
                    {/* <div>Seller: {item.seller}</div> */}
                  </div>
                  <div style={{ width: 130 }}>
                    <div>{price.toLocaleString("vn")} đ</div>
                  </div>
                  <div style={{ width: 100 }}>
                    <div>
                      <ul className="pagination">
                        <li className="page-item">
                          <ButtonA
                            className="page-link"
                            onClick={() =>
                              quantity > 0 &&
                              this.onChangeQuantity(id, quantity - 1)
                            }
                          >
                            -
                          </ButtonA>
                        </li>
                        <li className="page-item">
                          <NormalA className="page-link">{quantity}</NormalA>
                        </li>
                        <li className="page-item">
                          <ButtonA
                            className="page-link"
                            onClick={() =>
                              quantity < remain &&
                              this.onChangeQuantity(id, quantity + 1)
                            }
                          >
                            +
                          </ButtonA>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default createFragmentContainer(
  withRouter(Step1Cart),
  graphql`
    #ComponentFileName_propName
    fragment Step1Cart_cart on Cart {
      products {
        id
        name
        remain
        price
        quantity
      }
    }
  `
);

const s = {
  cartItems: {
    display: "flex",
    flexDirection: "row"
  }
};

const NormalA = styled.a`
  &:hover {
    cursor: default !important;
    background-color: white !important;
  }
`;

const ButtonA = styled.a`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
`;
