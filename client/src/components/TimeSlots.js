import React from 'react';
import PropTypes from 'prop-types';
import {Collection, CollectionItem, Button} from 'react-materialize'

const TimeSlots = ({slotState}) => {
    const renderSlots = () => {
        console.log(slotState[0].time)
        return slotState.map((slot, i) => {
            return <Button key={i} waves='light'>
                    <CollectionItem onClick={() => {console.log('ggg')}}>{slot.time}</CollectionItem>
                </Button>
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