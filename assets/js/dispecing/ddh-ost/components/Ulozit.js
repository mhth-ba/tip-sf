import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import { updateOSTHlavnyRequest } from '../actions'

const UlozitButton = ({ hlavny, updateOSTHlavnyRequest }) => {
  const handleSave = () => {
    if (!hlavny || !hlavny.id) {
      alert('Žiadny záznam na aktualizáciu.')
      return
    }
    // Pick only the editable keys.
    const allowedKeys = [
      'dispecer_1',
      'dispecer_2',
      'poruchovka_1',
      'poruchovka_2',
      'teplota_letisko',
      'teplota_tpv',
      'teplota_tpz',
      'doplnovanie_tpv',
      'doplnovanie_tpz'
    ];
    const updateData = { id: hlavny.id };
    allowedKeys.forEach(key => {
      updateData[key] = hlavny[key];
    });
    updateOSTHlavnyRequest(updateData);
  }

  return (
    <div className="text-center mt-3">
      <Button
        color="primary"
        onClick={handleSave}
        disabled={!hlavny || !hlavny.id || hlavny.loading}
      >
        <FontAwesome name="save" /> Uložiť
      </Button>
    </div>
  )
}

const mapStateToProps = state => ({
  hlavny: state.hlavny
})

const mapDispatchToProps = {
  updateOSTHlavnyRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(UlozitButton)
