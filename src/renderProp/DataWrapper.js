import { Component } from "react";

class DataWrapper extends Component {
  state = {
    data: null,
    error: null,
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;

    fetch(this.props.link)
      .then((response) => response.json())
      .then((data) => {
        if (this._isMounted) {
          this.setState({ data, error: false });
        }
      })
      .catch((error) => this.setState({ error: true }));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return this.props.render(this.state);
  }
}

export default DataWrapper;
