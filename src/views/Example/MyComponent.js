import React from "react";

class MyComponent extends React.Component {
  state = {
    key: "Eve",
    value: "24",
  };

  handleOnchangeName = (event) => {
    this.setState({
      key: event.target.value,
    });
  };

  render() {
    let name = "Thai Nguyen";

    return (
      //trả về 1 đống html
      <>
        <div className="name">
          {console.log("name is ", { name })}
          <div>
            Input name
            <input
              value={this.state.key}
              type="text"
              onChange={(event) => this.handleOnchangeName(event)}
            />
          </div>
          Name: {this.state.key}
        </div>
        <div className="year">Years old: {this.state.value}</div>
      </>
    );
  }
}
export default MyComponent;
