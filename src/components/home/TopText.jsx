import Video from './Video'

const TopText = () => {
  return (
    <div className='text-9xl text-white uppercase text-center font-[font1] leading-[9vw] pt-2 tracking-tight'>
        <div>L'étincelle</div>
        <div>qui
        <div className='h-24 w-52 inline-block rounded-full overflow-hidden'>
        <Video/>
        </div>    
        génère
        </div>
        <div>la créativité</div>
    </div>
  )
}

export default TopText