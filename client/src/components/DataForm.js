import React from 'react';
import PropTypes from 'prop-types';
import {Row, Input, Icon} from 'react-materialize'

const DataForm = ({name, phoneNumber}) => {
    return (
        <Row>
            <Input s={6} label="First Name" validate defaultValue={name}><Icon>account_circle</Icon></Input>
            <Input s={6} label="Telephone" validate type='tel' defaultValue={phoneNumber}><Icon>phone</Icon></Input>
        </Row>
    );
};

DataForm.propTypes = {
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
};

export default DataForm;