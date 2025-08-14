import { Routes, Route,Router } from 'react-router-dom';
import { MembershipForm } from './member.jsx';
import { SwarHomePage } from './home.jsx';
import { MusicSubmit } from './Musicsubmission.jsx';
import { AudioPlayer } from './listenaudio.jsx';
import { VideoGallery } from './perfiormaces.jsx';
import {MessagesTable} from './data.jsx';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SwarHomePage />} />
      <Route path="/membership" element={<MembershipForm />} />
      <Route path="/music" element={<MusicSubmit />}/> 
      <Route path="/listen" element={<AudioPlayer />} />
      <Route path="/perform" element={<VideoGallery />}/>
      <Route path="/data" element={<MessagesTable/>}/>
    </Routes>
  );
}
