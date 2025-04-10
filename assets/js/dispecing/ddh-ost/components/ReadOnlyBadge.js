import React from 'react'
import { Badge } from 'reactstrap'
import moment from 'moment'

const ReadOnlyBadge = ({ datum }) => {
  // Check if the date is in the past
  const isPastDate = datum && moment.unix(datum).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')

  return (
    <Badge color="light" className="text-primary">
      {isPastDate ? 'Historický záznam' : 'Iba zobrazenie'}
    </Badge>
  )
}

export default ReadOnlyBadge
