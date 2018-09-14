import React from 'react';
import PropTypes from 'prop-types';
import DataForm from './DataForm'
import {Collection, Button, Modal} from 'react-materialize'

const TimeSlots = ({slotState}) => {
    const renderSlots = () => {
        return slotState.map((slot, i) => {
            return <Modal key={i} waves='light' header='Enter Your Information'
                    trigger={<Button>{slot.time}</Button>}
                    actions={[<Button>Save</Button>, 
                        <Button className='modal-action modal-close'>Close</Button>]}>
                        <DataForm name={slot.name} phoneNumber={slot.phoneNumber}/>
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
    slotState: PropTypes.array.isRequired
};

export default TimeSlots;