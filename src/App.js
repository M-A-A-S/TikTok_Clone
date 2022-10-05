import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';
import Video from './Video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot(snapshot => (
      setVideos(snapshot.docs.map(doc => ({
        id: doc.id,
        video: doc.data()
      })))
    ))
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {
          videos.map(
            ({ 
              video,
              id
            }) => (
              <Video
                key={ id }
                url={ video.url }
                channel={ video.channel }
                description={ video.description }
                song={ video.song }
                likes={ video.likes }
                messages={ video.messages }
                shares={ video.shares }
              />
            )
          )
        }
      </div>
    </div>
  );
}

export default App;
