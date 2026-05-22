import Topbar from "./Topbar";
import SummaryCards from "./SummaryCards";
import RecentOrders from "./RecentOrders";

function Dashboard(){
    return(
        <div>
<Topbar 
title="Welcome Back Akwele" 
buttonText="+ Add Customer" 
buttonPath="/add-customers" 
/>
<SummaryCards 
cards ={[
            {title:'Total Customers', value:'25'},
            {title:'Active Customers', value:'13'},
            {title:'Pending Payments', value:'5'},
]} />
<RecentOrders 
title="Recent Orders"
                columns={['Customer', 'Description', 'Status', 'Balance', 'Due Date']}
                statusIndex={2}
                rows={[
                  ['Mary Johnson', 'Wedding Dress - alterations', 'Pending', 'GH₵250', 'May 15, 2026'],
                  ['Mercy Johnson', 'Wedding Dress - alterations', 'In Progress', 'GH₵250', 'May 10, 2026'],
                  ['J.Cole', 'Suit', 'Ready', 'GH₵80', 'May 15, 2026'],
                ]} />
</div>
    );
}

export default Dashboard;