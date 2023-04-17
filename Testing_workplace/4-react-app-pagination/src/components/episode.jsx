import React from "react"

const Episode = ({name, airDate, episode}) => {
  return (
    <div className="col-4 mb-2">
      <div className="card" style={{ height: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">
            {name} {episode}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {airDate}
          </h6>
        </div>
      </div>
    </div>
  ) // return
}

export default Episode