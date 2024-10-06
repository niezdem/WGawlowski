const Service = ({ icon, heading, text }) => (
  <li className="service_block">
    <div className="service_heading-container">
      <i className={icon}></i>
      <h2>{heading}</h2>
    </div>
    <p>{text}</p>
  </li>
);

export default Service;
