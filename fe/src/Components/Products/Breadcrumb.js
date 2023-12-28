import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

const mappingTable = {
  'cua-hang' : 'Cửa hàng',
  '01': 'Bếp',
  '02': 'Dọn dẹp',
  '03': 'Tiện ích',
  'B1': 'Nồi chiên không dầu',
  'B2': 'Nồi cơm thông minh',
  'B3': 'Máy rửa thực phẩm',
  'B4': 'Máy khử trùng đồ dùng bếp',
  'D1': 'Bàn chảy đa năng',
  'D2': 'Máy lọc không khí thông minh',
  'D3': 'Robot hút bụi lau nhà',
  'T1': 'Máy tạo bọt rửa tay',
  'T2': 'Loa trợ lý ảo thông minh',
  'T3': 'Công tắc thông minh',
};

const Breadcrumb = () => {
  const { pathname } = useLocation();
  console.log(">>>", pathname);

  const paths = pathname.split("/").slice(1).filter(item => item !== 'sub');
  const breadcrumbs = paths.map((item, index) => {
    // Exclude specific part, for example, IDs like '6589b90d5db9f9afbcbb7bd1'
    if (item.match(/^[0-9a-fA-F]{24}$/)) {
      return null;
    }

    return {
      title: mappingTable[item] || item,
      path: `/${paths.slice(0, index + 1).join("/")}`,
    };
  }).filter(item => item !== null);

  return (
    <div className='bread'>
      <Link to="/">Trang chủ</Link>
      {breadcrumbs?.map((item, index) => (
        <span key={item.title}>
          {index !== breadcrumbs.length - 1 ? (
            <>
              <BsChevronRight className='iconbread'/>
              <Link to={item.path}>{item.title}</Link>
            </>
          ) : (
            <p><BsChevronRight className='iconbread'/>{item.title}</p>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
