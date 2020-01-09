import React from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';

class App extends React.Component {
  render() {
    return (
      <section className="py-5 row-100" id='quote-box'>
        <ReactFCCtest />
        <div className="container border bg-light rounded">
          <div className="row pt-5">
            <div className="col-lg-6 mx-auto">
              <header className="text-center pb-5">
                <h1 className="h2">FCC Random Quote Machine</h1>
                <p>This project is part of the Free Code Camp Front End Libraries certification<br />
                  Find the code on <a href="https://github.com/duncanjbain/fcc_random_quote_machine" className="font-italic text-info"><i className="fab fa-github"></i> Github</a></p>
              </header>
            </div>
          </div>


          <div className="row">
            <div className="col-lg-6 mx-auto">
              <blockquote className="blockquote bg-white p-5 shadow rounded">
                <div><i className="fa fa-quote-left"></i></div>
                <p className="mb-0 mt-2 font-italic" id='text'>{'"Quote Text Goes Here'}</p>
                <footer className="blockquote-footer pt-4 mt-4 border-top pb-3" id='author'>{'Author Goes Here'}
                </footer>

              </blockquote>

            </div>
          </div>


          <div className="row pb-5">
            <div className="col-lg-6 mx-auto align-middle text-center">
              <a href="https://twitter.com" className="text-info" id="tweet-quote"><i class="fab fa-twitter fa-lg"></i> Tweet this quote!</a>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-lg-6 mx-auto align-middle text-center">
              <button className="btn btn-primary" id="new-quote">New Quote!</button>
            </div>
          </div>


        </div>
      </section>
    )
  }
}

export default App;
