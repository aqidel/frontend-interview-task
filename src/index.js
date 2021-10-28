import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

async function async_react_start() {
  let row = [];

  let tests = await fetch('http://localhost:3100/tests').then(r => r.json());

  let sites = await fetch('http://localhost:3100/sites').then(r => r.json());

  function createRow() {
    for (let i = 0; i < tests.length; i++) {
      let item = {
        name: tests[i].name,
        type: tests[i].type,
        status: tests[i].status,
        site: sites[tests[i].siteId - 1].url
      };

      row.push(item);
    };
  };

  await createRow();

  await ReactDOM.render(
    <React.StrictMode>
      <App row={row}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

async_react_start();