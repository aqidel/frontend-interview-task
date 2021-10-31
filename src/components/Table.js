import React from 'react';
import Results from './Results';
import Finalize from './Finalize';
import '../style/Table.css';
import sort_logo from '../assets/Vector-1.png';

function defineSiteColor(site) {
  switch (site) {
    case 'delivery.company.com': return 'colored delivery';
    case 'games.company.com': return 'colored games';
    case 'market.company.com': return 'colored market';
    default: return 'colored';
  }
};

function defineStatusColor(status) {
  switch (status) {
    case 'Online': return 'td status online';
    case 'Paused': return 'td status paused';
    case 'Stopped': return 'td status stopped';
    default: return 'td status';
  }
};

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <td></td>
          <td>NAME</td>
          <td id='type-sort'>
            TYPE
            <img src={sort_logo} alt='vector'/>
          </td>
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
                <td className='td name'>
                  {row.name}
                </td>
                <td className='td type'>
                  {row.type}
                </td>
                <td className={defineStatusColor(row.status)}>
                  {row.status}
                </td>
                <td className='td site'>
                  {row.site}
                </td>
                <td className='td-button'>
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