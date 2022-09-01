import React from 'react'
const ContextMessage = React.createContext();

function ContextAPI() {
  return (
    <ContextMessage.Provider value = "Hello From GrandPa">
        <GrandParent></GrandParent>
    </ContextMessage.Provider>
  )
}

function GrandParent() {

    return (
        <div>GrandPa
            <Parent></Parent>
        </div>
    )
}

function Parent() {
    return (
        <>
        <Children>

        </Children>
        </>
    )
}

function Children() {
    const message = React.useContext(ContextMessage);
    return (
        <div>
            Here is message  {message}
        </div>
    )
}
export default ContextAPI