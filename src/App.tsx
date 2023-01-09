import { useState } from "react"
import "./reset.css"
import "./App.css"
export const App: React.FC = () => {
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
    handleBodyEle()
    console.log(bodyEle)
  }
  const gmailEle = (
    <div id="gmail" style={{ width: mainX, height: mainY }}>
      <div className="tabBar">
        <div className="tab">
          <img src="/Gmail_icon_(2020).png" alt=""></img>
          <p>Gmail</p>
        </div>
      </div>
      <div
        className="subY"
        draggable
        onDragEnd={onDragEndY}
        onDragStart={onDragStartY}
        onDrag={onDragY}
      ></div>
      <div
        className="subX"
        draggable
        onDragEnd={onDragEndX}
        onDragStart={onDragStartX}
        onDrag={onDragX}
      ></div>
      <div
        className="tabBody"
        style={{ width: mainX - 10, height: mainY - 50 }}
      >
        <ul className="mails">
          <li className="mail">
            <ul className="oneMail">
              <li className="gmailCheckBox">
                <input type={"checkbox"}></input>
              </li>
              <li className="gmailSender">mochimochidaifucu</li>
              <li className="gmailLabel">labellabellabel</li>
              <li className="gmailBody">bodybodybody</li>
              <li className="gmailTimeStamp">2022/1/1</li>
            </ul>
          </li>
          <li className="mail">
            <ul className="oneMail">
              <li className="gmailCheckBox">
                <input type={"checkbox"}></input>
              </li>
              <li className="gmailSender">mochimochidaifucu</li>
              <li className="gmailLabel">labellabellabel</li>
              <li className="gmailBody">bodybodybody</li>
              <li className="gmailTimeStamp">2022/1/1</li>
            </ul>
          </li>
          <li className="mail">
            <ul className="oneMail">
              <li className="gmailCheckBox">
                <input type={"checkbox"}></input>
              </li>
              <li className="gmailSender">mochimochidaifucu</li>
              <li className="gmailLabel">labellabellabel</li>
              <li className="gmailBody">bodybodybody</li>
              <li className="gmailTimeStamp">2022/1/1</li>
            </ul>
          </li>
          <li className="mail">
            <ul className="oneMail">
              <li className="gmailCheckBox">
                <input type={"checkbox"}></input>
              </li>
              <li className="gmailSender">mochimochidaifucu</li>
              <li className="gmailLabel">
                labellabellabellabellabellabellabellabellabellabel
                labellabellabellabellabel
              </li>
              <li className="gmailBody">bodybodybody</li>
              <li className="gmailTimeStamp">2022/1/1</li>
            </ul>
          </li>
          <li className="mail">
            <ul className="oneMail">
              <li className="gmailCheckBox">
                <input type={"checkbox"}></input>
              </li>
              <li className="gmailSender">mochimochidaifucu</li>
              <li className="gmailLabel">labellabellabellabel</li>
              <li className="gmailBody">bodybodybody</li>
              <li className="gmailTimeStamp">2022/1/1</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
  const handleBodyEle = () => {
    if (panelList.includes("gmail")) {
      setBodyEle(
        <div id="gmail" style={{ width: mainX, height: mainY }}>
          <div className="tabBar">
            <div className="tab">
              <img src="/Gmail_icon_(2020).png" alt=""></img>
              <p>Gmail</p>
            </div>
          </div>
          <div
            className="subY"
            draggable
            onDragEnd={onDragEndY}
            onDragStart={onDragStartY}
            onDrag={onDragY}
          ></div>
          <div
            className="subX"
            draggable
            onDragEnd={onDragEndX}
            onDragStart={onDragStartX}
            onDrag={onDragX}
          ></div>
          <div
            className="tabBody"
            style={{ width: mainX - 10, height: mainY - 50 }}
          >
            <ul className="mails">
              <li className="mail">
                <ul className="oneMail">
                  <li className="gmailCheckBox">
                    <input type={"checkbox"}></input>
                  </li>
                  <li className="gmailSender">mochimochidaifucu</li>
                  <li className="gmailLabel">labellabellabel</li>
                  <li className="gmailBody">bodybodybody</li>
                  <li className="gmailTimeStamp">2022/1/1</li>
                </ul>
              </li>
              <li className="mail">
                <ul className="oneMail">
                  <li className="gmailCheckBox">
                    <input type={"checkbox"}></input>
                  </li>
                  <li className="gmailSender">mochimochidaifucu</li>
                  <li className="gmailLabel">labellabellabel</li>
                  <li className="gmailBody">bodybodybody</li>
                  <li className="gmailTimeStamp">2022/1/1</li>
                </ul>
              </li>
              <li className="mail">
                <ul className="oneMail">
                  <li className="gmailCheckBox">
                    <input type={"checkbox"}></input>
                  </li>
                  <li className="gmailSender">mochimochidaifucu</li>
                  <li className="gmailLabel">labellabellabel</li>
                  <li className="gmailBody">bodybodybody</li>
                  <li className="gmailTimeStamp">2022/1/1</li>
                </ul>
              </li>
              <li className="mail">
                <ul className="oneMail">
                  <li className="gmailCheckBox">
                    <input type={"checkbox"}></input>
                  </li>
                  <li className="gmailSender">mochimochidaifucu</li>
                  <li className="gmailLabel">
                    labellabellabellabellabellabellabellabellabellabel
                    labellabellabellabellabel
                  </li>
                  <li className="gmailBody">bodybodybody</li>
                  <li className="gmailTimeStamp">2022/1/1</li>
                </ul>
              </li>
              <li className="mail">
                <ul className="oneMail">
                  <li className="gmailCheckBox">
                    <input type={"checkbox"}></input>
                  </li>
                  <li className="gmailSender">mochimochidaifucu</li>
                  <li className="gmailLabel">labellabellabellabel</li>
                  <li className="gmailBody">bodybodybody</li>
                  <li className="gmailTimeStamp">2022/1/1</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>,
      )
    } else {
      setBodyEle(<h1>m3</h1>)
    }
  }

  return (
    <>
      <header>
        <img src="/logo.svg" alt=""></img>
      </header>
      <div className="main">
        <div className="sideBar" style={{ height: window.innerHeight - 80 }}>
          <div
            className="sideIcon"
            onClick={() => {
              callPanel("gmail")
            }}
          >
            <img src="/Gmail_icon_(2020).png"></img>
          </div>
          <div className="sideIcon">
            <img src="/Gmail_icon_(2020).png"></img>
          </div>
          <div className="sideIcon">
            <img src="/Gmail_icon_(2020).png"></img>
          </div>
          <div className="sideIcon">
            <img src="/Gmail_icon_(2020).png"></img>
          </div>
          <div className="sideIcon">
            <img src="/Gmail_icon_(2020).png"></img>
          </div>
          <div className="sideIcon">
            <img src="/Gmail_icon_(2020).png"></img>
          </div>
        </div>
        {bodyEle}
      </div>
    </>
  )
}
