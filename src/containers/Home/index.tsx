import { Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import "./style.scss"
 
const Home = () => {

    const {t} = useTranslation();
    const nav = useNavigate();

    return (
        <div className="menu">
            <Row justify="space-evenly">
                <Col span={10}>
                    <Card title={t('test')+' 1'} onClick={()=>nav('/Test1')}>
                        {t('/Test1')}
                    </Card>
                </Col>
                <Col span={10}>
                    <Card title={t('test')+' 2'} onClick={()=>nav('/Test2')}>
                        {t('/Test2')}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
 
export default Home;