
import React from "react";
 
class ErrorBoundary extends React.Component {
 
  // Constructor for initializing Variables etc in a state
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
 
  componentDidCatch(error, errorInfo) {
 
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
 
  }
 
  render() {
    if (this.state.errorInfo) {
 
      // Error path
      return (
        <div>
          <h2>An Error Has Occured</h2>
          <details>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;