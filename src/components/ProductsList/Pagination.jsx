const Pagination = ({currentPage, qtyPages, paginate, movePage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= qtyPages; i++){
        pageNumbers.push(i)
    }

    return (
        <>
            {qtyPages > 1?  
                <>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className={currentPage > 1? 'page-item' : 'page-item disabled'}>
                                <button onClick={() => movePage(-1)} className='page-link'>
                                    Previous
                                </button>
                            </li>
                            {pageNumbers.map((number,index) => (
                                <li key={index} className={index + 1 === currentPage? 'page-item active' : 'page-item'}>
                                    <button onClick={() => paginate(number)} className="page-link">
                                        {number}
                                    </button>
                                </li>
                            ))}
                            <li className={currentPage < qtyPages? 'page-item' : 'page-item disabled'}>
                                <button onClick={() => movePage(1)} className="page-link">
                                    Next
                                </button>
                            </li>
                        </ul>
                     </nav>
                </>

                :

                null
            } 
        </>
    )
};

export default Pagination;
