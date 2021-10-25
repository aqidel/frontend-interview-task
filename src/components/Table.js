import { useState } from 'react';

async function getData(url) {
  let response = await fetch(url);
  let json = await response.json();
};

getData('http://localhost:3100/tests');

function Table() {
  const [tests, setTests] = useState();
  const [sites, setSites] = useState();

  return (
    <table>
      <thead>
        <tr>
          <td>NAME</td>
          <td>TYPE</td>
          <td>STATUS</td>
          <td>SITE</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {}
      </tbody>
    </table>
  );
}

export default Table;