import React from "react";

import '../styles/SideNavigationBar.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Icon from '@mui/material/Icon';

import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SideNavigationBar = (props) => {

  return (
    <aside className="side-nav-bar">
      <header className="accordian-nav">
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h2>Username</h2>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Dashboard</li>
              <li>Transactions</li>
              <li>Groups</li>
              <li>Notifications</li>
              <li>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <h3>Transactions</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>Add Expense</li>
                      <li>Add Payment</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <h3>Groups</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>Create New Group</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <h2>Group Name</h2>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Transactions</li>
              <li>Members</li>
              <li>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel5-content"
                    id="panel5-header"
                  >
                    <h3>Group's Transactions</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>Add Expense</li>
                      <li>Add Payment</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </header>
      <footer>
        <ul>
          <li>My Profile</li>
          {/* <li>Admin</li> */}
        </ul>
      </footer>
    </aside>
  );
};

export default SideNavigationBar;