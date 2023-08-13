import logo from '../../assets/img/mdf-logo.png'
import portada from '../../assets/img/niño-mdf.jpg'
import Nav from '../menu/Nav.jsx'
function Home() {
    return (
        <div>
            <div className='h-14 vector-fondo'></div>
            <Nav />
            <div id="logo">
                <img src={logo} alt="logo mdf" className='ml-[10%] top-14 w-[200px] h-[205.40px] rounded-full absolute z-1'/>
            </div>
            <div id="portada">
                <img src={portada} alt='foto portada mdf' className='w-full h-auto m-auto'/>
            </div>
            <div className='w-full h-14 vector-footer mb-0 fixed z-1 bottom-0'></div>
        </div>
    )
}

export default Home