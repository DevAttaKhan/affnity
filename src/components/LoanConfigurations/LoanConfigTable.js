import React, {useState, useEffect} from "react";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import EditeIcon from "../../assets/Icons/EditeIcon";
import loadDB from '../../data/loadDB.json';

const columns = [
  { path: "id", lable: "S.NO" },
  {
    path: "loanCategory",
    lable: "Loan Category",
  },
  {
    path: "allowedAmount",
    lable: "Allowed Amount",
  },
  {
    path: "maxInstallment",
    lable: "Max Installments",
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

const LoanConfigTable = () => {

  const [loanCategory, setLoanCategory] = useState({});
  let tableData = [];

  useEffect(() => {
    if (loadDB.length > 0) {
      // eslint-disable-next-line
      tableData = loadDB.map(dataItem => {
        const { id, loanCategory, allowedAmount, maxInstallment,status } = dataItem;
        return { id, loanCategory, allowedAmount, maxInstallment,status } 

      });
      setLoanCategory(tableData)
    }
    // eslint-disable-next-line
  }, [loadDB])

  return (
    <CardContainer title="Loan Category">
            {loanCategory.length > 0 ? (<Table data={loanCategory} columns={columns} />
      ) : (<></>)}
    </CardContainer>
  );
};

export default LoanConfigTable;
