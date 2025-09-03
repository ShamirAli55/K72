import Video from "../components/home/Video"
import TopText from "../components/home/TopText"
import BottomText from "../components/home/BottomText"
import MiddleText from "../components/home/MiddleText"
const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
    <div className="h-screen w-full fixed">
    <Video/>
    </div>
    <div className="absolute top-1/2 left-[73%]  w-full py-8">
    <MiddleText/>
    </div>
    <div className="h-screen w-full relative flex flex-col items-center justify-between gap-42">
    <TopText/>
    <BottomText/>
    </div>
  </div>
  )
}

export default Home