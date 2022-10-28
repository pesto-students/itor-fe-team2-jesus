import React from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const CalendlyWidget = ( { url } ) => {
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
        url={url}
      />
    </div>
  );
};

export default CalendlyWidget;
