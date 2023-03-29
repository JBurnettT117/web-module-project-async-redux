import React from "react";

const Gif = (props) => {
    const { gif } = props;

    return (<div class="gif" >
                <div className="gifleft">
                    <h3 className="title">{gif.title}</h3>
                    <p className="username">By: {gif.username}</p>
                    <p className="rating">Rating: <strong>{gif.rating}</strong></p>
                    <a className="giffyButton" target="_blank" href={gif.url}><button>Check it out on giffy</button></a>
                </div>
                <div className="gifright">
                <img className="realgif" src={gif.images.original.url}/>
                </div>

            </div>);
}

export default Gif;