import { useRef, useState } from "react"
import { NavigationBar } from "../components/NavigationBar"
import { SizedBox } from "../components/SizedBox"
import "./StatusCodeSelector.css"

export function StatusCodeSelector() {
    let codeRef = useRef<HTMLInputElement>()
    let [image, setImage] = useState(null)

    async function handleInput() {
        const code = Number(codeRef.current?.value)
        const url = `https://http.cat/${code}.jpg`
        setImage(<img src={url} alt="cat"></img> as any)
    }

    return (
        <div className="rootDiv">
            <NavigationBar />
            <SizedBox height={30} />
            {image != null && image}
            <SizedBox height={10} />
            <div>
                <input type="number" ref={codeRef as any}></input>
                <button onClick={handleInput}>Show</button>
            </div>
        </div>
    )
}