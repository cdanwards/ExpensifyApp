import PropTypes from 'prop-types';

export default PropTypes.shape({
    // Primary login of participant
    login: PropTypes.string,

    // Account ID of participant
    accountID: PropTypes.number,

    // Display Name of participant
    displayName: PropTypes.string,

    // Avatar url of participant
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    /** First Name of the participant */
    firstName: PropTypes.string,
});
