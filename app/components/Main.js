/**
 * Created by spattana on 4/6/16.
 */

import React, {Component} from 'react';
import Chart from './Highcharts.react';
import Highcharts from 'highcharts';
import {constructChartConfigs} from './chart_utility';
import {options_1} from './options_constants_1';
import {getDefaultConfig} from '../util/util';
import {chartTypeCostants} from './chart_type_constants'



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
        const myLineConfig = {
            title: {
                text: 'Susanta'
            },
            chart: {
                type: 'line',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        var me_1 = this;
                        me.updateDynamicInfo(me_1);

                    }
                }
            }

        };
       // var fn = options();
        console.log(constructChartConfigs(chartTypeCostants.LINE, myLineConfig))
        
        //return Highcharts.merge(options_1.options_spline, myLineConfig)

       return constructChartConfigs(chartTypeCostants.LINE , myLineConfig)
    }
    
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <Chart container="spline" options={this.getSplineConfig()}></Chart>
                        </div>
                    </div>
                    

                </div>
            </div>

        );
    }
}


