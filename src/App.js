import React, { Component } from 'react'
import './App.css'
import Calculate from './Layout/Calculate'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  state = {
    year: 0,
    month: 0,
    gender: 0,
    times: 0,
    edlevel: 0,
    creditscore: null,
    yearscore: 0,
    calculate: false
  }

  handlerYear = event => {
    this.setState({ year: event.target.value })
  }

  handlerMonth = event => {
    this.setState({ month: event.target.value })
  }

  handlerGender = (event, data) => {
    this.setState({ gender: data.value })
  }

  handlerTimes = event => {
    this.setState({ times: event.target.value })
  }

  handlerEdlevel = (event, data) => {
    this.setState({ edlevel: data.value })
  }

  calculateCreditScore = () => {
    const { year, month, gender, times, edlevel } = this.state
    let yearMonth,
      yearscore,
      timescore,
      edscore,
      result = 0

    yearMonth = parseInt(year, 10) + parseInt(month, 10) / 12
    if (yearMonth >= 0 && yearMonth <= 3.5) {
      yearscore = 0
    } else if (yearMonth > 3.5 && yearMonth <= 6) {
      yearscore = 0.4
    } else if (yearMonth > 6 && yearMonth <= 8) {
      yearscore = 0.8
    } else if (yearMonth > 8) {
      yearscore = 1
    }
    if (times > 8) {
      timescore = 0
    } else if (times >= 6 && times <= 8) {
      timescore = 0.4
    } else if (times >= 4 && times < 6) {
      timescore = 0.8
    } else if (times < 4) {
      timescore = 1
    }
    if (edlevel === 0 || edlevel === 1) {
      edscore = 0
    } else if (edlevel === 2) {
      edscore = 0.5
    } else if (edlevel === 3 || edlevel === 4) {
      edscore = 1
    }

    result = yearscore + 0.5 * gender + timescore + 0.5 * edscore
    console.log(result)
    if (result >= 0 && result <= 1) {
      this.setState({ creditscore: 'E' })
    } else if (result > 1 && result <= 2) {
      this.setState({ creditscore: 'D' })
    } else if (result > 2 && result <= 3) {
      this.setState({ creditscore: 'C' })
    }
    this.setState({ calculate: true })
  }

  render() {
    // console.log(1 + 1)
    return (
      <Calculate
        handlerYear={this.handlerYear}
        handlerMonth={this.handlerMonth}
        handlerGender={this.handlerGender}
        handlerTimes={this.handlerTimes}
        handlerEdlevel={this.handlerEdlevel}
        calculateCreditScore={this.calculateCreditScore}
        calculate={this.state.calculate}
        creditscore={this.state.creditscore}
      />
    )
  }
}

export default App
