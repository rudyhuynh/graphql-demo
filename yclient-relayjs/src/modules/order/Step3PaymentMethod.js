import React from "react";
import { graphql, createFragmentContainer } from "react-relay";
import { withRouter } from "react-router-dom";
import SummaryDiliveryInfo from "./SummaryDiliveryInfo";
import SummaryCart from "./SummaryCart";
import * as SubmitCart from "./mutations/SubmitCart";
import Check from "react-icons/lib/md/check";

class Step3PaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethodId: props.cart.paymentMethodId
    };
  }
  onChangePaymentMethodId = e => {
    this.setState({
      paymentMethodId: e.target.value
    });
  };
  onClickPurchase = () => {
    this.setState({ status: "submitting" });
    SubmitCart.commit({
      environment: this.props.relay.environment,
      userName: this.props.diliveryInfo.userName,
      paymentMethodId: this.state.paymentMethodId,
      cartId: this.props.cart.id,
      onCompleted: () => {
        this.setState({ status: "submitted" });
      }
    });
  };
  render() {
    const { cart, diliveryInfo, query } = this.props;
    const { paymentMethods } = query;
    const { status, paymentMethodId } = this.state;
    return (
      <div className="row">
        <div className="col-md-7">
          <div>
            Payment method <span style={{ color: "red" }}>*</span>:
          </div>
          <ul style={s.ul}>
            {paymentMethods.map(paymentMethod => {
              const { id, name } = paymentMethod;
              return (
                <li key={id}>
                  <label>
                    <input
                      onChange={this.onChangePaymentMethodId}
                      type="radio"
                      checked={id === paymentMethodId}
                      value={id}
                    />{" "}
                    {name}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-5">
          <hr />
          <SummaryDiliveryInfo {...diliveryInfo} />

          <SummaryCart products={cart.products} />
        </div>
        <div className="col-md-12">
          {status === "submitted" ? (
            <span>
              <Check /> Submitted
            </span>
          ) : (
            <button
              disabled={status === "submitting" || !paymentMethodId}
              type="button"
              className="btn btn-primary"
              onClick={this.onClickPurchase}
            >
              Purchase{status === "submitting" ? "..." : null}
            </button>
          )}
        </div>
      </div>
    );
  }
}
export default createFragmentContainer(
  withRouter(Step3PaymentMethod),
  graphql`
    fragment Step3PaymentMethod_query on Query {
      paymentMethods {
        id
        name
      }
    }

    fragment Step3PaymentMethod_diliveryInfo on User {
      userName
      fullName
      address
      phone
    }

    fragment Step3PaymentMethod_cart on Cart {
      id
      products {
        id
        name
        quantity
        price
      }
      paymentMethodId
    }
  `
);

const s = {
  ul: {
    listStyleType: "none",
    paddingLeft: 0
  }
};
