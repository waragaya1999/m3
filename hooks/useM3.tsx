import React from "react"
import { useState } from "react"
import { Gmail } from "../components/Gmail/container"
import { GoogleCalendar } from "../components/GoogleCalendar/container"

export const useM3 = () => {
  const defaultX = window.innerWidth - 68
  const defaultY = window.innerHeight - 89
  const [gmailX, setGmailX] = useState<number>(defaultX)
  const [gmailY, setGmailY] = useState<number>(defaultY)
  const [googleCalendarX, setGoogleCalendarX] = useState<number>(defaultX)
  const [googleCalendarY, setGoogleCalendarY] = useState<number>(defaultY)
  const [tempGmailX, setTempGmailX] = useState<number>(defaultX)
  const [tempGmailY, setTempGmailY] = useState<number>(defaultY)
  const [tempGoogleCalendarX, setTempGoogleCalendarX] =
    useState<number>(defaultX)
  const [tempGoogleCalendarY, setTempGoogleCalendarY] =
    useState<number>(defaultY)
  const [startX, setStartX] = useState<number>(0)
  const [startY, setStartY] = useState<number>(0)
  const [panelList, setPanelList] = useState<string[]>([])
  const [bodyEle, setBodyEle] = useState<JSX.Element>(<h1>m3</h1>)
  const onDragStartX = (e: React.DragEvent<HTMLDivElement>) => {
    setStartX(e.clientX)
    console.log("X")
  }
  const onDragStartY = (e: React.DragEvent<HTMLDivElement>) => {
    setStartY(e.clientY)
    console.log("Y")
  }
  const onDragEndGmailX = (e: React.DragEvent<HTMLDivElement>) => {
    const diff = e.clientX - startX
    if (tempGmailX + diff > defaultX) {
      setGmailX(defaultX)
      setTempGmailX(defaultX)
    } else {
      setGmailX(tempGmailX + diff)
      setTempGmailX(tempGmailX + diff)
    }
  }
  const onDragEndGmailY = (e: React.DragEvent<HTMLDivElement>) => {
    const diff = e.clientY - startY
    if (tempGmailY + diff > defaultY) {
      setGmailY(defaultY)
      setTempGmailY(defaultY)
    } else {
      setGmailY(tempGmailY + diff)
      setTempGmailY(tempGmailY + diff)
    }
  }
  const onDragEndGoogleCalendarX = (e: React.DragEvent<HTMLDivElement>) => {
    const diff = e.clientX - startX
    if (tempGoogleCalendarX + diff > defaultX) {
      setGoogleCalendarX(defaultX)
      setTempGoogleCalendarX(defaultX)
    } else {
      setGoogleCalendarX(tempGoogleCalendarX + diff)
      setTempGoogleCalendarX(tempGoogleCalendarX + diff)
    }
  }
  const onDragEndGoogleCalendarY = (e: React.DragEvent<HTMLDivElement>) => {
    const diff = e.clientY - startY
    if (tempGoogleCalendarY + diff > defaultY) {
      setGoogleCalendarY(defaultY)
      setTempGoogleCalendarY(defaultY)
    } else {
      setGoogleCalendarY(tempGoogleCalendarY + diff)
      setTempGoogleCalendarY(tempGoogleCalendarY + diff)
    }
  }
  const onDragGmailX = (e: React.DragEvent<HTMLDivElement>) => {
    setGmailX(tempGmailX + e.clientX - startX)
  }
  const onDragGmailY = (e: React.DragEvent<HTMLDivElement>) => {
    setGmailY(tempGmailY + e.clientY - startY)
  }
  const onDragGoogleCalendarX = (e: React.DragEvent<HTMLDivElement>) => {
    setGoogleCalendarX(tempGoogleCalendarX + e.clientX - startX)
  }
  const onDragGoogleCalendarY = (e: React.DragEvent<HTMLDivElement>) => {
    setGoogleCalendarY(tempGoogleCalendarY + e.clientY - startY)
  }
  const callPanel = (name: string) => {
    let tempArray = panelList.slice()
    let body = <></>
    if (!panelList.includes(name)) {
      tempArray.push(name)
    } else {
      delete tempArray[tempArray.indexOf(name)]
    }
    tempArray = tempArray.filter((v) => v)
    if (tempArray.length == 0) {
      body = <h1>m3</h1>
    } else {
      if (tempArray.includes("Gmail")) {
        body = (
          <>
            <Gmail />
          </>
        )
        if (tempArray.includes("GoogleCalendar")) {
          body = (
            <>
              <Gmail />
              <GoogleCalendar />
            </>
          )
        }
      } else if (tempArray.includes("GoogleCalendar")) {
        body = (
          <>
            <GoogleCalendar />
          </>
        )
      }
    }
    setBodyEle(body)
    setPanelList(tempArray)
    console.log(tempArray.length)
  }
  return {
    gmailX,
    gmailY,
    googleCalendarX,
    googleCalendarY,
    onDragGmailX,
    onDragGmailY,
    onDragGoogleCalendarX,
    onDragGoogleCalendarY,
    onDragStartX,
    onDragStartY,
    onDragEndGmailX,
    onDragEndGmailY,
    onDragEndGoogleCalendarX,
    onDragEndGoogleCalendarY,
    callPanel,
    panelList,
    bodyEle,
  } as const
}
