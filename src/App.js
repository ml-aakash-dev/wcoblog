import './App.css';
import Blog from './Blog/Blog'
import { Route, Routes } from 'react-router';
import AppleAirPodBestWirelessEarBuds from './Blog/apple-airpods-best-wireless-earbuds';
import WaysToKeepYourSmartPhonesClean from './Blog/ways-to-keep-your-smartphones-clean';
import AirpodsVsAirpodPro from './Blog/airpods-vs-airpods-pro';
import MakeYourPhoneWorkFaster from './Blog/make-your-phone-work-faster';
import Iphone11HeavyDutyDefenderCase from './Blog/iphone-11-heavy-duty-defender-case'
import ImportanceOfMobilePhoneAccessories from './Blog/importance-of-mobile-phone-accessories'

function App() {
  return (
    <Routes>
      <Route path='/'  element={<Blog/>} />
      <Route path='/blog/apple-airpods-best-wireless-earbuds'  element={<AppleAirPodBestWirelessEarBuds/>} />
      <Route path='/blog/ways-to-keep-your-smartphones-clean'  element={<WaysToKeepYourSmartPhonesClean/>} />
      <Route path='/blog/airpods-vs-airpods-pro'  element={<AirpodsVsAirpodPro/>} />
      <Route path='/blog/make-your-phone-work-faster'  element={<MakeYourPhoneWorkFaster/>} />
      <Route path='/blog/iphone-11-heavy-duty-defender-case'  element={<Iphone11HeavyDutyDefenderCase/>} />
      <Route path='/blog/importance-of-mobile-phone-accessories'  element={<ImportanceOfMobilePhoneAccessories/>} />
        

    </Routes>
  );
}

export default App;
