import  { connect } from 'react-redux';
import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { fetchStart } from './actions';
import GifForm from "./GifForm";
import GifList from "./GifList";
import data from "./gifs"; 

function App(props) {

  const { loading, error } = props;

  console.log("props:",props);

  useEffect(() => {
    props.fetchStart();
  }, []);

  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      <GifForm />

      {
        (error !== "") && <h3>{error}</h3>
      }

      {
        loading ? <h3>We are loading</h3> : <GifList/>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapActionsToProps = () => {
  return {
    fetchStart
  }
}

export default connect(mapStateToProps, { fetchStart })(App);