import React from 'react'

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import '../../styles/TransactionChart.scss'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const TransactionChart = (props) => {

  const { memberTransactions, group, user } = props;
  let currentUser = '';
  user ? currentUser = user : '';

  const chartLabels = [];
  const dataSet1 = [];
  let sumBalances = 0;
  let largestUserBalance = '';
  const backgroundColours = [];
  const borderColours = [];

  for (const singleGroup of group) {
    for (const user of singleGroup.users) {
      if (user.id !== currentUser.id){
        chartLabels.push([singleGroup.name, user.username]);

        const userTransactions = memberTransactions.filter((transaction) => {
          return transaction.owner_id === user.id || transaction.recipient_id === user.id;
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
        dataSet1.push(userBalance);
        sumBalances += userBalance;
      }
    }
  };

  if ( sumBalances && sumBalances >= 0) {
    const highestAmountOwed = dataSet1.reduce((accu, curr) => {
      curr > accu ? accu = curr : accu = accu;
      return accu;
    }, 0);
    const amountIndex = dataSet1.indexOf(highestAmountOwed);
    largestUserBalance = chartLabels[amountIndex === -1 ? chartLabels.length - 1 : amountIndex][1]
  } else if (sumBalances && sumBalances <= 0) {
    const highestAmountOwing = dataSet1.reduce((accu, curr) => {
      curr < accu ? accu = curr : accu = accu;
      return accu;
    }, 0);
    const amountIndex = dataSet1.indexOf(highestAmountOwing);
    if (amountIndex) {
      largestUserBalance = chartLabels[amountIndex][1]
    }
  }

  dataSet1.forEach((value) => {
    if (value >= 0) {
      backgroundColours.push('green')
      borderColours.push('lightgreen')
    } else {
      backgroundColours.push('darkred')
      borderColours.push('red')
    }
  });

  const data = {
    labels: chartLabels,
    datasets: [{
      label: '',
      data: dataSet1,
      backgroundColor: backgroundColours,
      borderColor: borderColours ,
      borderWidth: 2,
      borderSkipped: 'start'
  }]
  }

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
    <header><h2>{user ? user.username : ''}'s Group Member Summary</h2></header>
    <div className='charts'>
      <Bar data={data} options={options} />
      <aside>
        <p>The current sum of your balances is:</p>
        <span className= {sumBalances >= 0 ? 'positive' : 'negative'}>$   {sumBalances}</span>
        <p>You may want to consider {sumBalances >= 0 ? `asking for a payment from` : `making a payment to`}<span className='largest-balance'> {largestUserBalance}</span></p>
      </aside>
    </div>
    <footer>The above graphic displays your current standing with every member of each group you belong to. Green represents money owed to you, while red represents money owed to another member. </footer>
    </section>
  );
};

export default TransactionChart;