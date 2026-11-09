import { useState } from "react"

function ObjectAdd({ addObject }) {

    const [name, setName] = useState("")
    const [color, setColor] = useState("")
    const [price, setPrice] = useState("")
    const [cpu, setCpu] = useState("")

    const onAdd = () => {

        addObject(name, color, price, cpu)
        setName("")
        setColor("")
        setPrice("")
        setCpu("")

    }

    return (
        <div className="modal fade" id="addObjectModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Object</h5>
                        <button type="button" className="btn-close"data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        <div className="mb-3">
                            <label>Name</label>
                            <input type="text"  className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label>Color</label>
                            <input type="text" className="form-control" value={color} onChange={(e) => setColor(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label>Price</label>
                            <input type="number" className="form-control"value={price}onChange={(e) => setPrice(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label>CPU</label>
                            <input type="text" className="form-control" value={cpu} onChange={(e) => setCpu(e.target.value)}/>
                        </div>

                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>

                        <button className="btn btn-primary" onClick={onAdd} data-bs-dismiss="modal" disabled={!name || !color || !price || !cpu} >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ObjectAdd