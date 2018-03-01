import React from 'react'
import PropTypes from 'prop-types'
import DropzoneComponent from 'react-dropzone-component'
import Notifications from 'react-notification-system-redux'
import { connect } from 'react-redux'
import {
    fetchSpravaRequest,
    loadMainEntryRequest,
    processUploadedFileRequest
} from '../../../services/ActionsCenaTepla'

const componentConfig = {
    iconFiletypes: ['.xls', '.xlsx'],
    showFiletypeIcon: true,
    postUrl: $('#uploader-excel').data('endpoint')
}

const config = {
    dt: {
        config: componentConfig,
        djsConfig: {
            autoProcessQueue: true,
            dictDefaultMessage: `Excel súbor obsahujúci <u>dodané teplo</u> presuňte sem.<br/>
                Súbor musí spĺňať nižšie popísanú štruktúru:<br/><br/>
                Prvý riadok je hlavička tabuľky. Musí mať <u>aspoň</u> tieto názvy stĺpcov:
                ID | SCZT_V_kWh | SCZT_V_kW | SCZT_Z_kWh | SCZT_Z_kW<br/>
                Stĺpec <u>ID</u> označuje zdroje nasledovne:
                1 - TpV | 2 - VhJ | 3 - TpZ | 4 - PK | 5 - PPC | 6 - Slovnaft | 7 - Cogen West |
                11 - Zdroj | 12 - Primár | 13 - OST | 14 - Sekundár<br/>
                Karta musí mať názov <u>DT</u>`,
            dictInvalidFileType: 'Nemôžete nahrať súbory tohto typu. Vyžaduje sa excel (.xls .xlsx)',
            acceptedFiles: '.xls,.xlsx'
        },
        eventHandlers: {
            //addedfile: (file) => console.log(file)
        }
    },
    sn: {
        config: componentConfig,
        djsConfig: {
            autoProcessQueue: true,
            dictDefaultMessage: `Excel súbor obsahujúci <u>skutočné náklady na teplo a elektrinu</u> presuňte sem.<br/>
                Súbor musí spĺňať nižšie popísanú štruktuúru:<br/><br/>
                Stĺpce: 2 - ID | 3 - Názov kalkulačnej položky<br/>
                4 - TpV | 5 - TpZ | 6 - VhJ | 7 - PK | 8 - Primár | 9 - OST | 10 - Sekundár | 11 - Režijné náklady<br/>
                Karta musí mať názov <u>SN</u>`,
            dictInvalidFileType: 'Nemôžete nahrať súbory tohto typu. Vyžaduje sa excel (.xls .xlsx)',
            acceptedFiles: '.xls,.xlsx'
        },
        eventHandlers: {
            //addedfile: (file) => console.log(file)
        }
    }
}

class Vstupy extends React.Component {
    constructor (props) {
        super (props)

        this.handleAddedFile = this.handleAddedFile.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
    }

    handleAddedFile(file) {
        //console.log(file)
    }

    handleUpload(file, uploadtype) {
        const id = this.props.hlavny.id
        const original = file.name
        const filename = JSON.parse(file.xhr.response).filename

        const data = { id, uploadtype, original, filename }

        // console.dir(file)

        // this.props.fetchSpravaRequest()
        // this.props.loadMainEntryRequest(id)

        this.props.processUploadedFileRequest(data)

        this.context.store.dispatch(
            Notifications.info({
                title: 'Nahrávanie dokončené',
                message: 'Súbor bol odoslaný na server'
            })
        )
    }

    render() {
        const id = this.props.hlavny.id

        return (
            <div>
                <DropzoneComponent
                    {...config.dt}
                    /*djsConfig={{...config.dt.djsConfig, params: {
                        hlavny: id,
                        upload: 2
                    }}}*/
                    // 2 = skutocna dodavka tepla
                    eventHandlers={{
                        addedfile: (file) => this.handleAddedFile(file),
                        complete: (file, uploadtype) => this.handleUpload(file, 2)
                    }}
                />
                <br/>
                <DropzoneComponent
                    {...config.sn}
                    // 3 = skutocne naklady na teplo a elektrinu
                    eventHandlers={{
                        addedfile: (file) => this.handleAddedFile(file),
                        complete: (file, uploadtype) => this.handleUpload(file, 3)
                    }}
                />
            </div>
        )
    }
}

Vstupy.contextTypes = {
    store: PropTypes.object
}

export default connect(
    (state) => ({ hlavny: state.hlavny }),
    { fetchSpravaRequest, loadMainEntryRequest, processUploadedFileRequest }
)(Vstupy)
