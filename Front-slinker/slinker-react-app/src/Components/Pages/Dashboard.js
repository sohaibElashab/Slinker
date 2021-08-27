import React from 'react'
import Sidebar from '../Layouts/Sidebar'
import ControlButton from '../Layouts/ControlButton'
import { useSelector } from 'react-redux';
import NavSearch from '../Layouts/NavSearch';
import {Bar, defaults, Doughnut, Line} from 'react-chartjs-2'


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
                <div className="health__diagram__dashboard">
                  <Bar 
                        data={{
                            labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'Mai' , 'Jun' , 'Jul'],
                            datasets: [
                                {
                                    label: '# of Votes',
                                    data: [12, 19, 3, 5, 2, 3 , 7 , 16],
                                    backgroundColor: [
                                        'rgba(80, 62, 157, 1)',
                                    ],
                                    borderWidth: 1
                                }
                            ]
                        }}
                        height={200}
                        width={100}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
              </div>
              <div className="products__dashboard none">
                Total Products
                <div className="products__diagram__dashboard">
                  <Doughnut 
                        data={{
                            labels: ['Available', 'Unavailable', 'Error 404'],
                            datasets: [
                                {
                                    label: '# of Votes',
                                    data: [12, 19, 3],
                                    backgroundColor: [
                                        '#503E9D',
                                        '#C5ADD2',
                                        '#DBDCEA',
                                    ],
                                    borderWidth: 1
                                }
                            ]
                        }}
                        height={200}
                        width={100}
                        options={{ maintainAspectRatio: false }}
                    />

                </div>
              </div>
            </div>
            <div className="pages__links__dashboard none">
              <div className="pages__dashboard">
                Total Page
                <div className="page__dashboard">
                  <Line 
                        data={{
                            labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'Mai' , 'Jun' , 'Jul'],
                            datasets: [
                                {
                                    label: '# of Votes',
                                    data: [12, 19, 3, 5, 2, 3 , 7 , 16],
                                    backgroundColor: [
                                        'rgba(80, 62, 157, 1)',
                                    ],
                                    borderWidth: 1
                                }
                            ]
                        }}
                        height={200}
                        width={100}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
              </div>
              <div className="links__dashboard">
                Total Links
                <div className="link__dashboard">
                  <Doughnut 
                        data={{
                            labels: ['Available', 'Unavailable', 'Error 404'],
                            datasets: [
                                {
                                    label: '# of Votes',
                                    data: [12, 19, 3],
                                    backgroundColor: [
                                        '#503E9D',
                                        '#C5ADD2',
                                        '#DBDCEA',
                                    ],
                                    borderWidth: 1
                                }
                            ]
                        }}
                        height={200}
                        width={100}
                        options={{ maintainAspectRatio: false }}
                    />

                </div>
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
