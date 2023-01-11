import "./reset.css"
import "./App.css"
import { useM3 } from "../hooks/useM3"

export const App: React.FC = () => {
  const { callPanel, bodyEle } = useM3()

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
              callPanel("Gmail")
            }}
          >
            <img src="/Gmail_icon_(2020).png"></img>
          </div>
          <div
            className="sideIcon"
            onClick={() => {
              callPanel("GoogleCalendar")
            }}
          >
            <img src="/Gmail_icon_(2020).png"></img>
          </div>
        </div>
        {bodyEle}
      </div>
    </>
  )
}
