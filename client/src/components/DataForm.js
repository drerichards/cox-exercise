import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Input, Icon, Button} from 'react-materialize'

class DataForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: props.data.time,
            name: props.data.name,
            phoneNumber: props.data.phoneNumber,
            index: props.data.index
        }
    }

    updateName(val){
        val.length > 2 || isNaN(val) === true ? this.setState({name: val}) : ''
    }
    updatePhoneNumber(val){
        val.length === 7 || isNaN(val) === false ? this.setState({phoneNumber: val}) : ''
    }

    render() {
        const {time, name, phoneNumber, index} = this.state
        return (
            <Row>
                <Input s={6} label="First Name (Minimum 3 Characters)" validate defaultValue={name} 
                    onChange={e => {this.updateName(e.target.value)}}><Icon>account_circle</Icon></Input>
                <Input s={6} label="Telephone (Required: 7 Digits)" validate type='tel' defaultValue={phoneNumber === 0 ? '' : phoneNumber}
                    onChange={e => {this.updatePhoneNumber(e.target.value)}}><Icon>phone</Icon></Input>
                <div className='error-msg'></div>
                {name.length < 3 || phoneNumber.length === undefined ? <Button disabled>Save</Button> : 
                <Button className='modal-close' onClick={() => {
                    this.props.getUserInfo(time, name, phoneNumber, index)}}>Save</Button>}
            </Row>
        );
    }
}

DataForm.propTypes = {
    data: PropTypes.object.isRequired,
    getUserInfo: PropTypes.func.isRequired
};

export default DataForm;