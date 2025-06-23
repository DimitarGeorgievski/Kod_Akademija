import { useState } from "react"

const longCalculation = (num:number) => {
  for(let i=0; i< 2000000; i++){
    if(i<0) console.log(i)
  }
return num*num
}

const useMemoExample = () => {
    const [number,setNumber] = useState(0)
    const [color,setColor] = useState("lighblue")
    const multipliedNumber = longCalculation(number);

    return <section style={{backgroundColor: color}}>
        <h1>useMemo Example</h1>
        <h2>{number}</h2>
        <h2>{multipliedNumber}</h2>
        <button onClick={() => {
            setNumber(Math.floor(Math.random() * 100))
        }}>Chane Number</button>
        <button onClick={() => {
            setColor(prevColor => prevColor === "lighblue" ? "lightgreen" : "lightblue")
        }}></button>
    </section>
}

export default useMemoExample