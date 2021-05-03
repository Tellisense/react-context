import React from 'react'
import ReactModal from 'react-modal';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      showModal: false
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.setState({ error: false });
  }


  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }


  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <ReactModal
          isOpen={this.state.error}
          contentLabel="Minimal Modal Example"
        >
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal >
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}


export default ErrorBoundary
