import React, { useEffect, useState } from 'react'
import '../App.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import EventList from '../components/EventList.jsx'
import imageData from '../assets/cat.js'
import SearchField from '../components/SearchField.jsx'

const events = [
  { id: 1, title: "Meeting", date: "2026-02-18", description: "About party in Aarhus" },
  { id: 2, title: "Summer planning", date: "2026-02-15", description: "About summer and next year" },
  { id: 3, title: "Telephone", date: "2024-02-15", description: "RING! RING!" },
  { id: 4, title: "LAPTOP", date: "2026-09-25", description: "idk really" },
]

function DefaultPage() {

  const [filterText, setFilterText] = useState(() => {
    const savedFilter = localStorage.getItem("filterTextStorage")
    return savedFilter ? savedFilter : "";
  })

  useEffect(() => {
    localStorage.setItem("filterTextStorage", filterText)
  }, [filterText])

  const sortedEvents = events.toSorted((a, b) => {
    return a.date.localeCompare(b.date, "en", {sensitivity: "base"})
  })

  const filteredEvents = events.filter(event => {
    return event.title.toLowerCase().includes(filterText.toLowerCase())
  })

  const handleInputChange = (event) => {
    setFilterText(event.target.value)
  }

  const memoHeader = React.memo(() => {
    return (
      <Header />
    )
  })

  return (
    <>
      <memoHeader />
      <SearchField handleInput={handleInputChange} filter={filterText} />
      <img src={imageData} alt="no image" />
      <EventList events={filteredEvents} />
      <Footer />
    </>
  )
}

export default DefaultPage
