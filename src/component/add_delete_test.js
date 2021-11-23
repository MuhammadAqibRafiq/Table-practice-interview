import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import './table.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

const Tables = () => {
    const [packages, setPackages] = useState('')
    const [level1, setLevel1] = useState('')
    const [level2, setLevel2] = useState('')
    const [level3, setLevel3] = useState('')

    const [items, setItems] = useState(
        [
            {
                id: 0,
                packages: "Iron",
                level1: 10,
                level2: 90,
                level3: 70

            },
            {
                id: 1,
                packages: "Platenium",
                level1: 20,
                level2: 98,
                level3: 5
            },
            {
                id: 2,
                packages: "Copper",
                level1: 23,
                level2: 92,
                level3: 58
            },
        ]
    )

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            packages:packages,
            level1: level1,
            level2: level2,
            level3: level3,

        }])
        setPackages('')
        setLevel1('')
        setLevel2('')
        setLevel3('')

    }


    const deleteItem = (id) => {
        console.log(id)
        const update = items.filter((elem, ind) => {
            return ind !== id
        })
        setItems(update)
    }

    return (
        <div className='container mt-5 main__table' >
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Packages</th>
                        <th>Level 1</th>
                        <th>Level 2</th>
                        <th>Level 3</th>
                        <th>Add/Del</th>

                    </tr>
                </thead>
                <tbody>

                    {items && items.map((elem, ind) => {
                        return <tr>
                            <td>{elem.packages}</td>
                            <td>{elem.level1}%</td>
                            <td>{elem.level2}%</td>
                            <td>{elem.level3}%</td>
                            <td><DeleteSweepIcon style={{cursor:'pointer'}} onClick={() => deleteItem(ind)}/></td>
                        </tr>
                    })}


                    <tr>
                        <td><input onChange={(e) => setPackages(e.target.value)} value={packages} type='text' /></td>
                        <td><input onChange={(e) => setLevel1(e.target.value)} value={level1} type='number' />%</td>
                        <td><input onChange={(e) => setLevel2(e.target.value)} value={level2} type='number' />%</td>
                        <td><input onChange={(e) => setLevel3(e.target.value)} value={level3} type='number' />%</td>
                        <td> <AddCircleOutlineIcon onClick={addItem} style={{cursor:'pointer'}} /></td>
                    </tr>


                </tbody>
            </Table>
        </div>

    )
}

export default Tables