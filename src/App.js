import  { connect } from 'react-redux';
import React from 'react';
import './App.css';
import GifForm from "./GifForm";
import GifList from "./GifList";
import data from "./gifs"; 

function App(props) {

  const { loading } = props;
  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      <GifForm />

      {
        loading ? <h3>We are loading</h3> : <GifList/>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App);