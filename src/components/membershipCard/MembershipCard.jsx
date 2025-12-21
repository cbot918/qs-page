import React from 'react';
import './MembershipCard.css';

const MembershipCard = () => {
  return (
    <div className="card-wrapper">
      <div className="membership-card">
        {/* 標題區 */}
        <h1 className="card-title">
          Premium<br />Membership
        </h1>
        
        {/* 月費區 */}
        <div className="monthly-section">
          <div className="main-price">$</div>
          <div className="price-label">PER MONTH</div>
        </div>

        {/* 年費區 (包含純 CSS 鑽石) */}
        <div className="yearly-section">
          <div className="css-diamond"></div>
          <span className="yearly-text">$Per Year</span>
        </div>

        {/* 按鈕 */}
        <button className="buy-now-btn">Buy Now</button>

        {/* 描述文字 */}
        <p className="card-description">
          Very suitable for options beginners and investment strategists 
          to make appropriate asset allocation based on your fund size 
          through our weekly selection list.
        </p>
      </div>
    </div>
  );
};

export default MembershipCard;