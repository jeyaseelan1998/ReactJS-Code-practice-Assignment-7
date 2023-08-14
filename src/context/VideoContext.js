import {createContext} from 'react'

const VideoContext = createContext({
  savedVideos: [],
  onSaveVideo: () => {},
  onRemoveVideo: () => {},
  onLikeVideo: () => {},
  onDisLikeVideo: () => {},
})

export default VideoContext
