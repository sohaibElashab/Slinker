import React, { useEffect, useState, useRef } from 'react'
import Sidebar from '../Layouts/Sidebar'
import ControlButton from '../Layouts/ControlButton'
import { useSelector } from 'react-redux';
import NavSearch from '../Layouts/NavSearch';
import {Bar, defaults, Doughnut, Line} from 'react-chartjs-2'
import { PDFExport } from "@progress/kendo-react-pdf";


const Dashboard = () => {
  const websites = useSelector((state) => state.websites.websites);
  const Idsite = (id) => {
    var elems = document.querySelectorAll(".change__site__dashboard");

    [].forEach.call(elems, function (el) {
      el.classList.remove("active__site__dashboard");
    });
    document.getElementById("site"+id).classList.add("active__site__dashboard");
  };
  const selectSiteDash = () => {
    if(websites !== undefined){
      if(document.getElementById("site"+websites[0].id))
        console.log(document.getElementById("site"+websites[0].id).classList.add("active__site__dashboard"))
    }
  };
  useEffect(() => {
    selectSiteDash();
  }, []);
  selectSiteDash();
  
  const AmazonProductSection = useRef(null)

  const exportAmazonProduct = (event) =>{
      // savePDF(AmazonProductSection.current , {paperSize : 'A4'});
      AmazonProductSection.current.save();
      console.log("pdf");
  }
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
              {/* <div className="site__dashnoard active__site__dashboard">
                <div className="site__logo__dashnoard ">
                  <div className="bg__logo__dashboard"></div>
                </div>
                <div className="site__name__dashnoard">
                  Eysi.net
                  <span>Site Health Score</span>
                </div>
              </div> */}
              {
                websites !== undefined ? websites.map((element) => (
                  <div className="site__dashnoard change__site__dashboard" 
                    key={element.id}
                    id={"site"+element.id}
                    onClick={() => Idsite(element.id)}>
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
                                    label: 'Site Health',
                                    data: [22, 19, 43, 50, 92, 36 , 72 , 16],
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
                                    label: 'Total Page',
                                    data: [100, 19, 43, 50, 92, 36 , 72 , 16],
                                    backgroundColor: [
                                        'rgba(80, 62, 157, 1)',
                                    ],
                                    borderColor: [
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
              <ControlButton big={false} exportAmazonProduct={exportAmazonProduct}/>
            </div>
          </div>
        </div>
      </main>
      <div className="pdf__summary">
          <PDFExport forcePageBreak=".page-break"  ref={AmazonProductSection} paperSize="A4">
              <div 
                style={{
                  width: "500px",
                  height: "400px",
                  margin: "50px auto",
                }}>
                <div className="health__diagram__dashboard">
                Site Health Score
                  <Bar 
                        data={{
                            labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'Mai' , 'Jun' , 'Jul'],
                            datasets: [
                                {
                                    label: 'Site Health',
                                    data: [22, 19, 43, 50, 92, 36 , 72 , 16],
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
                <div className="products__diagram__dashboard page-break">
                Total Products
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
                <div className="page__dashboard page-break">
                Total Page
                  <Line 
                        data={{
                            labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'Mai' , 'Jun' , 'Jul'],
                            datasets: [
                                {
                                    label: 'Total Page',
                                    data: [100, 19, 43, 50, 92, 36 , 72 , 16],
                                    backgroundColor: [
                                        'rgba(80, 62, 157, 1)',
                                    ],
                                    borderColor: [
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
                <div className="link__dashboard page-break">
                Total Links
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
          </PDFExport>
      </div>
    </div>
  )
}

export default Dashboard
