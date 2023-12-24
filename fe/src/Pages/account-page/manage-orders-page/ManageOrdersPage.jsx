import React, { useMemo, useState } from 'react';
import './ManageOrdersPage.css';
import orderStatusData from '../../../test-data/orderStatusData.json';
import { useTable } from 'react-table';

import FormButton from '../../../components/form-btn/FormButton';
import { Link } from 'react-router-dom';
const ManageOrdersPage = () => {
  console.log(orderStatusData);
  const tableData = useMemo(() => orderStatusData, []);
  const [orderStatus, setOrderStatus] = useState('all');
  const changeOrderStatus = (newOrderStatus) => {
    setOrderStatus(newOrderStatus);
  };
  const columns = useMemo(
    () => [
      {
        Header: 'Mã đơn hàng',
        accessor: 'id',
      },
      {
        Header: 'Ngày mua',
        accessor: 'purchase_date',
      },
      {
        Header: 'Người nhận',
        accessor: 'receiver',
      },
      {
        Header: 'Tổng tiền',
        accessor: 'total_bill',
      },
      {
        Header: 'Trạng thái',
        accessor: 'order_status',
      },
    ],
    [],
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData });
  return (
    <div className="order-page-content">
      <div className="wrapper-btn">
        <FormButton
          text={'Tất cả'}
          className={`order-state-btn ${
            orderStatus === 'all' ? 'selected' : ''
          }`}
          onClick={() => {
            changeOrderStatus('all');
          }}
        />
        <FormButton
          text={'Chờ xác nhận'}
          className={`order-state-btn ${
            orderStatus === 'wait-for-confirmation' ? 'selected' : ''
          }`}
          onClick={() => {
            changeOrderStatus('wait-for-confirmation');
          }}
        />
        <FormButton
          text={'Đã xác nhận'}
          className={`order-state-btn ${
            orderStatus === 'confirmed' ? 'selected' : ''
          }`}
          onClick={() => {
            changeOrderStatus('confirmed');
          }}
        />
        <FormButton
          text={'Đang vận chuyển'}
          className={`order-state-btn ${
            orderStatus === 'being-transported' ? 'selected' : ''
          }`}
          onClick={() => {
            changeOrderStatus('being-transported');
          }}
        />
        <FormButton
          text={'Hoàn tất'}
          className={`order-state-btn ${
            orderStatus === 'completed' ? 'selected' : ''
          }`}
          onClick={() => {
            changeOrderStatus('completed');
          }}
        />
        <FormButton
          text={'Đã hủy'}
          className={`order-state-btn ${
            orderStatus === 'cancelled' ? 'selected' : ''
          }`}
          onClick={() => {
            changeOrderStatus('cancelled');
          }}
        />
      </div>
      <div className="wrapper-orders-table">
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
                <th></th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                  <td>
                    <Link className="order-details-link">Chi tiết</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrdersPage;
