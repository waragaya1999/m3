import React from "react"
import { useM3 } from "../../hooks/useM3"
import { GmailPresenter } from "./presenter"

export const Gmail: React.FC = () => {
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
  } = useM3()

  return (
    <GmailPresenter
      gmailX={gmailX}
      gmailY={gmailY}
      onDragGmailX={onDragGmailX}
      onDragGmailY={onDragGmailY}
      onDragStartX={onDragStartX}
      onDragStartY={onDragStartY}
      onDragEndGmailX={onDragEndGmailX}
      onDragEndGmailY={onDragEndGmailY}
      panelList={panelList}
    />
  )
}
