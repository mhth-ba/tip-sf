import React, { Component } from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({
            hasError: true
        })
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, info)
        console.dir(error)
        console.dir(info)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <div className="alert alert-danger" role="alert">
                        Nastala chyba komponentu. Kontaktuje vývojára.
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary