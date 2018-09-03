import React, { Component} from 'react'

const BoardContext = React.createContext()

export const BoardConsumer = BoardContext.Consumer

export function withBoard(Component) {
    function BoardAwareComponent (props) {
        return <BoardConsumer>{state => <Component {...props} {...state} />}</BoardConsumer>
    }
    BoardAwareComponent.displayName = `BoardAware(${Component.displayName
    || Component.name
    || 'Component'})`
    return BoardAwareComponent
}