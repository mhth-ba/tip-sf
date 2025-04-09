import React from 'react'
import { Alert } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

const NoDataAlert = () => (
  <Alert color="info">
    <FontAwesome name="info-circle" />{' '}
    Pre tento deň neexistuje záznam v databáze
  </Alert>
)

export default NoDataAlert
