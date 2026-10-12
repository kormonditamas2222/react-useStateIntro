import { useState } from "react";

export function ColorChanger() {
    const [red, setRed] = useState<number>();
    const [green, setGreen] = useState<number>();
    const [blue, setBlue] = useState<number>();
    function randomColor() {
        setRed(Math.floor(Math.random() * 255))
        setGreen(Math.floor(Math.random() * 255))
        setBlue(Math.floor(Math.random() * 255))
    }
    return <>
        <div style={{width: "100px", height: "100px", backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></div>
        <button onClick={randomColor}>Új szín generálása</button>
    </>
}