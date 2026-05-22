import SummaryCards from "./SummaryCards";
import RecentOrders from "./RecentOrders";
import Topbar from "./Topbar";


function Payments(){
    return(
<div>
    <Topbar 
    title="PAYMENTS" 
    topText="Total Outstanding:" 
    numText=" GH₵ 4000"
    />
    <SummaryCards cards={[
          {title:'Total Received', value:'GH₵8,425'},
            {title:'Outstanding', value:'GH₵4,225'},
            {title:'Fully Paid Orders', value:'5'},
        ]} />
        <RecentOrders 
        columns={['Names','Order','Paid/Total','Balance']}
        rows={[
          ['Asana','Kente Dress','200/500','GH₵300'],
          ['Dembooz','Suit','700/1000','GH₵300'],
          ['Burna','Kente Dress','100/500','GH₵400'],
          ['Elsie','Kente Dress','200/900','GH₵700'],
          ['Nancy','Kente Dress','150/500','GH₵350'],
          ['Adwoa','Kente Dress','Paid','GH₵300'],
        ]}
        />
</div>
    );
}

export default Payments;