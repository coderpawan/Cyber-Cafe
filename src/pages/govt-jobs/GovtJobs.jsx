import { useContext } from "react";
import { DataContext } from "../../context/Context";

function GovernmentJobsPage() {
  const { governmentJobsList, loading } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="">
      <div className="container">
        <table>
          <tr>
            {governmentJobsList.map((data, index) => (
              <td key={index} className="table-dt">
                <a href={data._fieldsProto?.Link?.stringValue}>
                  {data._fieldsProto?.Exam?.stringValue}
                </a>
              </td>
            ))}
          </tr>
        </table>
      </div>
    </div>
  );
}

export default GovernmentJobsPage;
