import React from 'react'

export default function Alert(props) {

  const capitalize =(word)=>{
    // it will make the word to the lower case first
    let newWord= word.toLowerCase();
    // newWord.chaeAt(0) means it will thke the first letter which is at the 0th position and make it to the uppercase, then newWord.slice(1) measse it will remove the first letter of the newWord which is in the lower case and + means it wil concatinate the rest of the lower case letters with the first letter which is in the uppercase and then make the whole word
    return (newWord.charAt(0).toUpperCase() + newWord.slice(1));
  }
  return (
    // && means if props.alert gets evaluted the the next whole div part will also get ecaluted as it's happening here and if props.alert doenm't get evaluted the the next div part eill aslo not getls evaluted

    // we can also say that idf props.alert is not null then do the div par executed, this is happening beczuse of all the jsx will be converted to javascript calls
      props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{capitalize(props.alert.msg)}
      </div>
  )
}
