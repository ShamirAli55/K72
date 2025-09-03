import { Link } from 'react-router-dom'

const BottomText = () => {
  return (
    <div className='text-[6vw] text-white uppercase font-[font1] font-bold cursor-pointer'>
        <Link to="/projects" className='border-4 border-white py-1 px-6 rounded-full mr-16'>Projects</Link>
        <Link to="/agence" className='border-4 border-white py-1 px-6 rounded-full'>Agence</Link>
    </div>
  )
}

export default BottomText