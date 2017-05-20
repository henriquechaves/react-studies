import React from 'react'
import ReactDOM from 'react-dom'

import { Primeiro, Segundo } from './component'

//div agrupa os dois componentes em um apenas
ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
, document.getElementById('app'))