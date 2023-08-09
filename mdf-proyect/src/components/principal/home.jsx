import logo from '../../assets/img/mdf-logo.png'
import portada from '../../assets/img/niño-mdf.jpg'
function Home() {
    return (
        <div>
            <div id="logo">
                <img src={logo} alt="logo mdf" className='ml-[10%] mt-[15px] w-[210.40px] h-[210.40px] rounded-full absolute z-1'/>
            </div>
            <div id="portada">
                <img src={portada} alt='foto portada mdf' className='w-[99%] h-[60%] m-auto'/>
            </div>
        </div>
    )
}

export default Home