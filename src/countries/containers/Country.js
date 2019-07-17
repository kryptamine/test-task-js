import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../App.css';
import * as countryActions from "../actions";
import { InputGroup, Dropdown } from 'react-bootstrap';
import ReactCountryFlag from "react-country-flag";
import 'bootstrap/dist/css/bootstrap.css';
import { IMaskInput } from 'react-imask';

const Countries = ({countries, actions: {getCountries}}) => {
    React.useEffect(() => {
        getCountries();
    }, [getCountries]);

    React.useEffect(() => {
        if (countries.length) {
            handleSelect(countries[0])();
        }
    }, [countries]);

    const [selectedItem, setItem] = React.useState(null);
    const [phoneValue, setPhoneValue] = React.useState('');
    const handleSelect = item => () => {
        setItem(item);
        setPhoneValue(`${item.phoneInfo.prefix}`);
    };

    const handleChangePhone = (e) => {
        const countryByPrefix = countries.find(item => item.phoneInfo.prefix === e.target.value);

        if (countryByPrefix) {
            setItem(countryByPrefix);
        }

        setPhoneValue(e.target.value);
    };

    const DropDownItem = ({item, ...props}) => (
        <Dropdown.Item  href="#" {...props}>
            <ReactCountryFlag code={item.code} svg/> {item.name} ({item.phoneInfo.prefix})
        </Dropdown.Item>
    );

    return (
        <div className="center-div">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <Dropdown>
                        <Dropdown.Toggle>
                            {selectedItem && (<ReactCountryFlag code={selectedItem.code} svg />)}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {countries.map((item, key) => <DropDownItem onClick={handleSelect(item)} key={key} item={item}/>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </InputGroup.Prepend>
                <IMaskInput
                    mask={selectedItem ? selectedItem.phoneInfo.format : ''}
                    onChange={handleChangePhone}
                    value={phoneValue}
                    placeholder='Enter phone here'
                />
            </InputGroup>
        </div>
    );
};

const mapStateToProps = (state) => ({
    countries: state.countries,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(countryActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
