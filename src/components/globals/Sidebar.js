import React from 'react';
import { Col, Button, Image } from 'react-bootstrap';
import { SidebarStyle } from '../../styles/style';
import OverviewIcon from '../../../assets/vectors/overview.png'
import Icofont from 'react-icofont';
import AllPayments from '../../../assets/vectors/AllPayments.png'
import ManualSettlements from '../../../assets/vectors/ManualSettlements.png'
function Sidebar(props) {
    return (
        <SidebarStyle className="py-3">
            <div className="ml-4">
                <Button variant="success">GENERATE INVOICE</Button>
            </div>
            <div className="mt-3">
                <div className="text-muted small ml-4">Main</div>
                <a className="active mt-2"><div className="text-muted small ml-4"><Image src={OverviewIcon} /> Overview</div></a>
            </div>
            <div className="mt-3">
                <div className="text-muted small ml-4">Payments</div>
                <a className="mt-2"><div className="text-muted small ml-4"><Image src={AllPayments} /> All Payments</div></a>
                <a className="mt-2"><div className="text-muted small ml-4"><Image src={AllPayments} /> Reconcilled Payments</div></a>
                <a className="mt-2"><div className="text-muted small ml-4"><Image src={AllPayments} /> Un - Reconcilled Payments</div></a>
                <a className="mt-2"><div className="text-muted small ml-4"><Image src={ManualSettlements} /> Manual Settlement</div></a>
            </div>
            <div className="mt-3">
                <div className="text-muted small ml-4">Orders</div>
                <a className="mt-2"><div className="text-muted small ml-4"><Icofont icon="list" className="mt-1" />All Orders</div></a>
                <a className="mt-2"><div className="text-muted small ml-4"><Icofont icon="list" className="mt-1" />Pending Orders</div></a>
                <a className="mt-2"><div className="text-muted small ml-4"><Icofont icon="list" className="mt-1" />Reconcilled Orders</div></a>
            </div>
            <div className="mt-3">
                <a className="mt-2"><div className="text-muted small ml-4"><Icofont icon="ui-user" className="mt-1" />Merchant Profile</div></a>
            </div>
        </SidebarStyle>
    );
}

export default Sidebar;