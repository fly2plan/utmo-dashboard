import React from 'react';
import { Link } from 'react-router-dom';
import { RenderRoutes, RouteConfig } from '../utils';
import './root.css'

const Root: React.FC<RouteConfig> = ({ routes }) => {
  return (
    <div className='root-container' >
      {/* <div className='root-banner' >
        <Link to={'/plan'}>
          Submit Plan
        </Link>
        <Link to={'/plans'}>
          Plan Statuses
        </Link>
      </div> */}
      <div className={'root-main'}>
        <RenderRoutes routes={routes} />
      </div>
    </div>
  )
}

export default Root;