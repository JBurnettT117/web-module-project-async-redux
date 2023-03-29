import  { connect } from 'react-redux';
import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { getGifs } from './actions';
import GifForm from "./GifForm";
import GifList from "./GifList";
import data from "./gifs"; 

function App(props) {

  const { loading, error, getGifs } = props;

  useEffect(() => {
    getGifs("planes");
  }, []);

  return (
    <div className="App">
      <div className='header'>
        <h1>Search for Gifs</h1>
        <GifForm />
      </div>

      {
        (error !== "") && <h3>{error}</h3>
      }

      {
        loading ? <h3>We are loading</h3> : <div className='gifholder' ><GifList/></div>
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

export default connect(mapStateToProps, { getGifs })(App);