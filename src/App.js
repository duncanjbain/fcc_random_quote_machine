import React from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';


{/* define API URL and the default query which will be random */}
const API_URL = 'https://api.quotable.io/';
const DEFAULT_QUERY = 'random';

class App extends React.Component {
  constructor(props) {
    super(props);

{/* initialise state, empty quote */}
    this.state = {
      quote: []
    }
{/* need to bind FetchRandomQuote to this */}
    this.FetchRandomQuote = this.FetchRandomQuote.bind(this);

  }

// fetch random quote using API url and default query, uses fetch and promises to get data and passes back to state
  FetchRandomQuote = () => {
    fetch(API_URL + DEFAULT_QUERY)
      .then(response => response.json())
      .then((data) => {
        this.setState({ quote: data })
        console.log(data)
      })
      .catch(console.log)
  }
// when component is mounted imemdiately fetch a new random quote
  componentDidMount() {
    this.FetchRandomQuote();
  }

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
                <p className="mb-0 mt-2 font-italic" id='text'>{this.state.quote.content}</p> // fetch quote from state
                <footer className="blockquote-footer pt-4 mt-4 border-top pb-3" id='author'>{this.state.quote.author} // fetch quote author from state
                </footer>

              </blockquote>

            </div>
          </div>
          <div className="row pb-5">
            <div className="col-lg-6 mx-auto align-middle text-center">
              <a href={`https://twitter.com/intent/tweet?text=` + this.state.quote.content} className="text-info" 
              id="tweet-quote"><i class="fab fa-twitter fa-lg"></i> Tweet this quote!</a> // add quote to Twitter URL
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-lg-6 mx-auto align-middle text-center">
            // when button is clicked call the FetchRandomQuote function
              <button className="btn btn-primary" id="new-quote" onClick={this.FetchRandomQuote}>New Quote!</button> 
            </div>
          </div>
        </div>
      </section>
    )
  };
}



export default App;
