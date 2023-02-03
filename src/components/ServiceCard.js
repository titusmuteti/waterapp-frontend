import React from 'react';

const ServiceCard = (props) => {
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 p-5">
      <div className="card p-0overflow-hidden-100 shadow">
        <div className="card-body" style={{ background: '#4BB49B4D' }}>
          <h3 className="card-title">{props.title}</h3>
          <img className='w-100' class="card-title" src={props.image} alt={props.title} />
          <p className="card-text mt-4">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
