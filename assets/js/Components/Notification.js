import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Notifications from 'react-notification-system-redux'

class Notification extends React.Component {

    render() {
        const {notifications} = this.props

        //Optional styling
        const style = {
            NotificationItem: { // Override the notification item
                DefaultStyle: { // Applied to every notification, regardless of the notification level
                    margin: '10px 5px 2px 1px',
                    transition: '0.45s ease-in-out',
                },

                success: { // Applied only to the success notification item
                    //color: 'red'
                }
            }
        }

        return (
            <Notifications
                notifications={notifications}
                style={style}
            />
        )
    }
}

Notification.contextTypes = {
    store: PropTypes.object
};

Notification.propTypes = {
    notifications: PropTypes.array
};

export default connect(
    state => ({ notifications: state.notifications })
)(Notification)