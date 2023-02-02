import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  return <h2>repos</h2>;
};

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  .image {
    width: 100%;
  }
  .grid-test {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .container {
    width: 800px;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;
export default Repos;

const userHands = 65


const test = {
"fullName": '',
"firstName":'',
"middleName": '',
"lastName": '',
"jbRef": '',
"creditors": {
      "creditor1": '', 
       "creditor2":'' ,
},
  "repaymentAmount": {
    "repaymentAmount1": '',
    "repaymentAmount2": '',
    "repaymentAmount3":  '',
    "repaymentAmount4": ''
  },
  "paymentFrequency": {
    "paymentFrequency1": '',
    "paymentFrequency2": '',
    "paymentFrequency3": '', 
     "paymentFrequency4": ''
  },
  "balance": {
    "balance1": '',
    "balance2": '',
    "balance3": '', 
     "balance4": ''
  },
  "arrears": {
    "arrears1": '',
    "arrears2": '',
    "arrears3": '',
    "arrears4": ''
  },
  "debtReference": {
    "debtReference1": '',
    "debtReference2": '',
    "debtReference3":  '',
    "debtReference4":  ''
  },
  "startDate": {
    "startDate1": '',
    "startDate2": '',
    "startDate3":  '',
    "startDate4": ''
  },
  "secured": {
    "secured1": '',
    "secured2": '',
    "secured3": '',
    "secured4": ''
  },
  "billerCode": {
    "billerCode1": '',
    "billerCode2": '',
    "billerCode3": '',
    "billerCode4": '',
  },
  "billerCodeReference": {
    "billerCodeReference1": '',
    "billerCodeReference2": '',
    "billerCodeReference3": '',
    "billerCodeReference4": ''
  },
  "paymentReference": {
    "paymentReference1": '',
    "paymentReference2":'',
    "paymentReference3": '', 
    "paymentReference4":'',
  },
 "bsb": {
    "bsb1": '',
    "bsb2": '',
    "bsb3": '', 
    "bsb4":'',
  },
 "accountNumber": {
    "accountNumber1": '',
    "accountNumber2": '',
    "accountNumber3": '', 
    "accountNumber4": '',
  },
  "confidenceScore": '',
}