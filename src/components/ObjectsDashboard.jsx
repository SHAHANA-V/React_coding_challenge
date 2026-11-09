
import axios from "axios"
import { useEffect, useState } from "react"
import ObjectList from "./ObjectList"
import ObjectAdd from "./ObjectAdd"

function ObjectsDashboard() {

    const API_KEY = "12f7fd10-3ed5-474c-8bc8-6bebb46d5f14"
    const API_URL = "https://api.restful-api.dev/collections/myobjects/objects"

    const headers = {
        "x-api-key": API_KEY
    }

    const [objects, setObjects] = useState([])

    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)
    const [totalPages, setTotalPages] = useState(0)

    const getObjects = async () => {
        try {
            const response = await axios.get(API_URL, {
                headers: headers
            })

            setObjects(response.data)
            setTotalPages(Math.ceil(response.data.length / size))
        }
        catch (error) {
            console.log(error.response?.data)
        }
    }

    const onDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`, {
                headers: headers
            })
            const updatedObjects = objects.filter(o => o.id !== id)

            setObjects(updatedObjects)
            setTotalPages(Math.ceil(updatedObjects.length / size))

            if (page >= Math.ceil(updatedObjects.length / size) && page > 0) {
                setPage(page - 1)
            }
        }
        catch (error) {
            console.log(error.response?.data)
        }
    }

    const addObject = async (name, color, price, cpu) => {
        try {
            const response = await axios.post(API_URL,
                {
                    name: name,
                    data: {
                        Year: 2026,
                        Color: color,
                        Price: Number(price),
                        CPU: cpu
                    }
                },
                {
                    headers: headers
                }
            )

            setObjects([response.data, ...objects])
            setPage(0)
            setTotalPages(Math.ceil((objects.length + 1) / size))
            alert("Object added successfully")
            return true

        }
        catch (error) {
            console.log(error.response?.data)
            return false
        }
    }

    useEffect(() => {
        getObjects()
    }, [])

    return (

        <div className="container mt-4">
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h4>Objects Dashboard</h4>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addObjectModal">
                        <i className="bi bi-plus-circle"></i>
                        Add Object
                    </button>
                </div>
                <div className="card-body">
                    <ObjectList
                        objects={objects}
                        onDelete={onDelete}
                        page={page}
                        setPage={setPage}
                        size={size}
                        totalPages={totalPages} />
                </div>
            </div>
            <ObjectAdd addObject={addObject} />
        </div>
    )
}

export default ObjectsDashboard
