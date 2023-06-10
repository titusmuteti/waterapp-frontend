import React from 'react';

const ServiceCard = (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        <div className="card-body" style={{ background: '#4BB49B4D' }}>
          <h3 className="card-title">{props.title}</h3>
          <img className="w-100 card-img-top" src={props.image} alt={props.title} />
          <p className="card-text mt-4">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
