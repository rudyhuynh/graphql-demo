import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { withRouter } from "react-router-dom";
import * as saveDiliveryInfo from "./mutations/SaveDiliveryInfo";

class Step2Address extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.diliveryInfo
    };
  }
  onChangeText = (fieldName, e) => {
    this.setState({
      [fieldName]: e.target.value
    });
  };
  onSaveAndNext = () => {
    const { userName, fullName, address, phone } = this.props;
    saveDiliveryInfo.commit(
      this.props.relay.environment,
      userName,
      fullName,
      address,
      phone
    );
    this.props.history.push("/order/3");
  };
  render() {
    const { fullName, address, phone } = this.state;
    return (
      <div>
        <button onClick={this.onSaveAndNext} className="btn btn-primary">
          Save & Next
        </button>
        <div style={{ height: 15 }} />
        <div className="form-group">
          <label>Full Name</label>
          <input
            className="form-control"
            value={fullName}
            onChange={e => this.onChangeText("fullName", e)}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            className="form-control"
            value={address}
            onChange={e => this.onChangeText("address", e)}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            className="form-control"
            value={phone}
            onChange={e => this.onChangeText("phone", e)}
          />
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(
  withRouter(Step2Address),
  graphql`
    #ComponentFileName_propName
    fragment Step2Address_diliveryInfo on User {
      userName
      fullName
      address
      phone
    }
  `
);
