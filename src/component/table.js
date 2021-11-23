import React,{useState} from 'react'
import { Table } from 'react-bootstrap'
import './table.css'


const Tables=()=>{

    const [items, setItems] = useState(
        [
            {
                id: 0,
                packages: "Iron",
                level1:10,
                level2:90,
                level3:70

            },
            {
                id: 1,
                packages: "Platenium",
                level1:20,
                level2:98,
                level3:5
            },
            {
                id: 2,
                packages: "Copper",
                level1:23,
                level2:92,
                level3:58
            },
            {
                id: 3,
                packages: "Brass",
                level1:10,
                level2:7,
                level3:28
            }
        ]
    )

    return (

        <div className='container mt-5 main__table' >
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Packages</th>
      <th>Level 1</th>
      <th>Level 2</th>
      <th>Level 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Iron</td>
      <td><input type='number'/>%</td>      
      <td><input type='number'/>%</td>      
      <td><input type='number'/>%</td>
    </tr>
    <tr>
      <td>Copper</td>
      <td><input type='number' />%</td>
      <td><input type='number' />%</td>
      <td><input type='number' />%</td>
    </tr>
    <tr>
      <td>Platinum</td>
      <td><input type='number'/>%</td>
      <td><input type='number' />%</td>
      <td><input type='number' />%</td>
    </tr>
    <tr>
      <td>Brass</td>
      <td><input type='number' />%</td>
      <td><input type='number' />%</td>
      <td><input type='number' />%</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Tables