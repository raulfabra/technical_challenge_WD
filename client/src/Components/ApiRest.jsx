import { useEffect, useState } from "react";
import axios from 'axios';


function ApiRest() {

    const [phones, setPhones] = useState({})
    const [loading, setLoading] = useState(true)
    const [phoneDetail, setPhoneDetail] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:5005/api/phones')
            .then(response => {
                setPhones(response.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const showHandlerPhone = () => {
        setPhoneDetail(true)
    }
    const closeHandlerPhone = () => {
        setPhoneDetail(false)
    }

    return (
        !loading &&
        <div className="row mt-5">
            {phones.map(phone => {
                return (
                    <div key={phone.id} className="card col-4 mx-auto" style={{ width: "18rem" }}>
                        <img src={`/assets/images/${phone.imageFileName}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{phone.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{phone.manufacturer}</h6>
                            <p className="card-text text-truncate">{phone.description}</p>
                            {phoneDetail && (
                                <>
                                <div>
                                    Featured
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{phone.color}</li>
                                    <li className="list-group-item">{`${phone.price} €`}</li>
                                    <li className="list-group-item">{`This product have a ${phone.ram} Memory Ram and processor ${phone.processor}`}</li>
                                </ul>
                                </>
                            )}
                            {!phoneDetail && <button type="button" onClick={showHandlerPhone} className="btn btn-primary">View Details</button>}
                            {phoneDetail && <button type="button" onClick={closeHandlerPhone} className="btn btn-primary">View Details</button>}
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default ApiRest;