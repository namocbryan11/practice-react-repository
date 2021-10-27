import React, { Component } from 'react';

class ErrorChecker extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            hasError: false
        }
    }

    componentDidCatch(error)
    {
        this.setState({hasError: true});
    }

    render() {
        if(this.state.hasError)
        {
            return (<h1>Oooops. Something went wrong!</h1>);
        }
        else{
            return this.props.children;
        }
    }
}

export default ErrorChecker;