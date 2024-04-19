import React from "react";

import '../styles/SideNavigationBar.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Link from '@mui/material/Link';
import { Link, useLocation } from "react-router-dom";


const SideNavigationBar = ({openModal}) => {
  const location = useLocation();

  return (
    <aside className="side-nav-bar">
      <header className="accordian-nav">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="username-header"
          >
            <h2>Username</h2>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
                <Link to="/" underline="none">
              <li className="active">
                  Dashboard
              </li>
                </Link>
                <Link to="all_transactions" underline="none">
              <li>
                  Transactions
              </li>
                </Link>
                <Link to="all_groups" underline="none">
              <li>
                  Groups
              </li>
                </Link>
                <Link to="all_notifications" underline="none">
              <li>
                  Notifications
              </li>
                </Link>
            </ul>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="transactions-header"
              >
                <h3>Transactions</h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                    <Link to="add-expense" underline="none" state={{ background: location }} onClick={(() => openModal('add-expense'))}>
                  <li>
                      Add Expense
                  </li>
                    </Link>
                    <Link to="add-payment" underline="none" state={{ background: location }} onClick={(() => openModal('add-payment'))} >
                  <li>
                      Add Payment
                  </li>
                    </Link>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="groups-header"
              >
                <h3>Groups</h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                    <Link to="new-group" state={{ background: location }} onClick={(() => openModal('add-expesn'))}>
                  <li>
                      Create New Group
                  </li>
                    </Link>
                </ul>
              </AccordionDetails>
            </Accordion>


          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="groupname-header"
          >
            <h2>Group Name</h2>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
                <Link href="#" underline="none">
              <li>
                  Transactions
              </li>
                </Link>
                <Link href="#" underline="none">
              <li>
                  Members
              </li>
                </Link>
            </ul>

            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5-content"
                id="group-transactions-header"
              >
                <h3>Group's Transactions</h3>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                    <Link href="#" underline="none">
                  <li>
                      Add Expense
                  </li>
                    </Link>
                    <Link href="#" underline="none">
                  <li>
                      Add Payment
                  </li>
                    </Link>
                </ul>
              </AccordionDetails>
            </Accordion>


          </AccordionDetails>
        </Accordion>
      </header>
      <footer>
        <ul>
            <Link to="profile" state={{ background: location }} onClick={(() => openModal('profile'))}>
          <li >
              My Profile
          </li>
            </Link>
          {/* <li>Admin</li> */}
        </ul>
      </footer>
    </aside>
  );
};

export default SideNavigationBar;