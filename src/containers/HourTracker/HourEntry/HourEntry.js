import React from 'react';
import PropTypes from 'prop-types';

const HourEntry = ({ title, hours, onHoursEdit, onTitleEdit }) => {
  return (
    <div className="entry">
      Title:
        <input className="id-title-input" value={title} onChange={onTitleEdit} />
      Hours:
        <input className="id-hours-input" value={hours} onChange={onHoursEdit} type="number" />
    </div>
    // TODO: add Rate input wired up to onRateEdit
  );
}

HourEntry.propTypes = {
  title: PropTypes.string.isRequired,
  hours: PropTypes.number.isRequired,
  onHoursEdit: PropTypes.func.isRequired,
  onTitleEdit: PropTypes.func.isRequired,
  // TODO: add onRateEdit
};

export default HourEntry;