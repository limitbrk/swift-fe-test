import { Button, DatePicker, Form, Input, Radio, InputNumber, Select, Space, Table, Popconfirm } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss"
import { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setLoading } from "../../redux/LoadingReducer";
import { FieldType, DataType } from "../../model/Datatable";
import { setDatatable } from "../../redux/DatatableReducer";
import { clearKeys, setKeys } from "../../redux/SelectRowReducer";

const Test2 = () => {
    const key = "Test2";

    const { t } = useTranslation();
    
    const onFinish = (values: FieldType) => {
        const saved = localStorage.getItem(key) || "[]";
        const data: DataType[] = JSON.parse(saved);
        const input : DataType = {
            key: uuidv4(),
            name: values.prefix + " " + values.firstname + " " + values.lastname,
            birthdate: values.birthdate,
            nationality: values.nationality,
            idenno: values.idenno?.join('-'),
            tel: "(" + values.tel?.prefix + ")" + values.tel?.number,
            sex: values.sex,
            passport: values.passport,
            salary: values.salary,
        }
        data.push(input);

        localStorage.setItem(key,JSON.stringify(data));
        dispatch(setDatatable(data));
        
        console.log('Success:', JSON.stringify(data));
    };

    const columns: ColumnsType<DataType> = [
        {
            title: t("test2_name"),
            dataIndex: 'name',
        },
        {
            title: t("test2_sex"),
            dataIndex: 'sex',
        },
        {
            title: t("test2_tel"),
            dataIndex: 'tel',
        },
        {
            title: t("test2_nationality"),
            dataIndex: 'nationality',
        },
        {
            title: t("test2_manage"),
            render: (_, record) =>
                dataLoad.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => {
                        deleteData([record.key])
                    }}>
                        <a>Delete</a>
                    </Popconfirm>
                 ) : null,
        },
    ];

    
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const selectedRowKeys = useSelector((state: RootState) => state.selectRow.keys)
    const dataLoad = useSelector((state: RootState) => state.datatable.result)
    const loading = useSelector((state: RootState) => state.loading.status)
    
    const deleteData = (keys: React.Key[] = selectedRowKeys) => {
        dispatch(setLoading(true));
        setTimeout(() => {
            const saved = localStorage.getItem(key) || "[]";
            const data: DataType[] = JSON.parse(saved);
            const left: DataType[] = data.filter((value) => !keys.includes(value.key))
            localStorage.setItem(key,JSON.stringify(left));
            dispatch(setDatatable(left));

            console.log("deleted", keys);

            dispatch(clearKeys());
            dispatch(setLoading(false));

        }, 1000);
    };
  
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
      console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      dispatch(setKeys(newSelectedRowKeys));
    };
  
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
        <div className="test-2">
            <Form form={form}
                name="basic"
                initialValues={{ remember: true }}
                layout="inline"
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                >  
                <Form.Item<FieldType>
                    label={t("test2_prefix")}
                    name="prefix"
                    rules={[{ required: true }]}
                    >
                    <Select defaultValue="-">
                        <Select.Option value="-" disabled>{t("test2_select_placeholder")}</Select.Option>
                        <Select.Option value={t("test2_mr")}>{t("test2_mr")}</Select.Option>
                        <Select.Option value={t("test2_mrs")}>{t("test2_mrs")}</Select.Option>
                        <Select.Option value={t("test2_miss")}>{t("test2_miss")}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item<FieldType>
                    label={t("test2_firstname")}
                    name="firstname"
                    rules={[{ required: true}]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label={t("test2_lastname")}
                    name="lastname"
                    rules={[{ required: true }]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label={t("test2_birthdate")}
                    name="birthdate"
                    rules={[{ required: true }]}
                    >
                    <DatePicker />
                </Form.Item>
                <Form.Item<FieldType>
                    label={t("test2_nationality")}
                    name="nationality"
                    rules={[{ required: true }]}
                    >
                    <Select defaultValue="-">
                        <Select.Option value="-" disabled>{t("test2_select_placeholder")}</Select.Option>
                        <Select.Option value={t("nat_th")}>{t("nat_th")}</Select.Option>
                        <Select.Option value={t("nat_other")}>{t("nat_other")}</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item<FieldType> label={t("test2_idenno")} rules={[{ required: true }]} >
                    <Space.Compact className="ident-no">
                        <Form.Item<FieldType>
                            name={["idenno",0]}
                            rules={[{ required: true }]}
                            >
                            <Input minLength={1} maxLength={1} pattern="\d*" style={{width: "3em"}}/>
                        </Form.Item>
                        <Form.Item<FieldType>
                            name={["idenno",1]}
                            rules={[{ required: true }]}
                            >
                            <Input addonBefore="-" minLength={4} maxLength={4} pattern="\d*" style={{width: "6em"}}/>
                        </Form.Item>
                        <Form.Item<FieldType>
                            name={["idenno",2]}
                            rules={[{ required: true }]}
                            >
                            <Input addonBefore="-" minLength={5} maxLength={5} pattern="\d*" style={{width: "7em"}}/>
                        </Form.Item>
                        <Form.Item<FieldType>
                            name={["idenno",3]}
                            rules={[{ required: true }]}
                            >
                            <Input addonBefore="-" minLength={2} maxLength={2} pattern="\d*" style={{width: "5em"}}/>
                        </Form.Item>
                        <Form.Item<FieldType>
                            name={["idenno",4]}
                            rules={[{ required: true }]}
                            >
                            <Input addonBefore="-" minLength={1} maxLength={1} pattern="\d*" style={{width: "5em"}}/>
                        </Form.Item>
                    </Space.Compact>
                </Form.Item>
                <Form.Item<FieldType>
                    label={t("test2_sex")}
                    name="sex"
                    rules={[{ required: true }]}
                    >
                    <Radio.Group>
                        <Radio value={t("sex_male")}>{t("sex_male")}</Radio>
                        <Radio value={t("sex_female")}>{t("sex_female")}</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item<FieldType> label={t("test2_tel")} rules={[{ required: true }]} >
                    <Space.Compact className="ident-no">
                        <Form.Item<FieldType>
                            name={['tel', 'prefix']}
                            rules={[{ required: true }]}
                            >
                            <Select style={{width:"6em"}}>
                                <Select.Option value="+66"> +66 </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item<FieldType>
                            name={['tel', 'number']}
                            rules={[{ required: true }]}
                            >
                            <Input minLength={9} maxLength={10} pattern="\d*" style={{width: "15em"}}/>
                        </Form.Item>
                    </Space.Compact>
                </Form.Item>
                <Form.Item<FieldType>
                    label={t("test2_passport")}
                    name="passport"
                    >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label={t("test2_salary")}
                    name="salary"
                    rules={[{ required: true }]}
                    >
                    <InputNumber />
                </Form.Item>

                <Form.Item>
                    <Button onClick={()=>form.resetFields()}>
                        {t("test2_clear")}
                    </Button>
                    <Button htmlType="submit">
                        {t("test2_submit")}
                    </Button>
                </Form.Item>
            </Form>
            <div className="data">
                <div>
                    <div style={{ marginBottom: 16 }}>
                        <Button type="primary" onClick={()=>deleteData()} disabled={!hasSelected} loading={loading}>
                            {t("test2_delete")}
                        </Button>
                        <span style={{ marginLeft: 8 }}>
                            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                        </span>
                    </div>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={dataLoad} />
                </div>
            </div>
        </div>
    );
};
 
export default Test2;
