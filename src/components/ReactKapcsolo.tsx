import { useState } from "react";
import { KepBetolto } from "./KepBetolto";

export function ReactKapcsolo() {
    const [state, setState] = useState(false);
    const [stateText, setStateText] = useState("Ki");
    function changeText() {
        if (state) {
            setState(false);
            setStateText("Ki");
        }
        else {
            setState(true);
            setStateText("Be");
        }
    }
    if (state) {
        return <>
            <button onClick={changeText}>KAPCSOLÓ</button>
            <p>{stateText}</p>
            <KepBetolto url="on.jpg"/>
        </>
    }
    else {
        return <>
            <button onClick={changeText}>KAPCSOLÓ</button>
            <p>{stateText}</p>
            <KepBetolto url="off.jpg"/>
        </>
    }
}