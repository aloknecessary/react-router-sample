import React , {Component} from 'react';
import { withRouter } from 'react-router-dom'

class RedirectOnClickSampler extends Component {

    onClick = () =>{
        this.props.history.push('/home');
    }


    render(){
        return(
            <div className='row'>
                <div className="col mb-5">
                    <button className="btn btn-primary" 
                    disabled = {this.props.location.pathname === '/'}
                    title = {this.props.location.pathname === '/' ? 'I am disabled on home page. Click on a route to enable me.' : 'Click me to navigate home'}
                    onClick={this.onClick}>Click here to navigate Home</button>
                </div>
            </div>
        )
    }
}

export default withRouter(RedirectOnClickSampler);