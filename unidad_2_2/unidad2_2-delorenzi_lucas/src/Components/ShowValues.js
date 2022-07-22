import React, { useState } from 'react'

const ShowValues = ({ array, setArray }) => {

    const [itemInputValue, setItemInputValue] = useState('');

    const evenCheck = (number) => {
        return number % 2 === 0 ? `${number} es PAR` : `${number} es IMPAR`;
    }

    const deleteHandler = (element) => {
        setArray(array.filter((item) => item !== element));
    }

    const itemInputHandler = (e) => {
        setItemInputValue(e.target.value);
    }

    const editHandler = (index) => {
            const arrayEdited = [...array];
            arrayEdited[index] = itemInputValue;
            setArray(arrayEdited);
    }

    return (
        <div className='show-values'>
            {array.map((element, index) =>
            (
                <div className='item-container' key={index}>
                    {
                        <div className='items'>
                            {
                                isNaN(element) ?
                                    <>
                                        <input defaultValue={element} onChange={itemInputHandler} />
                                        <button onClick={() => { editHandler(index) }}>EDITAR</button>
                                    </> :
                                    <p>{evenCheck(Number(Math.round(element)))}</p>
                            }
                            <button onClick={() => deleteHandler(element)}>BORRAR</button>
                        </div>
                    }
                </div>
            ))
            }
        </div >
    )
}

export default ShowValues
