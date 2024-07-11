import React from 'react'
import { Form, Select, Button } from 'antd';

const { Option } = Select;

export const New_complaint = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };  
  return (
    <div className='container-custom py-6'>
        <div className='rounded-xl overflow-hidden'>
          <h1 className='w-full font-pop text-[18px] sm:text-[1.75rem]  font-[500] text-center py-4  bg-blue_default text-white '>
          Şikayət məlumatları
          </h1>
          <form className='p-7'>

              
                <Form
      name="required_select_form"
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        name="selectField"
        label="Şikayət etdiyiniz fəaliyyət sahəsi"
        rules={[{ required: true, message: 'Please select an option!' }]}
        className='font-pop text-6xl font-[500]'
      >
        <Select placeholder="Please select an option">
        <Option value="Fəaliyyət sahəsi">Fəaliyyət sahəsi</Option>
        <Option value="İnternet(GPON, ADSL və s.)">İnternet(GPON, ADSL və s.)</Option>
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Mobil internet">Mobil internet</Option>
          <Option value="Mobil rabitə">Mobil rabitə</Option>
          <Option value="Universal poçt rabitəsi xidmətləri">Universal poçt rabitəsi xidmətləri</Option>
          <Option value="Sürətli poçt rabitəsi xidməti">Sürətli poçt rabitəsi xidməti</Option>
        </Select>
      </Form.Item>


    </Form>
             
            
          </form>
        </div>

    </div>
  )
}


                              