import React,{useState,useEffect} from "react";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import EditeIcon from "../../assets/Icons/EditeIcon";
import leaveData from '../../data/leaveDB.json'

const columns = [
  { path: "id", lable: "S.NO" },
  {
    path: "categoryName",
    lable: "Category Name",
  },
  {
    path: "allowedLeaves",
    lable: "Allowed Leaves",
  },
  {
    path: "appliedTo",
    lable: "Applied To",
  },
  {
    path: "empType",
    lable: "Employee Type",
  },
  {
    path: "status",
    lable: "Status",
  },
  {
    path: "edit",
    lable: "Edit",
    content: (leave) => (
      <button>
        <EditeIcon width={16} />
      </button>
    ),
  },
];

const EmployeesTable = () => {
  const [leaveState, setLeaveState] = useState([]);
  let tableData = [];

  useEffect(() => {
    if (leaveData.length > 0) {
      // eslint-disable-next-line
      tableData = leaveData.map(dataItem => {
        const { id,categoryName, allowedLeaves, appliedTo, empType ,status} = dataItem;
        return { id,categoryName, allowedLeaves, appliedTo, empType,status }

      });
      setLeaveState(tableData)
    }
    // eslint-disable-next-line
  }, [leaveData])
  return (
    <CardContainer title="Leaves Category">
            {leaveState.length > 0 ? (<Table data={leaveState} columns={columns} />
      ) : (<></>)}
    </CardContainer>
  );
};

export default EmployeesTable;
