import React, { Component } from "react";

const withData = (Wrapped) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        error: false,
        loading: true,
      };
    }

    componentDidMount() {
      this.setState({
        loading: true,
        error: false,
      });
      this.props
        .getData()
        .then((data) => {
          this.setState({
            data,
            loading: false,
          });
        })
        .catch((err) =>
          this.setState({
            loading: false,
            error: true,
          })
        );
    }

    render() {
      const { data, error, loading } = this.state;

      if (loading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>Something get wrong!!!</div>;
      }

      return <Wrapped {...this.props} data={data} />;
    }
  };
};

export default withData;
