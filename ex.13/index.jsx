import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Chaves'>
        <Member name='Henrique' />
        <Member name='Ricardo' />
        <Member name='Miriam' />
         <Member name='Livia' />
    </Family>
, document.getElementById('app'))