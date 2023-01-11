import React from "react"
import { useM3 } from "../../hooks/useM3"
import { GoogleCalendarPresenter } from "./presenter"

export const GoogleCalendar: React.FC = () => {
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
  } = useM3()

  return (
    <GoogleCalendarPresenter
      googleCalendarX={googleCalendarX}
      googleCalendarY={googleCalendarY}
      onDragGoogleCalendarX={onDragGoogleCalendarX}
      onDragGoogleCalendarY={onDragGoogleCalendarY}
      onDragStartX={onDragStartX}
      onDragStartY={onDragStartY}
      onDragEndGoogleCalendarX={onDragEndGoogleCalendarX}
      onDragEndGoogleCalendarY={onDragEndGoogleCalendarY}
      panelList={panelList}
    />
  )
}
