import React, { useEffect } from 'react'
import { useState } from 'react';

const Productes = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.serverred.es/Product")
            .then(response => response.json())
            .then(dataFetch => { [...data, setData(dataFetch)] });
    }, [])


    return (
        <>
            <div>
                <h2>Productes</h2>
                <table border={1}>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Preu</th>
                    <th>Descripció</th>
                    {data.map(ele => {
                        return (
                            <tr>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.price}€</td>
                                <td>{ele.description}</td>
                            </tr>
                        )
                        
                    })}
                
                </table>
                {console.log(data)}
                
            </div>
        </>
    )
}

export default Productes