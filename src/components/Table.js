function Table(props) {
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
        {props.rows.map((row, i) => {
          return (
            <tr key={i}>
              <td>{row.name}</td>
              <td>{row.type}</td>
              <td>{row.status}</td>
              <td>{row.site}</td>
              <td>BTN</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;