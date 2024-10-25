import React, { useCallback, useState } from 'react'

function CustomBtnMv({mvData}) {

    const [active,setActive] = useState(891);

    const handleBtndataMv = (id) =>{
        setActive(id)
    };

  return (
    <div className='btn-group-mv'>

        {
            mvData && mvData.map(btndata => <button onClick={()=>handleBtndataMv(btndata.id)} className={active === btndata.id ? 'active' : ''} key={btndata.id}>{btndata.label}</button>)
        }
       
    </div>
  )
}

export default CustomBtnMv