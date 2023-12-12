import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return(
    <footer className="bg-body-tertiary text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">

          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{backgroundColor: "#3b5998"}}
            href="#!"
            role="button"
          ><i className="fab fa-facebook-f"></i></Link>

          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{backgroundColor: "#55acee"}}
            href="#!"
            role="button"
          ><i className="fab fa-twitter"></i></Link>


          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{backgroundColor: "#dd4b39"}}
            href="#!"
            role="button"
          ><i className="fab fa-google"></i></Link>


          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{backgroundColor:" #ac2bac"}}
            href="#!"
            role="button"
          ><i className="fab fa-instagram"></i></Link>


          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{backgroundColor:' #0082ca'}}
            href="#!"
            role="button"
          ><i className="fab fa-linkedin-in"></i></Link>

          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{backgroundColor:" #333333"}}
            href="#!"
            role="button"
          ><i className="fab fa-github"></i></Link>
        </section>

      </div>

      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2020 Copyright:
        <Link className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
      </div>
    </footer>
  )
}

export default Footer