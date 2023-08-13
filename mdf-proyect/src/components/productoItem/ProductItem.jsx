import data from '../../assets/objects/products.json'
import React from 'react';
function ProductITem() {
    const items = data.products;
    return (
        
        <div className='w-full h-full m-auto'>
            
            <div className='grid grid-cols-4 gap-7 '> 
            {items.map((productData, index) => {
          // Verifica si el objeto tiene el atributo "product"
          const product = productData.product ? productData.product : productData;
          const { id, name, description, src } = product;
                
          return (
              <div className='flex flex-col gap-2 justify-center items-center content-center bg-white border border-[5px] border-[#EBE4DF] rounded-[45px] w-[285px] h-[310px]'>
                  <img src={src != null ? src : null} alt={name} className='w-[80%] h-auto' />
                  <h3 className=' text-center font-bold'>{ name}</h3>
                  </div>
          );
        })}
           </div>
    </div>
  );
}

export default ProductITem