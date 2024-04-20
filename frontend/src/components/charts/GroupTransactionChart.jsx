import React from 'react';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../../styles/TransactionChart.scss';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TransactionChart = (props) => {

  const { memberTransactions, allMemberTransactions, group, user, activeGroupDetails } = props;
  let currentUser = '';
  user ? currentUser = user : '';

  const chartLabels = [];
  const memberIds = [];
  const dataSet1 = [];
  let sumBalances = 0;
  let owedMostAmount = 0;
  let largestUserBalance = '';
  const backgroundColours = [];
  const borderColours = [];

  for (const singleGroup of group) {
    if (singleGroup.id === activeGroupDetails.id) {
      for (const user of singleGroup.users) {
        chartLabels.push(user.username);
        memberIds.push(user.id);
      }
      const groupTransactions = allMemberTransactions.filter((transaction) => {
        return transaction.group_id === singleGroup.id;
      });
      console.log(groupTransactions)
      for (let i = 0; i < chartLabels.length; i++) {
        let member = memberIds[i];
        const memberBalance = groupTransactions.reduce((accu, curr) => {
          if (curr.owner_id === member) {
            accu += curr.amount
          } else if (curr.recipient_id === member) {
            accu -= curr.amount
          }
          return accu
        }, 0)
        dataSet1.push(memberBalance);
        if (memberBalance > 0) {
          sumBalances += memberBalance
        }
      }
    }
    console.log(allMemberTransactions)
  };

  if (dataSet1.length > 0) {
    const highestAmountOwed = dataSet1.reduce((accu, curr) => {
      curr > accu ? accu = curr : accu = accu;
      return accu;
    }, 0);
    const amountIndex = dataSet1.indexOf(highestAmountOwed);
    largestUserBalance = chartLabels[amountIndex === -1 ? chartLabels.length - 1 : amountIndex];
    owedMostAmount = highestAmountOwed
  } 

  dataSet1.forEach((value) => {
    if (value >= 0) {
      backgroundColours.push('green');
      borderColours.push('lightgreen');
    } else {
      backgroundColours.push('darkred');
      borderColours.push('red');
    }
  });

  const data = {
    labels: chartLabels,
    datasets: [{
      label: '',
      data: dataSet1,
      backgroundColor: backgroundColours,
      borderColor: borderColours,
      borderWidth: 2,
      borderSkipped: 'start'
    }]
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'lightgray',
          boxWidth: 0
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'var(--primary-color-200)',
        },
        grid: {
          color: 'var(--primary-color-200)'
        }
      },
      y: {
        ticks: {
          color: 'var(--primary-color-200)'
        },
        grid: {
          color: 'var(--primary-color-200)'
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <section className='chart-area'>
      <header><h2>{activeGroupDetails ? activeGroupDetails.name : ''}'s Group Summary</h2></header>
      <div className='charts'>
        <Bar data={data} options={options} />
        <aside>
          <p>The below amount is the total balance of all outstanding funds: </p>
          <span className={sumBalances <= 0 ? 'positive' : 'negative'}>$   {sumBalances}</span>
          <p>{largestUserBalance} is owed ${owedMostAmount} of the total amount and should seek payment. </p>
        </aside>
      </div>
      <footer>The above graphic displays the current standing of each group member. Green indicates they are owed money, while red indicates they owe another member.  </footer>
    </section>
  );
};

export default TransactionChart;