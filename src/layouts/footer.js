import React, { Component } from 'react'

let year = new Date().getFullYear();

export default class footer extends Component {
  render() {
    return (    
        <footer className='footer'>
            <div className='container m-flex'>        
            <div className='col-md-3'>
                <p>&copy; Glen Harding {year}</p>
            </div>
            <div className='col-md-6'>
                <a href="https://www.fca.org.uk/">Authorised and regulated by the Financial Conduct Authority. Authorisation number 000000</a>
            </div>
            <div className='col-md-3'>
                <p>Registered charity number 1000000</p>
            </div>
            </div>
        </footer>   
    )
  }
}
