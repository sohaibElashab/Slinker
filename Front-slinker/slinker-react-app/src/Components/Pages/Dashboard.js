import React from 'react'
import Sidebar from '../Layouts/Sidebar'
import ControlButton from '../Layouts/ControlButton'
import { useSelector } from 'react-redux';
import NavSearch from '../Layouts/NavSearch';

const Dashboard = () => {
  const websites = useSelector((state) => state.websites.websites);
  return (
    <div className="content">
    <Sidebar/>
      <main>
        <NavSearch/>
        <div className="main__dashboard">
          <div className="title__content">
            <span>Dashboard</span>
          </div>
          <div className="content__dashboard">
            <div className="sites__dashboard">
              <div className="site__dashnoard active__site__dashboard">
                <div className="site__logo__dashnoard ">
                  <div className="bg__logo__dashboard"></div>
                </div>
                <div className="site__name__dashnoard">
                  Eysi.net
                  <span>Site Health Score</span>
                </div>
              </div>
              {
                websites !== undefined ? websites.map((element) => (
                  <div className="site__dashnoard" key={element.id}>
                    <div className="site__logo__dashnoard ">
                      <div className="bg__logo__dashboard"></div>
                    </div>
                    <div className="site__name__dashnoard">
                      {element.name}
                      <span>Site Health Score</span>
                    </div>
                  </div>
                )):""
              }
            </div>
            <div className="health__products__dashboard">
              <div className="health__dashboard">
                Site Health Score
                <div className="health__diagram__dashboard"></div>
              </div>
              <div className="products__dashboard">
                Total Products
                <div className="products__diagram__dashboard"></div>
              </div>
            </div>
            <div className="pages__links__dashboard">
              <div className="pages__dashboard">
                Total Page
                <div className="page__dashboard"></div>
              </div>
              <div className="links__dashboard">
                Total Links
                <div className="link__dashboard"></div>
              </div>
              <ControlButton big={false}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
