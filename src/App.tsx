import "./App.css";

import { WidgetApiImpl } from "@matrix-widget-toolkit/api";
import { WidgetEventCapability, EventDirection } from "matrix-widget-api";

const widgetApi = await WidgetApiImpl.create();

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

console.log(capabilityResponse);

const people = [
  "aadi",
  "asil",
  "alexandra",
  "alessandro",
  "connor",
  "chris",
  "david",
  "davit",
  "emily",
  "fatima",
  "francesca",
  "fred",
  "gamithra",
  "huda",
  "jamie",
  "martina",
  "nick",
  "tuna",
];

function App() {
  return (
    <>
      <h1>Rethinking Chat Checklist</h1>
      <div>
        {people.map((person) => (
          <p key={person}>{person}</p>
        ))}
      </div>
    </>
  );
}

export default App;
