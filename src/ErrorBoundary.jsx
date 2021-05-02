import React from 'react'


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(`error: `, error)
    console.log(`errorInfo: `, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>Something went wrong.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae itaque est, aut quidem fuga deserunt rem porro aperiam voluptates reiciendis pariatur maiores architecto voluptatem nihil facilis ipsum? Eius, quibusdam laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quia voluptatum qui error consequuntur! Atque ad aspernatur cumque porro animi. Quae aperiam quasi quos pariatur sunt laudantium possimus porro vero?</p>

      )

    }

    return this.props.children;
  }
}

export default ErrorBoundary