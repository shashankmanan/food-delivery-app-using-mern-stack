import React from 'react'

export default function Contact() {
  return (
    <div>
      <h1>Reach out to Us!!</h1>
      <h3>Address : 5th street 9th phase, kukatpally ,Hyderabad 500073</h3>
      <h3>Call us at : 434838482834</h3>
      <h2>Send a message:</h2>
      <form action="">
        <table style={{marginLeft:"auto",marginRight:"auto"}}>
          <tr>
          <td><label htmlFor="">Name:</label></td>
            <td><input type="text" name="" id="" placeholder="Enter Your Name" style={{width:"232px"}}/></td>
          </tr>
          <tr>
            <td><label htmlFor="">Subject:</label></td>
            <td><textarea name="" id="" cols="30" rows="10" placeholder='Your Request...'></textarea></td>
          </tr>
          <tr>
            <td></td>
            <td><input type="submit" /></td>
          </tr>
        </table>
      </form>
    </div>
  )
}
