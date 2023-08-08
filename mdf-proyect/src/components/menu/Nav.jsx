
function Nav() {
    return (

        <div className="w-full">
            <div className="w-[50%]"></div>
            <ul className="fixed flex flex-row gap-5 right-0 mt-5 w-[50%]">
                <li><a href="#">Productos</a></li>
                <li><a href="#">Método Montessori</a></li>
                <li><a href="#">¿Cómo Pintar?</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#" className="bg-[#EBE4DF] rounded p-2">Tienda <i className="text-sm text-[#C4AB84]">Shop</i></a></li>
            </ul>
        </div>

    )
}

export default Nav