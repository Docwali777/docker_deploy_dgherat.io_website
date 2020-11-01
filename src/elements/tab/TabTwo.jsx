import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{

    render(){
       const heart = <span style={{color: "red"}} > &#10084; </span>
        let 
        tab1 = "Main skills",
        // tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        {/* <Tab>{tab2}</Tab> */}
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                 <a >General Pediatric Cardiologist <span>{""} </span></a>
                                                   {heart} {(new Date).getFullYear() - 2006} years of experience
                                                </li>
                                                <li>
                                                    <a >Expertise in Transthoracic Echcardiography<span> {} </span></a>
                                                
                                                </li>
                                                <li>
                                                    <a >Preventive Cardiology </a>
                                                    <span> {heart} Hypertension  </span> <br/>
                                                    <span> {heart} Hyperlipidemia"</span>
                                                   
                            
                                                </li>

                                                <li>
                                                    <a >Pediatric Obesity  <span> {""}  </span></a>
                                                   
                            
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Founder and CEO <span> - The Healthy Heart Program</span></a> 2011 - Present
                                               </li>
                                               <li>
                                                   <a href="/service">Co-Founder and Vice President<span> - Casa Pediatrics</span></a> 2015 - Present
                                               </li>
                                               <li>
                                                   <a href="/service"> Co-Founder and CEO <span> - PM KIDZ </span></a> 2019- Present
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                           <li>
                                                   <a href="/service"> Pediatric Cardiology Fellowship <span> - Rainbow Babies and Children's Hospital </span></a> 2003 - 2006
                                               </li>
                                               <li>
                                                   <a href="/service"> Pediatric Residency <span> - Winthrop University Hospital</span></a> 2000 - 2003
                                               </li>
                                               <li>
                                                   <a href="/service"> Medical Degree <span> - Upstate Medical University</span></a> 1998 - 2000
                                               </li>
                                               <li>
                                                   <a href="/service"> Bachelor of Science <span> - Sophie Davis School of Biomedical Education</span></a> 1993 - 1998
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;