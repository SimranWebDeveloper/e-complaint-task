import React from 'react'
import { MdOutlineVisibility } from "react-icons/md";
import { Button, DatePicker, Empty, Space, Table, Tag } from "antd";
import { SearchOutlined } from '@ant-design/icons';

export const ComplaintsTable = () => {

      // table header columns names
  const columns= [
    {
      title: 'Şikayət nömrəsi',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) =>Number(a.id) - Number(b.id),
    },
    {
      title: 'Fealiyyət sahəsi',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.type.localeCompare(b.type),  
    },
    {
      title: 'Şirkət',
      dataIndex: 'provider',
      key: 'provider',
      sorter: (a, b) => a.type.localeCompare(b.type),  

     },
    {
      title: 'Mövzu',
      dataIndex: 'theme',
      key: 'theme',
      sorter: (a, b) => a.type.localeCompare(b.type),  
   
    },
    {
      title: 'Abunəçi kodu',
      dataIndex: 'sub_code',
      key: 'sub_code',
      sorter: (a, b) =>Number(a.sub_code) - Number(b.sub_code),
     },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.type.localeCompare(b.type),  

            render: (_, { allStatus }) => (
        <>
          {allStatus.map((status) => {
            let color;
            if (status=="Baxılır") color="red"
            if (status=="Cavablandırıldı") color="green"
            if (status=="Ləğv edildi") color="geekblue"
  
            return (
              <Tag color={color} key={status}>
                {status.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Tarix',
      dataIndex: 'created_at',
      key: 'created_at',
      sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),  
    },
    {
      title: 'Əməliyyatlar',
      dataIndex: 'operation',
      key: 'operation',
      // sorter: (a, b) => a.id.length - b.id.length,   
     },
  ];

  // table body   
  const data = [
    {
      key: '1',
      id: '1',
      type: 'Fealiyyət sahəsi text',
      provider: 'Şirkət text',
      theme: 'Mövzu text',
      sub_code: '2',
      allStatus: ['Baxılır'],
      created_at: '2024-07-10 06:57:17',
      operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    },
    {
      key: '2',
      id: '2',
      type: 'A',
      provider: 'A',
      theme: 'A',
      sub_code: '3',
      allStatus: ['Cavablandırıldı'],
      created_at: '2024-07-11 06:57:17',
      operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    },
    {
      key: '3',
      id: '3',
      type: 'B',
      provider: 'B',
      theme: 'B',
      sub_code: '1',
      allStatus: ['Ləğv edildi'],
      created_at: '2024-07-12 06:57:17',
      operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    },
    // {
    //   key: '4',
    //   id: '4',
    //   type: 'Fealiyyət sahəsi text',
    //   provider: 'Şirkət text',
    //   theme: 'Mövzu text',
    //   sub_code: '2',
    //   allStatus: ['Baxılır'],
    //   created_at: '2024-07-10 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '5',
    //   id: '5',
    //   type: 'A',
    //   provider: 'A',
    //   theme: 'A',
    //   sub_code: '3',
    //   allStatus: ['Cavablandırıldı'],
    //   created_at: '2024-07-11 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '6',
    //   id: '6',
    //   type: 'B',
    //   provider: 'B',
    //   theme: 'B',
    //   sub_code: '1',
    //   allStatus: ['Ləğv edildi'],
    //   created_at: '2024-07-12 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '7',
    //   id: '7',
    //   type: 'Fealiyyət sahəsi text',
    //   provider: 'Şirkət text',
    //   theme: 'Mövzu text',
    //   sub_code: '2',
    //   allStatus: ['Baxılır'],
    //   created_at: '2024-07-10 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '8',
    //   id: '8',
    //   type: 'A',
    //   provider: 'A',
    //   theme: 'A',
    //   sub_code: '3',
    //   allStatus: ['Cavablandırıldı'],
    //   created_at: '2024-07-11 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '9',
    //   id: '9',
    //   type: 'B',
    //   provider: 'B',
    //   theme: 'B',
    //   sub_code: '1',
    //   allStatus: ['Ləğv edildi'],
    //   created_at: '2024-07-12 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '10',
    //   id: '10',
    //   type: 'Fealiyyət sahəsi text',
    //   provider: 'Şirkət text',
    //   theme: 'Mövzu text',
    //   sub_code: '2',
    //   allStatus: ['Baxılır'],
    //   created_at: '2024-07-10 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '11',
    //   id: '11',
    //   type: 'A',
    //   provider: 'A',
    //   theme: 'A',
    //   sub_code: '3',
    //   allStatus: ['Cavablandırıldı'],
    //   created_at: '2024-07-11 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '12',
    //   id: '12',
    //   type: 'B',
    //   provider: 'B',
    //   theme: 'B',
    //   sub_code: '1',
    //   allStatus: ['Ləğv edildi'],
    //   created_at: '2024-07-12 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '13',
    //   id: '13',
    //   type: 'Fealiyyət sahəsi text',
    //   provider: 'Şirkət text',
    //   theme: 'Mövzu text',
    //   sub_code: '2',
    //   allStatus: ['Baxılır'],
    //   created_at: '2024-07-10 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '14',
    //   id: '14',
    //   type: 'A',
    //   provider: 'A',
    //   theme: 'A',
    //   sub_code: '3',
    //   allStatus: ['Cavablandırıldı'],
    //   created_at: '2024-07-11 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '15',
    //   id: '15',
    //   type: 'B',
    //   provider: 'B',
    //   theme: 'B',
    //   sub_code: '1',
    //   allStatus: ['Ləğv edildi'],
    //   created_at: '2024-07-12 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '16',
    //   id: '16',
    //   type: 'Fealiyyət sahəsi text',
    //   provider: 'Şirkət text',
    //   theme: 'Mövzu text',
    //   sub_code: '2',
    //   allStatus: ['Baxılır'],
    //   created_at: '2024-07-10 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '17',
    //   id: '17',
    //   type: 'A',
    //   provider: 'A',
    //   theme: 'A',
    //   sub_code: '3',
    //   allStatus: ['Cavablandırıldı'],
    //   created_at: '2024-07-11 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '18',
    //   id: '18',
    //   type: 'B',
    //   provider: 'B',
    //   theme: 'B',
    //   sub_code: '1',
    //   allStatus: ['Ləğv edildi'],
    //   created_at: '2024-07-12 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    // {
    //   key: '19',
    //   id: '19',
    //   type: 'Fealiyyət sahəsi text',
    //   provider: 'Şirkət text',
    //   theme: 'Mövzu text',
    //   sub_code: '2',
    //   allStatus: ['Baxılır'],
    //   created_at: '2024-07-10 06:57:17',
    //   operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
    // },
    
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <Table 
      columns={columns} 
      dataSource={data}  
      onChange={onChange} 
      locale={{
        emptyText: <Empty description="Heç bir şikayət əlavə edilməyib..." className="custom-empty" />,

      }}
      pagination={{
        pageSize: 10,
        showTotal: (total, range) => `Göstərilən: ${range[0]}-${range[1]}, cəmi ${total} (${Math.ceil(total / 10)} səhifə)`,
      }}
      className=" custom-table-header custom-table-body my-8"  />
      
  )
}
