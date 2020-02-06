I have created this for assignment.
Tried to setup project as good from scratch, no use of CRA.
Things kept in mind :
1) Component should be generic
2) Generic and even should be pure as much as possible i hope i have achieved 100%

To run project just run script 
```
npm start
```

Component Desription
rows: the array of entries which would be populated as row
Each row must have those props which are being populated now likw minTerm, maxTerm etc
total: total no of rows returned by API
pageNo: current page No
updateRowsPerPage : to handle update on no of records on page
updatePageNo : to handle pagination

How it is used one use case 
```
<ProductsList rows={response.hits || []} total={response.meta ? response.meta.total_count : 0} rowsPerPage={rowsPerPage}
        pageNo={pageNo} updateRowsPerPage={updateRowsPerPage} updatePageNo={updatePageNo} />
```


Thanks , always welcome for contsructive feedback and criticism.
