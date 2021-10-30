import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import _ from 'lodash';

async function async_react_start() {
  let row = [];

  let tests = await fetch('http://localhost:3100/tests').then(r => r.json());

  let sites = await fetch('http://localhost:3100/sites').then(r => r.json());

  function cutURL(url) {
    if (/https:\/\/www./i.test(url)) {
      return url.replace(/https:\/\/www./ig, '');
    }
    if (/http:\/\//i.test(url)) {
      return url.replace(/http:\/\//ig, '');
    }
    if (/https:\/\//i.test(url)) {
      return url.replace(/https:\/\//ig, '');
    }
    else return url;
  };

  function createRow() {
    for (let i = 0; i < tests.length; i++) {
      let item = {
        name: tests[i].name,
        type: tests[i].type === 'MVT' ? 'MVT' : _.capitalize(tests[i].type),
        status: _.capitalize(tests[i].status),
        site: cutURL(sites[tests[i].siteId - 1].url)
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