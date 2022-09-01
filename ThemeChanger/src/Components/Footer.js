import React from 'react'
import { ThemeChanger } from '../ThemeChanger'
import {useContext} from 'react'
function Footer() {
  return (
      <>
        <div>Footer</div>
        <div>🔻 </div>
        <FooterText></FooterText>
      </>
      )
}

function FooterText() {
    let theme = useContext(ThemeChanger);
    return (
        <div class = {theme}> Here Is the Footer Text</div>
    )
}
export default Footer