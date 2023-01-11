import React from "react"

type Props = {
  gmailX: number
  gmailY: number
  onDragGmailX: (e: React.DragEvent<HTMLDivElement>) => void
  onDragGmailY: (e: React.DragEvent<HTMLDivElement>) => void
  onDragStartX: (e: React.DragEvent<HTMLDivElement>) => void
  onDragStartY: (e: React.DragEvent<HTMLDivElement>) => void
  onDragEndGmailX: (e: React.DragEvent<HTMLDivElement>) => void
  onDragEndGmailY: (e: React.DragEvent<HTMLDivElement>) => void
  panelList: string[]
}

export const GmailPresenter: React.FC<Props> = (props) => {
  const {
    gmailX,
    gmailY,
    onDragGmailX,
    onDragGmailY,
    onDragStartX,
    onDragStartY,
    onDragEndGmailX,
    onDragEndGmailY,
    panelList,
  } = props
  return (
    <>
      {panelList.length == 0 ? (
        <div id="gmail" style={{ width: gmailX, height: gmailY }}>
          <div className="tabBar">
            <div className="tab">
              <img src="/Gmail_icon_(2020).png" alt=""></img>
              <p>Gmail</p>
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
            onDragEnd={onDragEndGmailY}
            onDragStart={onDragStartY}
            onDrag={onDragGmailY}
          ></div>
          <div
            className="subX"
            draggable
            onDragEnd={onDragEndGmailX}
            onDragStart={onDragStartX}
            onDrag={onDragGmailX}
          ></div>
          <div
            className="tabBody"
            style={{ width: gmailX - 10, height: gmailY - 50 }}
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
        <div id="gmail" style={{ width: gmailX / 2, height: gmailY }}>
          <div className="tabBar">
            <div className="tab">
              <img src="/Gmail_icon_(2020).png" alt=""></img>
              <p>Gmail</p>
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
            onDragEnd={onDragEndGmailY}
            onDragStart={onDragStartY}
            onDrag={onDragGmailY}
          ></div>
          <div
            className="subX"
            draggable
            onDragEnd={onDragEndGmailX}
            onDragStart={onDragStartX}
            onDrag={onDragGmailX}
          ></div>
          <div
            className="tabBody"
            style={{ width: gmailX - 10, height: gmailY - 50 }}
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
