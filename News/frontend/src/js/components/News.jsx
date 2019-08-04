import React from "react";

const cardStyle = {
  margin: '40px',
  border: '5px solid charcoal'
};

const News = (props) => {
  return (
    <div className="card" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">{props.info.Title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.info.PublishedDate}</h6>
        <p dangerouslySetInnerHTML={{__html: props.info.Descripton}} />
      </div>
    </div>
  )
}



export default News