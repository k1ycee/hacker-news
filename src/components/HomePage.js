import React, { Component } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';



class Home extends Component {
    state = {
        article: [ ]
    }
    componentDidMount(){
        var i;
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(id => {
            // console.log(id,"First Network call");
            var articles = [ ];
            for (i = 0; i<120; i++){
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${id.data[i]}.json`)
                .then(res => {
                    articles.push(res.data);
                    console.log(res.data,"Na me be this fa!!!");
                     return this.setState({
                        article : articles
                    })
                })
            }
            console.log("Wetin dey actually occur")
        })
    }
    render(){
        const { article } = this.state;
        const news = article.length ? (
            article.map( art => {
                return(
                    <div className="post card" key={art.id}>
                    <div className="card content center">
                        <Link to={'/' + art.title}>
                        <span className="card-title center">{art.title}</span>
                        </Link>
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

export default Home;


{/* <form className="row">
<div className="row">
    <div className="input-field col s12">
      <input type="text" className="validate"/>   
    </div>
</div>
</form> */}