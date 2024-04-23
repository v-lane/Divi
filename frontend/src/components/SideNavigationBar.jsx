import React from "react";

import '../styles/SideNavigationBar.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useLocation } from "react-router-dom";


const SideNavigationBar = ({ openModal, activeGroup, user, activeGroupDetails }) => {
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
            <h2>{user && user.username}</h2>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <Link to="/" underline="none">
                <li className={location.pathname === '/' ? "active" : ''}>
                  Dashboard
                </li>
              </Link>
              <Link to="all_transactions" underline="none">
                <li className={location.pathname === '/all_transactions' ? "active" : ''}>
                  Transactions
                </li>
              </Link>
              <Link to="all_groups" underline="none">
                <li className={location.pathname === '/all_groups' ? "active" : ''}>
                  Groups
                </li>
              </Link>
              <Link to="all_notifications" underline="none">
                <li className={location.pathname === '/all_notifications' ? "active" : ''}>
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
                    <li className={location.pathname === '/add-expense' ? "active" : ''}>
                      Add Expense
                    </li>
                  </Link>
                  <Link to="add-payment" underline="none" state={{ background: location }} onClick={(() => openModal('add-payment'))} >
                    <li className={location.pathname === '/add-payment' ? "active" : ''}>
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
                  <Link to="new-group" state={{ background: location }} onClick={(() => openModal('new-group'))}>
                    <li className={location.pathname === '/new-group' ? "active" : ''}>
                      Create New Group
                    </li>
                  </Link>
                </ul>
              </AccordionDetails>
            </Accordion>


          </AccordionDetails>
        </Accordion>
        {
          activeGroup > 0 &&
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="groupname-header"
            >
              <h2>Group: {activeGroupDetails && activeGroupDetails.name}</h2>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <Link to={`group/${activeGroup}/dashboard`} underline="none">
                  <li className={location.pathname === `/group/${activeGroup}/dashboard` ? "active" : ''}>
                    Dashboard
                  </li>
                </Link>
                <Link to={`group/${activeGroup}/dashboard/all_transactions`} underline="none">
                  <li className={location.pathname === `/group/${activeGroup}/dashboard/all_transactions` ? "active" : ''}>
                    Transactions
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
                    <Link to={`group/${activeGroup}/dashboard/add-expense`} underline="none" state={{ background: location }} onClick={(() => openModal('add-expense'))}>
                      <li className={(location.pathname === `/group/${activeGroup}/dashboard/add-expense` || location.pathname === `/group/${activeGroup}/dashboard/all_transactions/add-expense`) ? "active" : ''}>
                        Add Expense
                      </li>
                    </Link>
                    <Link to={`group/${activeGroup}/dashboard/add-payment`} underline="none" state={{ background: location }} onClick={(() => openModal('add-payment'))}>
                      <li className={(location.pathname === `/group/${activeGroup}/dashboard/add-payment` || location.pathname === `/group/${activeGroup}/dashboard/all_transactions/add-payment`) ? "active" : ''}>
                        Add Payment
                      </li>
                    </Link>
                  </ul>
                </AccordionDetails>
              </Accordion>


            </AccordionDetails>
          </Accordion>
        }
      </header>
      <footer className={(location.pathname === `/profile` || location.pathname === `/profile`) ? "active" : ''}>
        <ul>
          <Link to="profile" state={{ background: location }} onClick={(() => openModal('profile'))}>
            <li>
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