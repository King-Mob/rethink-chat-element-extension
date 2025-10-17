import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WidgetApiImpl } from "@matrix-widget-toolkit/api";
import { WidgetEventCapability, EventDirection } from "matrix-widget-api";
import "./index.css";
import App from "./App.tsx";

const widg = await WidgetApiImpl.create({
  capabilities: [
    WidgetEventCapability.forStateEvent(
      EventDirection.Receive,
      "rethinking.chat.checklist"
    ),
    WidgetEventCapability.forStateEvent(
      EventDirection.Send,
      "rethinking.chat.checklist"
    ),
  ],
});

console.log(widg);

/*const widgetApi = await WidgetApiImpl.create();

const capabilityResponse = await widgetApi.requestCapabilities([
  WidgetEventCapability.forStateEvent(
    EventDirection.Receive,
    "rethinking.chat.checklist"
  ),
  WidgetEventCapability.forStateEvent(
    EventDirection.Send,
    "rethinking.chat.checklist"
  ),
]);

console.log(capabilityResponse);*/

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
