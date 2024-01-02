import data from "../mocks/BMIData";

const BMITable = () => {
  const columns = ["체질량지수", "분류", "체중범위"];

  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => {
            return <th key={column}>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map(({ 체질량지수, 분류, 체중범위 }) => {
          return (
            <tr key={체질량지수}>
              <td>{체질량지수}</td>
              <td>{분류}</td>
              <td>{체중범위}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BMITable;
