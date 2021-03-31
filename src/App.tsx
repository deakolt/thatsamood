import React from 'react';
import { useSelector, Provider } from 'react-redux'

import { getDaysSelector } from './selectors'
import { Day } from './types'
import { DayRow } from './components/DayRow'
import { DayForm } from './components/DayForm'


import './App.css';


function App() {
  const days: Day[] = useSelector(getDaysSelector)

  // const renderDays = () => {
  //   return days.map(day => {
  //     return <DayRow />
  //   })
  // }

  return (
      <DayForm />
  )
}

export default App;
