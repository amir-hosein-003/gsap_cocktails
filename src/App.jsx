import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh] text-white">
      <h1 className="text-4xl text-sky-500">Hello, GSAP!</h1>
    </div>
  )
}

export default App