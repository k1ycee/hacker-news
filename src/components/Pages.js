import React, { Component } from 'react';
import axios from 'axios';

class Pages extends Component{
    state = {
        p: [ ]
    }
    componentDidMount(){
        let p = this.props.location.pathname
        axios.get('https://hacker-news.firebaseio.com'+ p + '.json')
        .then(id => {
            var anything = [ ];
            for(var i = 0; i<100; i++){
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${id.data[i]}.json`)
                .then(res => {
                    anything.push(res.data)
                    return this.setState({
                        p: anything 
                    })
                })
            }
        })
    }
    render(){
        const { p } = this.state;
        const news = p.length ? (
            p.map( art => {
                return(
                    <div className="post card" key={art.id}>
                    <div className="card content center">
                        <span className="card-title center">{art.title}</span>
                        <p className="">{art.by}</p>
                    </div>
                </div>
                )
            }
            )
        ) : (
            <div className="container center">
            No News yet :(
            </div>
        )
        return(
            <div className="container center">
                <p> {news} </p>
            </div>
        )
    }
}

export default Pages