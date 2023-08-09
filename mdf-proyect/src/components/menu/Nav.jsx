
function Nav() {
    return (

        <div className=" w-full fixed bg-[#f5f5f5]">
            <ul className="absolute flex flex-row gap-5 w-full mt-0 pl-[55%] content-center items-center right-0 top-15 bg-[#f5f5f5] p-5">
                <li ><a href="#" className="text-center flex flex-row justify-center items-center justify-items-center content-center gap-2">Productos <span class="material-symbols-outlined text-[#C4AB84] font-bold">expand_more</span></a></li>
                <li><a href="#" className="text-center flex flex-row justify-center items-center justify-items-center content-center gap-2">Método Montessori <span class="material-symbols-outlined text-[#C4AB84] font-bold">expand_more</span></a></li>
                <li><a href="#" className="text-center flex flex-row justify-center items-center justify-items-center content-center gap-2">¿Cómo Pintar? <span class="material-symbols-outlined text-[#C4AB84] font-bold">expand_more</span></a></li>
                <li><a href="#" className="text-center flex flex-row justify-center items-center justify-items-center content-center gap-2">Sobre Nosotros <span class="material-symbols-outlined text-[#C4AB84] font-bold">expand_more</span></a></li>
                <li><a href="#" className="bg-[#EBE4DF] rounded-xl text-center flex flex-row justify-center items-center justify-items-center content-center gap-2 p-3">Tienda <span class="material-symbols-outlined text-[#C4AB84] font-bold">local_convenience_store</span></a></li>
            </ul>
        </div>

    )
}

export default Nav