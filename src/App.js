import React, { useEffect, useState } from 'react';
import ProductsList from './components/ProductsList';

const App = () => {
    const [pageNo, setPageNo] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [response, setResponse] = useState([]);
    const updatePageNo = (e, newPage) => {
        console.log(e.target.value);
        setPageNo(newPage);
    }
    const updateRowsPerPage = (e) => {
        setRowsPerPage(e.target.value, 10);
        setPageNo(0);
    }
    useEffect(() => {
        const request = fetch(`https://blaze.ratecity.com.au/api/search/home-loans?page_size=${pageNo}&per_page=${rowsPerPage}`);
        const req_promise_json = request.then(resp => resp.json());
        req_promise_json.then(response => {
            console.log(response.hits.length);
            setResponse(response);
        })
    }, [pageNo, rowsPerPage]);
    return response.hits ? (<ProductsList rows={response.hits || []} total={response.meta ? response.meta.total_count : 0} rowsPerPage={rowsPerPage}
        pageNo={pageNo} updateRowsPerPage={updateRowsPerPage} updatePageNo={updatePageNo} />) : <div>Loading...</div>
}

export default App;