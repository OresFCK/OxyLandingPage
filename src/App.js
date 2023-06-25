import ResponsiveAppBar from './components/navbar'
import TableWithIframes from './components/table';
import HeaderComponent from './components/headers';
import LicenseComponent from './components/license';
import FAQComponent from './components/faq';
import LeaveConfirmationComponent from './components/beforeleave';

function App() {
  return (
    <div className="App">
        <ResponsiveAppBar/>
        <HeaderComponent/>
        <TableWithIframes/>
        <LicenseComponent/>
        <br></br>
        <FAQComponent/>
        <LeaveConfirmationComponent/>
    </div>
  );
}

export default App;
