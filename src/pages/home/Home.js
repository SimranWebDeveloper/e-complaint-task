import React from "react";
import { FaPlus } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { SearchForm } from "../../components/SearchForm";
import { CiSearch } from "react-icons/ci";
import { Button, DatePicker, Space, Table, Tag } from "antd";
import { ButtonCustom } from "../../components/ButtonCustom";
import { MdOutlineVisibility } from "react-icons/md";



export const Home = () => {
  

  
  
  
  
  
  // table header columns names
  const columns= [
    {
      title: 'Şikayət nömrəsi',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: 'Fealiyyət sahəsi',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.id.length - b.id.length,    },
    {
      title: 'Şirkət',
      dataIndex: 'provider',
      key: 'provider',
      sorter: (a, b) => a.id.length - b.id.length,    },
    {
      title: 'Mövzu',
      dataIndex: 'theme',
      key: 'theme',
      sorter: (a, b) => a.id.length - b.id.length,    },
    {
      title: 'Abunəçi kodu',
      dataIndex: 'sub_code',
      key: 'sub_code',
      // sorter: (a, b) => {
      //   console.log('a.sub_code', a.sub_code);
      //   console.log('b.sub_code \n', b.sub_code);
      //   return a.sub_code - b.sub_code
      // },
     },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.id.length - b.id.length,
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
      sorter: (a, b) => a.id.length - b.id.length,    },
    {
      title: 'Əməliyyatlar',
      dataIndex: 'operation',
      key: 'operation',
      sorter: (a, b) => a.id.length - b.id.length,    },
  ];

  // table body   
  const data = [
    {
      key: '1',
      id: 'Şikayət nömrəsindeki text',
      type: 'Fealiyyət sahəsi text',
      provider: 'Şirkət text',
      theme: 'Mövzu text',
      sub_code: 2,
      allStatus: ['Baxılır'],
      created_at: 'Tarix text',
      operation: "operation",
      operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility  /></button>,
    },
    {
      key: '1',
      id: 'A',
      type: 'A',
      provider: 'A',
      theme: 'A',
      sub_code: 3,
      allStatus: ['Cavablandırıldı'],
      created_at: 'A',
      operation: "operation",
      operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility  /></button>,
    },
    {
      key: '2',
      id: 'B',
      type: 'B',
      provider: 'B',
      theme: 'B',
      sub_code: 1,
      allStatus: ['Ləğv edildi'],
      created_at: 'B',
      operation: "operation",
      operation: <button onClick={() => alert("clicked")} className="bg-blue-500 text-white p-2"><MdOutlineVisibility  /></button>,
    },
  ];

  // headerdaki sutun necencidirse onun  dataIndex ile bodydeki her obyektin necenci setrine dusurse(sayanda bodydeki key sayilmir)  bodynin keye dataIndex-in deyeri ile eyni olmalidir



  const handleClick = () => {
    alert("clicked");
  };


  return (
    <div className="bg-[#F9F9F9] container-custom  h-screen">
      <div className="flex flex-wrap space-x-4 justify-start py-8 ">
        <ButtonCustom
          icon={<FaPlus />}
          text={"Yeni şikayət yarat"}
          style={
            "flex gap-2 items-center justify-between rounded-default bg-blue_default text-white text-base px-4 py-1 "
          }
          onClick={handleClick}
        />

        <ButtonCustom
          icon={<CiFilter />}
          text={"Ətraflı axtarış"}
          style={
            "flex gap-2 items-center justify-between rounded-default bg-blue_default text-white text-base px-4 py-1 "
          }
          onClick={handleClick}
        />

        <ButtonCustom
          icon={<AiOutlineInfoCircle />}
          text={"Təlimat"}
          style={
            "flex gap-2 items-center justify-between rounded-default bg-blue_default text-white text-base px-4 py-1 "
          }
          onClick={handleClick}
        />
      </div>

      <div className="flex flex-wrap justify-start items-center gap-4 ">
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
      </div>

      {/* table ---------- */}
      <div className="flex flex-col items-center my-8">
        <div className="overflow-x-auto w-full">

          <div className="text-default font-pop text-[#212529] bg-white text-center p-8">
            Heç bir şikayət əlavə edilməyib...
          </div>
        </div>
        {/* table end-------- */}
        <div className="w-full flex justify-between items-center ">
          <div className="mt-4 text-balance font-pop text-default">
            Gösterilen: 0-0, cəmi 0 (0 səhifə)
          </div>
          <div className="flex mt-4">
            <button className="bg-blue_default  text-white p-2 rounded-l">
              ‹
            </button>
            <button className="bg-blue_default text-white p-2 rounded-r">
              ›
            </button>
          </div>
        </div>
      </div>


      {/* table ant*/}
      <Table columns={columns} dataSource={data}  className="custom-table-header custom-table-body "  />
      

      
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