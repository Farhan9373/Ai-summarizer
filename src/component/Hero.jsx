import {logo} from '../assets';
const Hero = () => {
  return (
   <header className=' flex justify-center w-full
   items-center flex-col'>
     <nav className=' flex justify-between items-center mb-10 w-full p-3'>
       <img src={logo} className=' w-28 object-contain' alt='logo'/>
       <button onClick={()=>window.open('https://github.com/Farhan9373')} className=' black_btn'>Github</button>
     </nav>
     <h1 className='head_text'>Summarize Articles With
        <br className=''/><span className='orange_gradient'>OpenAI GPT-4</span>
     </h1>
      <h2 className=' desc'>Your Open-Source Tool for Effortless Reading! Transform long articles into quick, easy-to-read summaries with Summize. This powerful tool streamlines complex information, giving you clear, concise summaries in seconds.</h2>
   </header>
  )
}

export default Hero