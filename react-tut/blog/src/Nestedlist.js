import './App.css';
import { Table } from 'react-bootstrap';
function Nestedlist() {
    var users = [
        {
            name: "Rohit Rao", email: "dhonirohit81@gmail.com", address: [
                { house: "10", city: "Noida", country: "India" },
                { house: "112/23", city: "Dwarka", country: "India" },
                { house: "10", city: "Bahadurgarh", country: "India" },
            ]
        },
        {
            name: "Ankit Rawat", email: "rawatankit420@gmail.com", address: [
                { house: "10", city: "Noida", country: "India" },
                { house: "112/23", city: "Dwarka", country: "India" },
                { house: "10", city: "Bahadurgarh", country: "India" },
            ]
        },
        {
            name: "Abhishek Yadav", email: "yadavabhi445@gmail.com", address: [
                { house: "10", city: "Noida", country: "India" },
                { house: "112/23", city: "Dwarka", country: "India" },
                { house: "10", city: "Bahadurgarh", country: "India" },
            ]
        },

    ]
    return (
        <div class="App">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td>S.No</td>
                        <td>Name</td>
                        <td>email</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((val, i) =>
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>
                                    <Table  striped bordered hover variant="dark">
                                        <tbody>
                                            {
                                                val.address.map((data) =>
                                                    <tr>
                                                        <td>{data.house}</td>
                                                        <td>{data.city}</td>
                                                        <td>{data.country}</td>

                                                    </tr>

                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>

                        )
                    }
                </tbody>

            </Table>
        </div>

    );

}
export default Nestedlist;