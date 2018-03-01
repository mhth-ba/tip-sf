import React from 'react'
import {connect} from 'react-redux'
import { poznamkaUpdate } from '../reducers/dodavkatepla'

const poznamkaForm = (props) => {
    const { poznamka, poznamkaUpdate } = props
    const handleInputChange = (evt) => {
        const val = evt.target.value
        poznamkaUpdate(val)
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={poznamka}
                />
            </form>
        </div>
    )
}

export default connect(
    (state) => ({ poznamka: state.poznamka }),
    { poznamkaUpdate }
)(poznamkaForm)