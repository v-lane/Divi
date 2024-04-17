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
              <li className="active">
                <Link to="/" underline="none">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Transactions
                </Link>
              </li>
              <li>
                <Link to="all_groups" underline="none">
                  Groups
                </Link>
              </li>
              <li>
                <Link to="all_notifications" underline="none">
                  Notifications
                </Link>
              </li>
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
                  <li>
                    <Link href="#" underline="none">
                      Add Expense
                    </Link>
                  </li>
                  <li>
                    <Link href="#" underline="none">
                      Add Payment
                    </Link>
                  </li>
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
                  <li>
                    <Link href="#" underline="none">
                      Create New Group
                    </Link>
                  </li>
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
              <li>
                <Link href="#" underline="none">
                  Transactions
                </Link>
              </li>
              <li>
                <Link href="#" underline="none">
                  Members
                </Link>
              </li>
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
                  <li>
                    <Link href="#" underline="none">
                      Add Expense
                    </Link>
                  </li>
                  <li>
                    <Link href="#" underline="none">
                      Add Payment
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>


          </AccordionDetails>
        </Accordion>
      </header>
      <footer>
        <ul>
          <li >
            <Link to="profile" state={{ background: location }} onClick={(() => openModal('profile'))}>
              My Profile
            </Link>
          </li>
          {/* <li>Admin</li> */}
        </ul>
      </footer>
    </aside>
  );
};

export default SideNavigationBar;