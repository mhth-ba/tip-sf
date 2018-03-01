import React from 'react'
import FontAwesome from 'react-fontawesome'

class Loader extends React.Component {
    render() {
        return (
            <div>
                <div className="loader-blur"
                     style={
                         this.props.loading ?
                             {
                                 filter: 'blur(1px)',
                                 WebkitFilter: 'blur(1px)',
                                 MozFilter: 'blur(1px)',
                                 OFilter: 'blur(1px)'
                             }
                             :
                             {
                                 filter: 'blur(0px)',
                                 WebkitFilter: 'blur(0px)',
                                 MozFilter: 'blur(0px)',
                                 OFilter: 'blur(0px)'
                             }
                     }
                >
                    { this.props.content }
                </div>
                <div className="loader-overlay"
                     style={
                         this.props.loading ?
                             {
                                 backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                 zIndex: 0
                             }
                             :
                             {
                                 backgroundColor: 'rgba(0, 0, 0, 0)',
                                 zIndex: -1
                             }
                     }
                />
                {/*<FontAwesome className="loader-spinner" name="spinner" size="3x" spin
                             style={
                                 this.props.loading ?
                                     { display: 'initial' }
                                     :
                                     { display: 'none '}
                             }
                />*/}
            </div>
        )
    }
}

export default Loader