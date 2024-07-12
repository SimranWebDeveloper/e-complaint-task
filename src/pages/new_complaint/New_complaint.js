import { Button, Flex, Form, Input, List, Select, Space,Divider } from 'antd';
import { RiUpload2Line } from "react-icons/ri";
import { useState,useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
// 



const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const { TextArea } = Input;


const standartLabel="  <label for='file-upload' id='upload-label'  className='flex flex-col justify-center items-center'> <RiUpload2Line/><span>Fayl əlavə et</span><div className='file-description text-justify'><span>Faylları buraya əlavə edin. Faylın ölçüsü maksimum 10 MB həcmində,png, txt, jpeg, jpg, pdf formatında fayl əlavə edə bilərsiniz.</span></div></label>"
let index = 0;

export const New_complaint = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        break;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    if (window.confirm('Gondermek isdediyiniz butun melumatlari Silmek isdediyinizden eminsiniz?')) {
      form.resetFields();
    }
  };


  function handleFileUpload() {
    const label = document.getElementById('upload-label');
  
    
    const ipt = document.getElementById('file-upload');

    label.innerHTML =ipt.files.length ? ipt.files[0].name : standartLabel
}

// text area
const [text, setText] = useState('');
const maxLength = 2000;
const handleChangeTextArea = (e) => {
  setText(e.target.value);
};

// new Street
const [items, setItems] = useState(['jack', 'lucy']);
const [name, setName] = useState('');
const inputRef = useRef(null);

const onNameChange = (event ) => {
  setName(event.target.value);
};

const addItem = (e) => {
  e.preventDefault();
  setItems([...items, name || `New item ${index++}`]);
  setName('');
  setTimeout(() => {
    inputRef.current?.focus();
  }, 0);
};
  return (
    <div className='container-custom py-6 bg-[#F9F9F9]'>

    <Form className='w-full   p-7'
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
    >
      {/* section 1 */}
      <div className='rounded-xl overflow-hidden bg-white'>
      <h1 className='w-full font-pop text-[18px]  sm:text-[1.75rem]  font-[500] text-center py-4  bg-blue_default text-white '>
        Şikayət məlumatları
      </h1>
      {/* section 1 */}
      <div className='grid grid-cols-4 gap-4 p-7   '>

        {/* ipt1 */}
        <Form.Item 
        name="Şikayət etdiyiniz fəaliyyət sahəsi Name" 
        label="Şikayət etdiyiniz fəaliyyət sahəsi Label" 
        layout="Şikayət etdiyiniz fəaliyyət sahəsi Layout"
        rules={[{ required: true }]} 
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}

        className='w-full col-span-1 font-pop text-6xl font-[500]'>

        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Fəaliyyət sahəsi">Fəaliyyət sahəsi</Option>
        <Option value="İnternet(GPON, ADSL və s.)">İnternet(GPON, ADSL və s.)</Option>
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Mobil internet">Mobil internet</Option>
          <Option value="Mobil rabitə">Mobil rabitə</Option>
          <Option value="Universal poçt rabitəsi xidmətləri">Universal poçt rabitəsi xidmətləri</Option>
          <Option value="Sürətli poçt rabitəsi xidməti">Sürətli poçt rabitəsi xidməti</Option>
        </Select>
      </Form.Item>

        {/* ipt2 */}
      <Form.Item
        name="Abunəçi kodu Name"
        layout="Abunəçi kodu Layout"
        label="Abunəçi kodu"
        rules={[{ required: true }]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        className='w-1/2 col-span-2'
      >
        <Input />
      </Form.Item>

            {/* ipt3 */}
            <div className='col-span-1 row-span-4 flex flex-col justify-center items-center  hover:bg-[#F3F3F3]'>
      
      <input type="file" style={{ display: 'none' }} id="file-upload" name="file"  accept=".png, .txt, .jpeg, .jpg, .pdf" onChange={handleFileUpload}/>

      <label for="file-upload" id="upload-label"  className='flex flex-col justify-center items-center'>
      <RiUpload2Line/>
      <span>Fayl əlavə et</span>
          <div className="file-description text-justify">
              
              <span>Faylları buraya əlavə edin. Faylın ölçüsü maksimum 10 MB həcmində,
                  png, txt, jpeg, jpg, pdf formatında fayl əlavə edə bilərsiniz.</span>
          </div>
      </label>

  </div>
      


        {/* ipt4 */}
                <Form.Item 
        name="Şikayət etdiyiniz fəaliyyət sahəsi Name" 
        label="Şikayət etdiyiniz fəaliyyət sahəsi Label" 
        layout="Şikayət etdiyiniz fəaliyyət sahəsi Layout"
        rules={[{ required: true }]} 
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}

        className='w-full col-span-1 font-pop text-6xl font-[500]'>

        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Fəaliyyət sahəsi">Fəaliyyət sahəsi</Option>
        <Option value="İnternet(GPON, ADSL və s.)">İnternet(GPON, ADSL və s.)</Option>
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Mobil internet">Mobil internet</Option>
          <Option value="Mobil rabitə">Mobil rabitə</Option>
          <Option value="Universal poçt rabitəsi xidmətləri">Universal poçt rabitəsi xidmətləri</Option>
          <Option value="Sürətli poçt rabitəsi xidməti">Sürətli poçt rabitəsi xidməti</Option>
        </Select>
      </Form.Item>

      {/* ipt5 */}
      <div className='w-full col-span-2 row-span-3 '>
      <Flex vertical gap={32}>
      <label className="block text-sm font-medium text-gray-700">
        Şikayət mətnİ
        <span className="text-xs text-gray-500"> (Qalan simvol sayı: 
          <span style={{ color: text.length > maxLength ? 'red' : 'green' }}>
            {maxLength - text.length}
          </span>)
        </span>
      </label>
    <TextArea
      showCount
      maxLength={2000}
      rows={10}
      onChange={handleChangeTextArea}
      placeholder="disable resize "
      className='   h-auto'
      style={{ resize: 'none', }}
    />
  </Flex>
      </div>

              {/* ipt6 */}
              <Form.Item 
        name="Şikayət etdiyiniz fəaliyyət sahəsi Name" 
        label="Şikayət etdiyiniz fəaliyyət sahəsi Label" 
        layout="Şikayət etdiyiniz fəaliyyət sahəsi Layout"
        rules={[{ required: true }]} 
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}

        className='w-full col-span-1 font-pop text-6xl font-[500]'>

        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Fəaliyyət sahəsi">Fəaliyyət sahəsi</Option>
        <Option value="İnternet(GPON, ADSL və s.)">İnternet(GPON, ADSL və s.)</Option>
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Mobil internet">Mobil internet</Option>
          <Option value="Mobil rabitə">Mobil rabitə</Option>
          <Option value="Universal poçt rabitəsi xidmətləri">Universal poçt rabitəsi xidmətləri</Option>
          <Option value="Sürətli poçt rabitəsi xidməti">Sürətli poçt rabitəsi xidməti</Option>
        </Select>
      </Form.Item>
              {/* ipt7 */}
              <Form.Item 
        name="Şikayət etdiyiniz fəaliyyət sahəsi Name" 
        label="Şikayət etdiyiniz fəaliyyət sahəsi Label" 
        layout="Şikayət etdiyiniz fəaliyyət sahəsi Layout"
        rules={[{ required: true }]} 
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}

        className='w-full col-span-1 font-pop text-6xl font-[500]'>

        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Fəaliyyət sahəsi">Fəaliyyət sahəsi</Option>
        <Option value="İnternet(GPON, ADSL və s.)">İnternet(GPON, ADSL və s.)</Option>
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Mobil internet">Mobil internet</Option>
          <Option value="Mobil rabitə">Mobil rabitə</Option>
          <Option value="Universal poçt rabitəsi xidmətləri">Universal poçt rabitəsi xidmətləri</Option>
          <Option value="Sürətli poçt rabitəsi xidməti">Sürətli poçt rabitəsi xidməti</Option>
        </Select>
      </Form.Item>

      </div>




      </div>

      {/* section 2 */}
      <div className='rounded-xl overflow-hidden my-2 bg-white'>
        <div className='grid grid-cols-4 gap-4 p-7   '>

          {/* ipt1 */}
          <Form.Item 
          name="Şikayət etdiyiniz fəaliyyət sahəsi Name" 
          label="Şikayət etdiyiniz fəaliyyət sahəsi Label" 
          layout="Şikayət etdiyiniz fəaliyyət sahəsi Layout"
          rules={[{ required: true }]} 
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}

          className='w-full col-span-1 font-pop text-6xl font-[500]'>

          <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
          >
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Fəaliyyət sahəsi">Fəaliyyət sahəsi</Option>
          <Option value="İnternet(GPON, ADSL və s.)">İnternet(GPON, ADSL və s.)</Option>
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Mobil internet">Mobil internet</Option>
          <Option value="Mobil rabitə">Mobil rabitə</Option>
          <Option value="Universal poçt rabitəsi xidmətləri">Universal poçt rabitəsi xidmətləri</Option>
          <Option value="Sürətli poçt rabitəsi xidməti">Sürətli poçt rabitəsi xidməti</Option>
          </Select>
          </Form.Item>

            {/* ipt2 */}
          <Form.Item 
          name="Şikayət etdiyiniz fəaliyyət sahəsi Name" 
          label="Şikayət etdiyiniz fəaliyyət sahəsi Label" 
          layout="Şikayət etdiyiniz fəaliyyət sahəsi Layout"
          rules={[{ required: true }]} 
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}

          className='w-full col-span-1 font-pop text-6xl font-[500]'>

          <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
          >
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Fəaliyyət sahəsi">Fəaliyyət sahəsi</Option>
          <Option value="İnternet(GPON, ADSL və s.)">İnternet(GPON, ADSL və s.)</Option>
          <Option value="Telefon rabitəsi">Telefon rabitəsi</Option>
          <Option value="Mobil internet">Mobil internet</Option>
          <Option value="Mobil rabitə">Mobil rabitə</Option>
          <Option value="Universal poçt rabitəsi xidmətləri">Universal poçt rabitəsi xidmətləri</Option>
          <Option value="Sürətli poçt rabitəsi xidməti">Sürətli poçt rabitəsi xidməti</Option>
          </Select>
          </Form.Item>

          {/* ipt3 */}
          <Form.Item 
          name="Şikayət etdiyiniz fəaliyyət sahəsi Name" 
          label="Şikayət etdiyiniz fəaliyyət sahəsi Label" 
          layout="Şikayət etdiyiniz fəaliyyət sahəsi Layout"
          rules={[{ required: true }]} 
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}

          className='w-full col-span-1 font-pop text-6xl font-[500]'>

          <Select
                style={{ width: 300 }}
                placeholder="custom dropdown render"
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <Divider style={{ margin: '8px 0' }} />
                    <Space style={{ padding: '0 8px 4px' }}>
                      <Input
                        placeholder="Please enter item"
                        ref={inputRef}
                        value={name}
                        onChange={onNameChange}
                        onKeyDown={(e) => e.stopPropagation()}
                      />
                      <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                        Add item
                      </Button>
                    </Space>
                  </>
                )}
                options={items.map((item) => ({ label: item, value: item }))}
              />
          </Form.Item>

          <div className='col-span-1'></div>
          <div className='col-span-1 flex justify-between gap-4 '>
            {/* <h3>Bina</h3> */}
          <Form.Item
        name="Abunəçi kodu Name"
        layout="Abunəçi kodu Layout"
        label="Abunəçi kodu"
        rules={[{ required: true }]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        className='w-1/2 '
      >
        <Input />
        
      </Form.Item>
      <Form.Item
        name="Abunəçi kodu Name"
        layout="Abunəçi kodu Layout"
        label="Abunəçi kodu"
        rules={[{ required: true }]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        className='w-1/2'
      >
        <Input />
      </Form.Item>
          </div>




        </div>
      </div>






        {/* mandatory */}
        <Form.Item className='w-full '
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>

  
        {/* submit */}
      <Form.Item {...tailLayout} className='w-full '>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
      
    </Form>
    



    </div>
  )
}


                              