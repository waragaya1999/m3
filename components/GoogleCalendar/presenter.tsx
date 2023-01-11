import React from "react"

type Props = {
  googleCalendarX: number
  googleCalendarY: number
  onDragGoogleCalendarX: (e: React.DragEvent<HTMLDivElement>) => void
  onDragGoogleCalendarY: (e: React.DragEvent<HTMLDivElement>) => void
  onDragStartX: (e: React.DragEvent<HTMLDivElement>) => void
  onDragStartY: (e: React.DragEvent<HTMLDivElement>) => void
  onDragEndGoogleCalendarX: (e: React.DragEvent<HTMLDivElement>) => void
  onDragEndGoogleCalendarY: (e: React.DragEvent<HTMLDivElement>) => void
  panelList: string[]
}

export const GoogleCalendarPresenter: React.FC<Props> = (props) => {
  const {
    googleCalendarX,
    googleCalendarY,
    onDragGoogleCalendarX,
    onDragGoogleCalendarY,
    onDragStartX,
    onDragStartY,
    onDragEndGoogleCalendarX,
    onDragEndGoogleCalendarY,
    panelList,
  } = props
  return (
    <>
      {panelList.length == 0 ? (
        <div
          id="gmail"
          style={{ width: googleCalendarX, height: googleCalendarY }}
        >
          <div className="tabBar">
            <div className="tab">
              <img src="/Gmail_icon_(2020).png" alt=""></img>
              <p>GoogleCalendar</p>
            </div>
          </div>
          <div className="mailMenu">
            <ul>
              <li>
                <img src="/newMail.png" alt="a" />
              </li>
              <li>
                <img src="/returnMail.png" />
              </li>
              <li>
                <img src="/archiveMail.png" />
              </li>
              <li>
                <img src="/spamMail.png" />
              </li>
              <li>
                <img src="/trushMail.png" />
              </li>
              <li>
                <img src="/unreadMail.png" />
              </li>
            </ul>
            <div className="mailTab">
              <div className="active">受信</div>
              <div>アーカイブ</div>
              <div>ゴミ箱</div>
            </div>
          </div>
          <div
            className="subY"
            draggable
            onDragEnd={onDragEndGoogleCalendarY}
            onDragStart={onDragStartY}
            onDrag={onDragGoogleCalendarY}
          ></div>
          <div
            className="subX"
            draggable
            onDragEnd={onDragEndGoogleCalendarX}
            onDragStart={onDragStartX}
            onDrag={onDragGoogleCalendarX}
          ></div>
          <div
            className="tabBody"
            style={{
              width: googleCalendarX - 10,
              height: googleCalendarY - 50,
            }}
          >
            <ul className="mails">
              <li className="mail">
                <ul className="oneMail">
                  <li className="gmailCheckBox">
                    <input type={"checkbox"}></input>
                  </li>
                  <li className="gmailSender">sender@gmail.com</li>
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
                  <li className="gmailSender">sender@gmail.com</li>
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
                  <li className="gmailSender">sender@gmail.com</li>
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
                  <li className="gmailSender">sender@gmail.com</li>
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
                  <li className="gmailSender">sender@gmail.com</li>
                  <li className="gmailLabel">labellabellabellabel</li>
                  <li className="gmailBody">bodybodybody</li>
                  <li className="gmailTimeStamp">2022/1/1</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div
          id="gmail"
          style={{ width: googleCalendarX / 2, height: googleCalendarY }}
        >
          <div className="tabBar">
            <div className="tab">
              <img src="/Gmail_icon_(2020).png" alt=""></img>
              <p>GoogleCalendar</p>
            </div>
          </div>
          <div className="mailMenu">
            <ul>
              <li>
                <img src="/newMail.png" alt="a" />
              </li>
              <li>
                <img src="/returnMail.png" />
              </li>
              <li>
                <img src="/archiveMail.png" />
              </li>
              <li>
                <img src="/spamMail.png" />
              </li>
              <li>
                <img src="/trushMail.png" />
              </li>
              <li>
                <img src="/unreadMail.png" />
              </li>
            </ul>
            <div className="mailTab">
              <div className="active">受信</div>
              <div>アーカイブ</div>
              <div>ゴミ箱</div>
            </div>
          </div>
          <div
            className="subY"
            draggable
            onDragEnd={onDragEndGoogleCalendarY}
            onDragStart={onDragStartY}
            onDrag={onDragGoogleCalendarY}
          ></div>
          <div
            className="subX"
            draggable
            onDragEnd={onDragEndGoogleCalendarX}
            onDragStart={onDragStartX}
            onDrag={onDragGoogleCalendarX}
          ></div>
          <div
            className="tabBody"
            style={{
              width: googleCalendarX - 10,
              height: googleCalendarY - 50,
            }}
          >
            <ul className="mails">
              <li className="mail">
                <ul className="oneMail">
                  <li className="gmailCheckBox">
                    <input type={"checkbox"}></input>
                  </li>
                  <li className="gmailSender">sender@gmail.com</li>
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
                  <li className="gmailSender">sender@gmail.com</li>
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
                  <li className="gmailSender">sender@gmail.com</li>
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
                  <li className="gmailSender">sender@gmail.com</li>
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
                  <li className="gmailSender">sender@gmail.com</li>
                  <li className="gmailLabel">labellabellabellabel</li>
                  <li className="gmailBody">bodybodybody</li>
                  <li className="gmailTimeStamp">2022/1/1</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
