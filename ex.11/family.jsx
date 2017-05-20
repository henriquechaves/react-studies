import React from 'react'

// React.cloneElement possui dois parametros o segundo parametro 
// é aquele que vc quer transmitir para os filhos dessa tag
export default props => (
    <div>
        <h1>Família</h1>
        { React.cloneElement(props.children, { ...props }) }
    </div>
)