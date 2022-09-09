import React from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const CalendlyWidget = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });
  return (
    <div className="Calendly_wrapper">
      <InlineWidget
        pageSettings={{
          backgroundColor: "000",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
        url="https://calendly.com/mahi-khandelwal28"
      />
    </div>
  );
};

export default CalendlyWidget;
