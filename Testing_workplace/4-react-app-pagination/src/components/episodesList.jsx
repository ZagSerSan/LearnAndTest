import React from "react";
import {episodes} from "./fakeStorage/episodes"
import Episode from "./episode";

const EpisodesList = () => {
  return (
  <div className="container">
    <div className="row">
      {episodes.map(episode => (
        <Episode key={episode.id} {...episode}/>
      ))}
    </div>
  </div>
  ) // return
};

export default EpisodesList;