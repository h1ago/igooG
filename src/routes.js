import { Routes, Route } from "react-router-dom";
import All, {News, Images, Videos} from './components/Results/Results.js';

export default Routes() (
        <Routes>
            <Route exact path="/" element={<All/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/images" element={<Images/>} />
            <Route path="/videos" element={<Videos/>} />
        </Routes>
  
);