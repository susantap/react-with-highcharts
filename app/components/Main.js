/**
 * Created by spattana on 4/6/16.
 */

import React, {Component} from 'react';
import Chart from './Highcharts.react';
import Highcharts from 'highcharts';
import {options} from './options_constants';
import {getDefaultConfig} from '../util/util'



export default class Mainlayout extends Component {
    // pie_options = getDefaultConfig("PIE",options.options_pie);
    
    updateDynamicInfo(chart)
    {
        console.log('chart ref');
        console.log(chart);
        // set up the updating of the chart each second
        var series = chart.series[0];
        setInterval(function () {
            var x = (new Date()).getTime(), // current time
                y = Math.random();
            series.addPoint([x, y], true, true);
        }, 1000); 
    }
    
    getSplineConfig()
    {
        var me = this;
        //console.log(me.updateDynamicInfo)
        return Highcharts.merge(options.options_spline,{
            title: {
                text: 'Susanta'
            },
            chart: {
                type: 'line',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        me.updateDynamicInfo(this);

                    }
                }
            }
            
        })
    }


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <Chart container="spline" options={this.getSplineConfig()}></Chart>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Chart container="pie" options={getDefaultConfig("PIE",options.options_pie)}></Chart>
                        </div>

                        <div className="col-md-4">
                            <Chart container="polar" options={options.options_polar}></Chart>
                        </div>
                        <div className="col-md-4">
                            <Chart container="gauge" options={options.options_gauge}></Chart>
                        </div>

                    </div>

                </div>
            </div>

        );
    }
}


