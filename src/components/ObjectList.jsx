function ObjectList({ objects, onDelete, page, setPage, size, totalPages }) {

    const startIndex = page * size
    const endIndex = startIndex + size

    const currentObjects = objects.slice(startIndex, endIndex)
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {
                    currentObjects.map((o, index) => (
                        <div className="col" key={o.id}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-header d-flex justify-content-between">
                                    <b>{o.name || "No Name"}</b>
                                    <i className="bi bi-trash3 text-danger" onClick={() => onDelete(o.id)}></i>
                                </div>

                                <div className="card-body">
                                    <p><b>ID:</b> {o.id}</p>
                                    <p>
                                        <b>Color:</b> {o.data?.Color ?? o.data?.color ?? "N/A"}
                                    </p>
                                    <p>
                                        <b>Price:</b> {o.data?.Price ?? o.data?.price ?? "N/A"}
                                    </p>
                                    <p>
                                        <b>CPU:</b> {o.data?.CPU ??o.data?.["CPU model"] ??"N/A"}
                                    </p>
                                    <p>
                                        <b>Year:</b> {o.data?.Year ?? o.data?.year ?? "N/A"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <nav className="mt-4">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <button className="page-link"
                            onClick={() => setPage(page - 1)}
                            disabled={page === 0}>
                            Previous
                        </button>
                    </li>
                    {

                        Array.from({ length: totalPages }, (e, index) => (
                            <li className="page-item" key={index}>
                                <button className="page-link" onClick={() => setPage(index)}>
                                    {index + 1}
                                </button>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <button className="page-link"onClick={() => setPage(page + 1)}
                            disabled={page === totalPages - 1 || totalPages === 0}>
                            Next
                        </button>
                    </li>
                </ul>
                <p className="text-center">
                    Page {page + 1} of {totalPages}
                </p>
                <p className="text-center">
                    Showing {currentObjects.length} records from {objects.length} records
                </p>
            </nav>
        </div>
    )
}

export default ObjectList