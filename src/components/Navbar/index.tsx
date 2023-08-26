import { Select } from "antd";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import "./style.scss"

const Navbar = () => {

    const {t, i18n} = useTranslation();

    const handleChange = (value: string) => {
        i18n.changeLanguage(value);
    };

	const location = useLocation();

    return (
        <div className="nav-container">
            <a className="nav-title" href="/">
                {t(location.pathname)}
            </a>
            <div className="select-wrapper">
                <Select
                    value={i18n.language}
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                        { value: 'th', label: t('lang_th') },
                        { value: 'en', label: t('lang_en') },
                    ]}
                />

            </div>
        </div>
    );
};
 
export default Navbar;