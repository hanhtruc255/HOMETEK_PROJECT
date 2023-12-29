import React, { useMemo, useState } from 'react';
import './ManageOrdersPage.css';
import RatingOrderPage from './order-details-page/rating-order-page/RatingOrderPage';
import { Outlet } from 'react-router-dom';
const ManageOrdersPage = () => {
  return (
    <div className="order-page-content">
      <Outlet />
    </div>
  );
};

export default ManageOrdersPage;
