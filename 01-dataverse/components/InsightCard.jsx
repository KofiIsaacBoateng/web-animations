'use client';

const InsightCard = ({ imgUrl, title, subtitle }) => (
  <div className="flex sm:flex-row flex-col sm:justify-between items-center">
    <div>
      <img
        src={imgUrl}
        alt={title}
      />
    </div>
    <div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  </div>
);

export default InsightCard;
