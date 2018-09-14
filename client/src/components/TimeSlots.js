import React from 'react';
import PropTypes from 'prop-types';
import DataForm from './DataForm'
import {Collection, Button, Modal} from 'react-materialize'

const TimeSlots = ({slotState, saveInfo}) => {
    console.log(slotState)
    const getUserInfo = (name, phoneNumber) => {
        console.log(name, phoneNumber)
    }
    const renderSlots = () => {
        return slotState.map((slot, i) => {
            return <Modal key={i} waves='light' header='Enter Your Information'
                    trigger={<Button>{slot.time}</Button>}>
                        <DataForm name={slot.name} phoneNumber={slot.phoneNumber} getUserInfo={getUserInfo}/>
                </Modal>
        })
    }

    return (
        <Collection header='Time Slots'>
            {renderSlots()}
        </Collection>
    );
};

TimeSlots.propTypes = {
    slotState: PropTypes.array.isRequired,
    saveInfo: PropTypes.func.isRequired
};

export default TimeSlots;