import React, { useState } from 'react'
import 'chart.js/auto';
import {Doughnut, Bar, Chart} from 'react-chartjs-2'

const Skills = (props) => {

    const styles = {
        head: {
            // padding: '17px 25px', //5px-16px
            // textAlign: 'start', 
            // fontSize: 24 //24-32
            padding: '5%',
            fontSize: 48
        },
        aboutSection: {
            position: 'absolute',
            top: "10%",
            left: 0,
            
            // height: "50%",
            // background: 'rgba(15,15,15, 0.5)',
            // // border: "2px solid black",
            // borderRadius: "20px",
            padding: "10px",
            margin: 'auto 25px',
            
            
        },
        
    }

    const data = {
        labels: ["HTML", "CSS", "JavaScript",  "React", "REST API", "GraphQL API"],
        datasets: [{
            data: [4.5, 3.8, 3.9, 3.2, 3.1, 3.1],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                
                

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                
                

            ],
            borderWidth: 1
        }]
      }
    
  return (
        <div>
            {props.size.height > 550 && (<h1 style={styles.head}>Skills</h1>)}
            <div 
            style={props.size.width > 800 ? {margin: "auto 50px"} : {margin: "auto 25px"}}
            // style={{position: 'absolute', top: 0, left: 0, width: '100vw'}}
            >
                <Bar
                    style={props.size.height <= 550 ? {position: 'absolute', top: '25%', width: '100%'} : {}}
                    id="barChart"
                    data={data}
                    height={300}
                    width={300}
                    options={{
                        indexAxis: 'y',
                        // Elements options apply to all of the options unless overridden in a dataset
                        // In this case, we are setting the border of each horizontal bar to be 2px wide
                        elements: {
                          bar: {
                            borderWidth: 2,
                          }
                        },
                        legend: {
                            display: false
                        },
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltips: {
                                callbacks: {
                                   label: function(tooltipItem) {
                                          return tooltipItem.yLabel;
                                   }
                                }
                            },
                          title: {
                            display: true,
                            text: 'Skill Chart',
                            color: 'white',
                            font: {
                              size: 24
                            }
                          },
                          
                        },
                        scales: {
                            y: {
                              display: true,
                              scaleLabel: {
                                display: true,
                                labelString: 'Langs',
                                color: 'white'
                              },
                              ticks: {
                                color: 'white',
                                // font: {
                                //   size: 24
                                // }
                              }
                              
                              
                            },
                            
                            x: {
                              display: true,
                            //   scaleLabel: {
                            //     display: true,
                            //     labelString: 'Value'
                            //   },
                              ticks: {
                                min: 0,
                                max: 20,
                                stepSize: 1,
                                suggestedMin: 0.5,
                                suggestedMax: 5.5,
                                // font: {
                                //   size: 24
                                // },
                                color: ['white', 'blue', 'green', 'yellow', 'orange', 'red'],
                                
                                callback: function(label, index, labels) {
                                  switch (label) {
                                    case 0:
                                      return 'None';
                                    case 1:
                                      return 'Novice';
                                    case 2:
                                      return 'Adv. Beginner';
                                    case 3:
                                      return 'Competent';
                                    case 4:
                                      return 'Proficient';
                                    case 5:
                                      return 'Expert';
                                  }
                                }
                              },
                            //   gridLines: {
                            //     display: true,
                                
                            //   },
                              grid: {
                                color: 'grey',
                                borderColor: 'grey'
                              }
                            },
                        }
                        
                      }
                    }
                />
            </div>
            
        </div>
  )
}

export default Skills