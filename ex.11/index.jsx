import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'

// Não suporta mais de um elemento filho
ReactDOM.render(
    <Family lastName='Chaves'>
        <Member name='Henrique' />
    </Family>
    , document.getElementById('app'))