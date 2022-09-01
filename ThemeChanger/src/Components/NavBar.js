import React from 'react'
import {useContext} from 'react'
import { ThemeChanger } from '../ThemeChanger'
function NavBar() {
  return (
    <>
        <div>NavBar</div>
        <div>⬇</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <Options></Options>
    </> 
  )
}

function Options() {
    let theme = useContext(ThemeChanger);
    return (
        <div class = {theme}>Option</div>
    )
}
export default NavBar