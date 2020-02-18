import React,{ Component } from 'react';
import axios from 'axios'


class View extends Component{
    state = {
        yarn : null
    }

    componentDidMount(){
        let yarnUrl = this.props
        console.log(yarnUrl)
    }
    render(){
        return(
            <div>HAHAHAHHAHAH</div>
        )
    }
}

export default View