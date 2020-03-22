import React, {useState, useEffect} from "react";
import {createGlobalStyle} from "styled-components";
import {createCalendar} from "./helpers";
import {StyledApp} from "./AppStyles";
import Hatch from "./Hatch";

const GlobalStyle = createGlobalStyle`
  body{
    background: center / cover url("./img/calendar_backdrop.jpg");
    margin: 0;
  }
`

function App() {
  //hooks instead of classes this time
  const [hatches, setHatches] = useState([]);

  useEffect(() => {
    const calendar = localStorage.calendar
    ? JSON.parse(localStorage.calendar)
    : createCalendar();

    setHatches(calendar);
  }, []);

  //Store calendar in localStorage
  useEffect(() => {
    hatches.length && localStorage.setItem("calendar", JSON.stringify(hatches));
  }, [hatches]);

  const handleFlipHatch = id => {
    const updateHatches = hatches.map(hatch =>
      hatch.id == id ? {...hatch, open: !hatch.open } : hatch  
    );

    setHatches(updateHatches);
  }

  return (
    <>
    <GlobalStyle />
    <StyledApp>
      { hatches.map(hatch =>
        < Hatch
          key={hatch.id}
          hatchData={hatch}
          handleClick={handleFlipHatch}  
        />)
      }
    </StyledApp>
    </>
  );
}

export default App;
