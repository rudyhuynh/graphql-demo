import React from "react";
import Step1Cart from "./Step1Cart";
import Step2Address from "./Step2Address";
import Step3PaymentMethod from "./Step3PaymentMethod";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../../relay/environment";

const userName = "Steve";

export default class OrderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: parseInt(props.match.params.step, 10)
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.step !== nextProps.match.params.step) {
      this.setState({
        step: parseInt(nextProps.match.params.step, 10)
      });
    }
  }
  onClickStep = step => {};
  render() {
    const { step } = this.state;

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query OrderContainerQuery($userName: String!) {
            user(userName: $userName) {
              id
              userName
              ...Step2Address_diliveryInfo
              ...Step3PaymentMethod_diliveryInfo
              cart {
                currentStep
                ...Step1Cart_cart
                ...Step3PaymentMethod_cart
              }
            }
            ...Step3PaymentMethod_query
          }
        `}
        variables={{ userName }}
        render={({ error, props }) => {
          if (error) {
            console.error("QueryRenderer:", error);
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <div>
              <div>User: {props.user.userName}</div>
              <div>
                <A to="/order/1" isActive={step === 1}>
                  Step 1 - Cart
                </A>{" "}
                <A
                  to="/order/2"
                  onClick={() => this.onClickStep(2)}
                  isActive={step === 2}
                >
                  Step 2 - Dilivery Info
                </A>{" "}
                <A
                  to="/order/3"
                  onClick={() => this.onClickStep(3)}
                  isActive={step === 3}
                >
                  Step 3 - Payment method
                </A>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6" style={{ paddingLeft: 30 }}>
                  {this.renderByStep(step, props)}
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
  renderByStep = (step, props) => {
    switch (step) {
      case 1:
        return <Step1Cart userName={userName} cart={props.user.cart} />;
      case 2:
        return <Step2Address diliveryInfo={props.user} />;
      case 3:
        return (
          <Step3PaymentMethod
            query={props}
            diliveryInfo={props.user}
            cart={props.user.cart}
          />
        );
      default:
        return <div>404 - Unknown step</div>;
    }
  };
}

const A = ({ children, isActive, to }) => (
  <Link
    to={to}
    className="btn btn-link"
    style={{
      ...s.a,
      ...(isActive ? s.activeA : {})
    }}
  >
    {children}
  </Link>
);

const s = {
  a: {
    textDecoration: "underline"
  },
  activeA: {
    fontWeight: "bold"
  }
};
