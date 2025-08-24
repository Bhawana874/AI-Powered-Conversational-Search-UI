
import React from 'react';

const DataCard = ({ data }: { data: any }) => (
  <div style={{border:'1px solid #007BFF', background:'#F5F8FF', padding:20, marginTop:24}}>
    <h4>Data Visualization</h4>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    {/* Replace above with proper charts/tables for real use */}
  </div>
);

export default DataCard;
