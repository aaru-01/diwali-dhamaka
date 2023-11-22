import { useSearchParams } from "react-router-dom";
import "./Home.css"
import DiwaliLamp from "./diwali-lamp.png"
import Lamp from "./lamp.png"
import { useState } from "react";



const GREETINGS = [
  "Wishing you a blessed, healthy, and prosperous Diwali..!May the light of the diyas guide you towards the path of happiness and success",
  "Wishing you a very happy and prosperous Diwali! May the light of the diyas guide you towards the path of happiness and success. On this Diwali, I pray to Lakshmi to bless you with wealth, health, and happiness. May you and your family enjoy this festive season with peace and joyShubh Diwali! May the festival of lights bring you good fortune and prosperity.",
  "May this diwali fill your life with the colors of the rainbow, May you experience the beauty and diversity of life. May you embrace the harmony and unity of all.",
  "Deepavali ki hardik shubhkamnayein! May the divine light of Diwali guide you on your path to success and happienes",
  "Wishing you a sparkling Diwali filled with laughter, fun and the brightest of moments. Happy Diwali..!!",
  "Diwali is a time to create beautiful memories with loved ones. May this festival bring joy, laughter and togetherness to our family. Happy Diwali..!",
  "May this Diwali bring you new opportunities, new achievements, and new dreams. May you shine like a star and sparkle like a diamond. Happy Diwali!"

]

function Home() {

  const [searchParams] = useSearchParams();

  const [to, setTo] = useState(searchParams.get("to"));
  const [from, setFrom] = useState(searchParams.get("from"));
  const [greetingNumber, setGreetingNumber] = useState(searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0);
  const [themeNumber, setThemeNumber] = useState(searchParams.get("t"));



  return (
    <div>
      <div className={`greeting-container ${`theme-${themeNumber}`}`}>

        <img src={DiwaliLamp} className="diwali-lamp left-lamp" />

        <img src={DiwaliLamp} className="diwali-lamp right-lamp" />

        <br /><br /><br />
        <span>Dear, {to}💐</span>
        <p>
          {GREETINGS[greetingNumber]}
        </p>
        <span className="from-text">🙏From, {from}</span>
        <br /><br /><br />
        <img src={Lamp} className="lamp" />


      </div>
      <p className="create-your-own">
        Do you want to create your own Diwali Greeting? Customize it here..👇
      </p>
      {/* <p>{import.meta.env.VITE_BASE_URL}</p> */}
      <p className="url" onClick={()=>{
        const url = `${import.meta.env.VITE_BASE_URL}?to=${to}&from=${from}&g=${greetingNumber}&t=${themeNumber}`
        navigator.clipboard.writeText(url);
        alert(`Copied to clipboard: ${url}`);
     }}>
        {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetingNumber}&t={themeNumber}
      </p>
      <div className="input-container">
        <input type="text" className="input-box" placeholder="To" value={to} onChange={(e) => {
          setTo(e.target.value)
        }} />

        <input type="text" className="input-box" placeholder="From" value={from} onChange={(e) => {
          setFrom(e.target.value)
        }} />

        <select value={greetingNumber} className="input-box" onChange={(e) => {
          setGreetingNumber(e.target.value)
        }}>

          <option value={"0"}>Greeting 1</option>
          <option value={"1"}>Greeting 2</option>
          <option value={"2"}>Greeting 3</option>
          <option value={"3"}>Greeting 4</option>
          <option value={"4"}>Greeting 5</option>
          <option value={"5"}>Greeting 6</option>
          <option value={"6"}>Greeting 7</option>
        </select>

        <select value={themeNumber} className="input-box" onChange={(e) => {
          setThemeNumber(e.target.value)
        }}>
          <option value={"0"}>None</option>
          <option value={"1"}>Theme 1</option>
          <option value={"2"}>Theme 2</option>
          <option value={"3"}>Theme 3</option>
          <option value={"4"}>Theme 4</option>
          <option value={"5"}>Theme 5</option>
          <option value={"6"}>Theme 6</option>
        </select>
      </div>

    </div>
  )
}

export default Home
