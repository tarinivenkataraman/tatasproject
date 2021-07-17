import React from "react";
import { useState, useEffect } from "react";
import {db} from "./Firebase";

const View = () => {

    var [userObjects, setUserObjects] = useState({})
    useEffect(() => {
        db.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null)
                setUserObjects({
                    ...snapshot.val()
                })
            else
                setUserObjects({})

        })
    }, [])   // Similar to Component Did Mount


    return (
        <div className="row py-4">
            <div className="col-md-8 offset-md-1">

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            {/* <th scope="col">S.No.</th> */}
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">College</th>
                            <th scope="col">Domain</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(userObjects).map(id => {
                                return <tr key={id}>
                                    {/* <th scope="row"></th> */}
                                    <td>{userObjects[id].name}</td>
                                   
                                    <td>{userObjects[id].email}</td>
                                    <td>{userObjects[id].college}</td>
                                    <td>{userObjects[id].message}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default View;