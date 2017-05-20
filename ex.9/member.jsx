import React from 'react'

//Arrow function não tem chaves, se tiver necessariamente tem que ter um return
export default props => (
    <div>{props.name} <strong>{props.lastName}</strong></div>
)