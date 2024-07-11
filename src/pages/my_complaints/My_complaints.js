import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { SearchForm } from "../../components/SearchForm";
import { CiSearch } from "react-icons/ci";
import { ButtonCustom } from "../../components/ButtonCustom";
import { ComplaintsTable } from "../../components/ComplaintsTable";
import { MdOutlineVisibility } from "react-icons/md";
import { Button, DatePicker, Empty, Space, Table, Tag } from "antd";
import fileUrl from '../../docs/E-Şikayət - Abunəçi Təlimatı.pdf';
import { saveAs } from 'file-saver'
import { NavLink } from "react-router-dom";


export const My_complaints = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
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
        id: '2a',
        type: 'Abad',
        provider: 'Sinam',
        theme: 'yoxla',
        sub_code: '3w',
        allStatus: ['Cavablandırıldı'],
        created_at: '2024-07-11 06:57:17',
        operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility /></button>,
      },
      {
        key: '3',
        id: '3',
        type: 'B',
        provider: 'Abadlasdir',
        theme: 'test',
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

    const [tableData,setTableData]=useState(data);
    const[currentTableData,setCurrentTableData]=useState(tableData);

  const handleSearch = (e) => {

    const searchText = e.target.value;
    const findData=tableData.filter((item)=>
      {
        return Object.values(item).some(value =>
          value.toString().toLowerCase().includes(searchText.toLowerCase())
        );
      }
  )
    setCurrentTableData(findData)
  };


  const handleClick = () => {
    alert("clicked");
  };

  const downloadFile = async () => {
    const pdfName = 'E-Şikayət - Abunəçi Təlimatı.pdf';

    try {
        const response = await fetch(fileUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        saveAs(blob, pdfName);
    } catch (error) {
        console.error('Error downloading the PDF:', error);
    }
};

  const onChangeTable = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className="bg-[#F9F9F9] container-custom  h-screen">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* main inputs */}
        <div className="w-full   flex flex-wrap flex-col gap-4  md:flex-row   justify-start py-8 ">
          <NavLink to={'/new_complaint'} className={"w-full md:w-auto "}>
            <ButtonCustom
              icon={<FaPlus />}
              text={"Yeni şikayət yarat"}
              style={
                "w-full flex  flex-nowrap  gap-2 items-center justify-center rounded-default bg-blue_default text-white text-base px-4 py-1 "
              }
            />
          </NavLink>

          <ButtonCustom
            icon={<CiFilter />}
            text={"Ətraflı axtarış"}
            style={
              "flex flex-nowrap  gap-2 items-center justify-center rounded-default bg-blue_default text-white text-base px-4 py-1 "
            }
            onClick={() => setIsOpenSearch(!isOpenSearch)}
          />

          <ButtonCustom
            icon={<AiOutlineInfoCircle />}
            text={"Təlimat"}
            style={
              "flex flex-nowrap  gap-2 items-center justify-center rounded-default bg-blue_default text-white text-base px-4 py-1 "
            }
            onClick={downloadFile}
          />

          {/* <a download='test.pdf' href={fileUrl}>yukle</a> */}
        </div>

        {/*All search  input*/}
        <SearchForm
          icon={<CiSearch className="w-6 h-6  text-blue_default " />}
          placeholder={"Axtar..."}
          onChange={handleSearch}
          />
      </div>
      
      {/* details search  inputs */}
      { isOpenSearch && <div className="flex flex-wrap justify-start items-center gap-4 ">

        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Şikayət nömrəsi daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Fəaliyyət sahəsi daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Şirkət  daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Mövzu  daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Abunəçi kodu  daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Status daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Tarix daxil edin"}
          onClick={handleClick}
        />
        <SearchForm
          icon={<CiSearch className="w-6 h-6 text-blue_default " />}
          placeholder={"Əməliyyatlar daxil edin"}
          onClick={handleClick}
        />
      </div> }

        {/* table */}
        <Table 
        columns={columns} 
        dataSource={currentTableData}  
        onChange={onChangeTable} 
        locale={{
          emptyText: <Empty description="Heç bir şikayət əlavə edilməyib..." className="custom-empty" />,
        }}
        pagination={{
          pageSize: 10,
          showTotal: (total, range) => `Göstərilən: ${range[0]}-${range[1]}, cəmi ${total} (${Math.ceil(total / 10)} səhifə)`,
        }}
        className="overflow-x-auto bg-white custom-table-header custom-table-body my-8"  />

    </div>
  );
};





























































































































































































































































/*
https://e-complaint.icta.az/get_complaints
[
  {
      "id": 529,
      "complainant_pin": "7ACZN4C",
      "complainant_contact_number": "+994(50)694-47-94",
      "email": "simran.abbasov.00@mail.ru",
      "type": "İnternet(GPON, ADSL və s.)",
      "provider": "\"PROKSİ\" MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ",
      "provider_to_provider": null,
      "theme": "Mövcud tariflərlə uyğunsuzluq",
      "characteristic": "Tariflərlə bağlı şikayət",
      "sub_code": "211",
      "city": "BAKI",
      "region": "Nizami",
      "street": "RİZVAN TEYMUROV",
      "apartment": "Husey",
      "flat": "49",
      "stasionar_phone": "411",
      "text": "lorem lorem lorem",
      "user_file": "7ACZN4C1720580237file.jpg",
      "department": "isp",
      "response_department": "0",
      "response_user": 0,
      "response_isp": 1,
      "response_icta": 0,
      "status": "Müraciət göndərilib",
      "complain_again_id": null,
      "complain_date": "2024-07-10",
      "complaint_end_date": null,
      "cancel_reason": null,
      "esd_user": null,
      "esd_isp": null,
      "backend_status": "1_",
      "created_at": "2024-07-10 06:57:17",
      "updated_at": "2024-07-10 06:57:17",
      "e_id": "eyJpdiI6Im5Fa3BVekRCaWZsNmk0NkNkY2ROZ2c9PSIsInZhbHVlIjoicHd1WWl1cGJGVHNnb3VvVWRZaHRhUT09IiwibWFjIjoiYjViMzVlYjMzZGU3YTlkMzJlYjMxYTllNWVlNTJlZDcyMGFmMmY2ZTk3M2I0NDBjNWMxZjQyNWQ2NjM4NmQ3NiIsInRhZyI6IiJ9",
      "show_legal": "\"PROKSİ\" MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ"
  }
]

*/