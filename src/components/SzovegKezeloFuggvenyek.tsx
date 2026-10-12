import { useState } from "react";

export function SzovegKezeloFuggvenyek() {
    const [text, setText] = useState("");
    

    return <>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <p>{text.length <= 0 ? "Még nem írt be egy karaktert sem." : text}</p>
        <p>A beírt karakterek száma: {text.length}</p>
    </>
}