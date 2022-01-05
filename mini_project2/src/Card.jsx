import React from "react";

function Card(props){
    console.log(props)
    return (
        <div className = "cards">
            <div className = "card">
                <img src={props.img_src} alt="Picture" className="card_img"/>
                <div className="card_info">
                    <span className="card_category">{props.category}</span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href={props.link} target="_blank" className="link">
                        <button>WATCH NOW</button>    
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;