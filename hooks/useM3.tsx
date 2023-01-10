import React from "react"
import { useState } from "react"

export const useM3 = () => {
  const defaultX = window.innerWidth - 68
  const defaultY = window.innerHeight - 89
  const [mainX, setMainX] = useState<number>(defaultX)
  const [mainY, setMainY] = useState<number>(defaultY)
  const [tempX, setTempX] = useState<number>(defaultX)
  const [tempY, setTempY] = useState<number>(defaultY)
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
  const onDragEndX = (e: React.DragEvent<HTMLDivElement>) => {
    const diff = e.clientX - startX
    if (tempX + diff > defaultX) {
      setMainX(defaultX)
      setTempX(defaultX)
    } else {
      setMainX(tempX + diff)
      setTempX(tempX + diff)
    }
  }
  const onDragEndY = (e: React.DragEvent<HTMLDivElement>) => {
    const diff = e.clientY - startY
    if (tempY + diff > defaultY) {
      setMainY(defaultY)
      setTempY(defaultY)
    } else {
      setMainY(tempY + diff)
      setTempY(tempY + diff)
    }
  }
  const onDragX = (e: React.DragEvent<HTMLDivElement>) => {
    setMainX(tempX + e.clientX - startX)
  }
  const onDragY = (e: React.DragEvent<HTMLDivElement>) => {
    setMainY(tempY + e.clientY - startY)
  }
  const callPanel = (name: string) => {
    let tempArray = panelList.slice()
    if (!panelList.includes(name)) {
      tempArray.push(name)
    } else {
      delete tempArray[tempArray.indexOf(name)]
    }
    tempArray = tempArray.filter((v) => v)
    setPanelList(tempArray)

    console.log(bodyEle)
  }
}
