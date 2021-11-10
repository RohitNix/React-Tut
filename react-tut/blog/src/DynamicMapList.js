import './App.css'
import React, { useSatae } from 'react';
import Dycomponent from './Dycomponent';
import {Table} from 'react-bootstrap';
function DynamicMapList() {
    var dataList = [
        { Name: "Rohit Rao", Email: "dhonirohit81@gmail.com", Phone: 8818036132 },
        { Name: "Ankit Rawat", Email: "rawatankit2232@gmail.com", Phone: 77676554543 },
    ]
    return (
        <div class="container text-center">
            <h3>Here the list is coming dynamically form props/Component</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                    </tr>
                </thead>
                <tbody>
            {
                dataList.map((dataList) =>
                    <Dycomponent data={dataList} />
                )
            }
            </tbody>
            </Table>
        </div>
    );

}
export default DynamicMapList;