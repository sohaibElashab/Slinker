import React from 'react'
import Sidebar from '../Layouts/Sidebar'

const Dashboard = () => {
  return (
    <div className="content">
    <Sidebar/>
      <main>
        <div className="navbar__content">
          <div className="search__content">
            <img src="/Assets/content_icones/search.svg" alt="" />
            <input type="text" name="" id="" placeholder="Search" />
          </div>
          <div className="compte__content">
            <i className="far fa-user"></i>
            <span>3</span>
          </div>
        </div>
        <div className="main__dashboard">
          <div className="title__content">
            <span>Dashboard</span>
          </div>
          <div className="content__dashboard">
            <div className="sites__dashboard">
              <div className="site__dashnoard">
                <div className="site__logo__dashnoard ">
                  <div className="bg__logo__dashboard"></div>
                </div>
                <div className="site__name__dashnoard">
                  Eysi.net
                  <span>Site Health Score</span>
                </div>
              </div>
              <div className="site__dashnoard active__site__dashboard">
                <div className="site__logo__dashnoard ">
                  <div className="bg__logo__dashboard"></div>
                </div>
                <div className="site__name__dashnoard">
                  Eysi.net
                  <span>Site Health Score</span>
                </div>
              </div>
              <div className="site__dashnoard">
                <div className="site__logo__dashnoard ">
                  <div className="bg__logo__dashboard"></div>
                </div>
                <div className="site__name__dashnoard">
                  Eysi.net
                  <span>Site Health Score</span>
                </div>
              </div>
              <div className="site__dashnoard">
                <div className="site__logo__dashnoard ">
                  <div className="bg__logo__dashboard"></div>
                </div>
                <div className="site__name__dashnoard">
                  Eysi.net
                  <span>Site Health Score</span>
                </div>
              </div>
              <div className="site__dashnoard">
                <div className="site__logo__dashnoard ">
                  <div className="bg__logo__dashboard"></div>
                </div>
                <div className="site__name__dashnoard">
                  Eysi.net
                  <span>Site Health Score</span>
                </div>
              </div>
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
              <div className="button__control__dashboard">
                <div className="control__button__dashboard">
                  <div className="control__dashboard button__control__recherch__dashboard">
                    <i className="fas fa-redo-alt"></i>
                    <span>Recheck</span>
                  </div>
                  <div className="control__dashboard button__control__download__dashboard">
                    <i className="fas fa-download"></i>
                    <span>Download</span>
                  </div>
                </div>
                <div className="button__control__upgrade__dashboard">
                  Improve Managment by upgrading your account
                  <button>Upgrade</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard