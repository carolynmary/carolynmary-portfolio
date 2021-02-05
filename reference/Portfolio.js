import React from "react";
import chickadee from "../images/black_capped_chickadee.jpg"

function Feed() {
  return (

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" id="feed">

          <div className="col">
            <div className="card">
              <img src={chickadee} className="card-img-top" alt="Black-capped Chickadee" />
              <div className="card-body">
                <h5 className="card-title">Black-capped Chickadee</h5>
                <small className="text-muted">redtail_99</small>
                <p className="card-text">This little chickadee was hanging out in someone’s front yard. He seemed pretty cozy with his winter feathers.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">1-13-21 • 5:47 pm</small> <br />
                <small className="text-muted">Mount Vernon, NY</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={chickadee} className="card-img-top" alt="House Sparrow" />
              <div className="card-body">
                <h5 className="card-title">House Sparrow</h5>
                <small className="text-muted">redtail_99</small>
                <p className="card-text">Just a regular old sparrow hanging out off the reservoir track.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">1-13-21 • 5:47 pm</small> <br />
                <small className="text-muted">Central Park Reservoir</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={chickadee} className="card-img-top" alt="White-throated Sparrow" />
              <div className="card-body">
                <h5 className="card-title">White-throated Sparrow</h5>
                <small className="text-muted">redtail_99</small>
                <p className="card-text">This WTS is perched outside my window this evening… wonder what shes thinking about.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">1-13-21 • 5:33 pm</small> <br />
                <small className="text-muted">spotted near Mt Vernon Fire Dept HQ</small>
              </div>
            </div>
          </div>

        </div>

  );
}

export default Feed;
