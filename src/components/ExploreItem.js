import React from 'react';

function ExploreItem(props) {
    return (
      <div className={`explore_item ${props.isActive ? "active" : ""}`}>
        <div className="img">
          <img src={props.img} alt={props.img} />
        </div>
        <div className="text">
          <div className="text_container">
            <div className="text1">{props.title}</div>
            <div className="text2">{props.description}</div>
          </div>
        </div>
      </div>
    );
  }
  

export default ExploreItem;