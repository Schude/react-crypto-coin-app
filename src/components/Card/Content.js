import React from 'react'
import { Span } from './styles'
const Content = (props) => {
    return (
        <Span clr={props.clr} >
            {props.text}
        </Span>
    )
}

export default Content
