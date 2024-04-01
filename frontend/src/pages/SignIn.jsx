import React from 'react'
import "../styles/SignIn.css"

export default function SignIn() {
  return (
    <div className="box">
        <h3>Sign in to your account</h3>
              <form action="" method = "">
                  <table>
                    <tr>
                    <td><label>Username:</label></td>
                    </tr>
                    <tr>
                    <td><input type="text" placeholder='Enter Your Username'/></td>
                    </tr>
                    <tr>
                    <td style={{display:"flex" ,justifyContent:"space-between"}}>
                      <label>Password:</label>
                      <label><a href="" className="forgot-password-link">Forgot Password?</a></label>
                    </td>
                    </tr>
                    <tr>
                    <td><input type="password" name="" id="" placeholder='Enter Your Password'/></td>
                    </tr>
                    <tr>
                    <td style={{textAlign : "center"}}>
                      <input type="submit" />
                      </td>
                    </tr>
                    </table>
              </form>
    </div>
  )
}
