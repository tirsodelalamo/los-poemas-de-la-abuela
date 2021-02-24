import React from 'react';

const Edit = (props) => {

    console.log(props)

    const { handleClose } = props
    
    handleClose(true)

    return ( 
        <>
            <h1>Editame PLS</h1> 
        </>
     );
}
 
export default Edit;