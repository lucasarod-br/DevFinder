import React from 'react'
import styled from 'styled-components'
import { H1, H4 } from '../../../Texts'
const StyledNumber = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


function Number({name, value}) {
  return (
    
<div>
<H4>{name}</H4>
<H1>{value}</H1>
</div>
  )
}

export default Number