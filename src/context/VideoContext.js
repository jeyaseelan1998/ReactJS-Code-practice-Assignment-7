import {createContext} from 'react'

const VideoContext = createContext({
  savedVideos: [],
  onSaveVideo: () => {},
  onRemoveVideo: () => {},
})

export default VideoContext
