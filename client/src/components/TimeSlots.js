import React from 'react';
import PropTypes from 'prop-types';
import DataForm from './DataForm'
import {Collection, Button, Modal} from 'react-materialize'

const TimeSlots = ({slotState, saveInfo}) => {
    const getUserInfo = (time, name, phoneNumber, index) => {
        saveInfo(time, name, phoneNumber, index)
    }
    const renderSlots = () => {
        return slotState.map((slot, i) => {
            return <Modal key={i} waves='light' header='Enter Your Information'
                    trigger={<Button className={slot.infoEntered ? 'red' : ''}>{slot.time}</Button>}>
                        <DataForm data={slot} getUserInfo={getUserInfo}/>
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