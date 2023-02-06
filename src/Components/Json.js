import React from "react";
import SampleData from "../sample.json";
export default function Json(){
    return(
        <table className="table table-dark">
            <thead>
                <tr>
                 
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Latitude</th>
                <th scope="col">Longitude</th>

                </tr>
            </thead>
            <tbody>
                {SampleData && SampleData.map(record =>{
                    let id=record.id;
                    let city =record.name;
                    let la = record.lati ;
                    let lo = record.lon;
                    return (<tr key={id}><td>{id}</td><td>{city}</td><td>{la}</td><td>{lo}</td></tr>);

                })

}
            </tbody>

        </table>
    )
}