import React from "react";
import {episodes} from "./fakeStorage/episodes"
import Episode from "./episode";
import Pagination from "./pagination";

const EpisodesList = () => {
  const counter = episodes.length
  const pageSize = 8 // кол-во элем на странице
  const handlePageChange = (pageIndex) => {
    console.log('pageIndex', pageIndex)
  }

  return (
    <div className="container">
      <div className="row">
        {episodes.map(episode => (
          <Episode key={episode.id} {...episode}/>
        ))}
      </div>
      <div className="row">
        <Pagination
          itemsCount={counter}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  ) // return
}

export default EpisodesList;