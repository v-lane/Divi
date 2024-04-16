import React from 'react'

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import '../styles/TransactionChart.scss'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const TransactionChart = (props) => {

  const { transactions, memberTransactions, group, user } = props;
  const currentUser = user;

  const chartLabels = [];
  const dataSet1 = [];
  const backgroundColours = [];

  for (const singleGroup of group) {
    for (const user of singleGroup.users) {
      if (user.id !== currentUser.id){
        chartLabels.push([singleGroup.name, user.username])

        const userTransactions = memberTransactions.filter((transaction) => {
          return transaction.owner_id === user.id || transaction.recipient_id === user.id
        });

        const userBalance = userTransactions.reduce((accu, curr) => {
          if (curr.owner_id === user.id) {
            accu -= curr.amount;
          }
          if (curr.owner_id === currentUser.id) {
            accu += curr.amount;
          }

          return accu;
        }, 0)
        dataSet1.push(userBalance)
      }
    }
  }

  dataSet1.forEach((value) => {
    if (value >= 0) {
      backgroundColours.push('lightgreen')
    } else {
      backgroundColours.push('red')
    }
  })

  const data = {
    labels: chartLabels,
    datasets: [{
      label: 'Member Balances', 
      data: dataSet1,
      backgroundColor: backgroundColours
  }]
  }

  const options = {};

  return (
    <Bar data={data} options={options}>
      
    </Bar>
  );
};

export default TransactionChart;