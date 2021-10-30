import React from 'react';
import Results from './Results';
import Finalize from './Finalize';
import '../style/Table.css';

function defineSiteColor(site) {
  if (site == 'delivery.company.com') {
    return 'colored delivery';
  }
  if (site == 'games.company.com') {
    return 'colored games';
  }
  if (site == 'market.company.com') {
    return 'colored market';
  }
  else return 'colored';
};

function defineStatusColor(status) {
  if (status == 'Online') {
    return 'td online';
  }
  if (status == 'Paused') {
    return 'td paused';
  }
  if (status == 'Stopped') {
    return 'td stopped';
  }
  else return 'td'
};

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <td></td>
          <td>NAME</td>
          <td>TYPE</td>
          <td>STATUS</td>
          <td>SITE</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, i) => {
          return (
            <React.Fragment key={i}>
              <tr className='spacer'></tr>
              <tr className='row'>
                <td className={defineSiteColor(row.site)}></td>
                <td className='td'>{row.name}</td>
                <td className='td'>{row.type}</td>
                <td className={defineStatusColor(row.status)}>{row.status}</td>
                <td className='td'>{row.site}</td>
                <td>
                  {row.status === 'Draft' ? <Finalize/> : <Results/>}
                </td>
              </tr>
            </React.Fragment>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;