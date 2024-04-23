import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={progress:0}
  apiKey=import.meta.env.VITE_NEWS_API;
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress } apiKey={this.apiKey}  key="general" pageSize={12} country='in' category='general' />} />

            <Route exact path="/general" element={<News setProgress={this.setProgress } apiKey={this.apiKey}  key="general" pageSize={12} country='in' category='general' />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress } apiKey={this.apiKey}  key="entertainment" pageSize={12} country='in' category='entertainment' />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress } apiKey={this.apiKey}  key="business" pageSize={12} country='in' category='business' />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress } apiKey={this.apiKey}  key="health" pageSize={12} country='in' category='health' />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress } apiKey={this.apiKey}  key="science" pageSize={12} country='in' category='science' />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress } apiKey={this.apiKey}  key="sports" pageSize={12} country='in' category='sports' />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress } apiKey={this.apiKey}  key="technology" pageSize={12} country='in' category='technology' />} />

          </Routes>
        </Router>


      </div>
    )
  }
}
