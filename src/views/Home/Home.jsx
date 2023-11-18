import { useSearchParams } from "react-router-dom";
import "./Home.css"

const GREETINGS = [
  "Wishing you a very happy and prosperous Diwali..!May the light of the diyas guide you towards the path of happiness and success",
  "Shubh Diwali! May the festival of lights bring you good fortune and prosperity.",
  "May this diwali fill your life with the colors of the rainbow, May you experience the beauty and diversity of life. May you embrace the harmony and unity of all.",
  "Deepavali ki hardik shubhkamnayein! May the divine light of Diwali guide you on your path to success and happienes",
  "Wishing you a sparkling Diwali filled with laughter, fun and the brightest of moments. Happy Diwali..!!",
  "Diwali is a time to create beautiful memories with loved ones. May this festival bring joy, laughter and togetherness to our family. Happy Diwali..!",
  "May this Diwali bring you new opportunities, new achievements, and new dreams. May you shine like a star and sparkle like a diamond. Happy Diwali!"

]

function Home() {

  const [searchParams] = useSearchParams();

  const to = searchParams.get("to");
  const from = searchParams.get("from");

  const greetingNumber = searchParams.get("g") || 0;
  return (
    <div className="greeting-container">
      <span>Dear, {to}💐</span>
      <p>
        {GREETINGS[greetingNumber]}
      </p>
      <span className="from-text">🙏From, {from}</span>
    </div>
  )
}

export default Home
