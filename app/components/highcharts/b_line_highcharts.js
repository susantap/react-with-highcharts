/**
 * Created by vdagumat on 3/3/2016.
 */

import React from 'react';
import {Component} from 'react';
import ReactHighcharts from './b_highchart';

export default class HighchartsComponent extends Component {
    constructor(props) {
        super(props);
        this.type = this.props.chartType;
        this.title = this.props.title;
        this.subtitle = this.props.subtitle;
        this.xtype=this.props.xtype;      
        this.xtickInterval=this.props.xtickInterval;
        this.ytickInterval=this.props.ytickInterval;
       // this.highChartRef = this.prop.highChartRef
        if(this.props.data!= null && this.props.data.length >0){
            this.xdata=this.props.data[0].timeSeries;
        }else{
            this.xdata=this.props.data;
        }

        this.data = this.props.data;
        this.chartConfigEtc = function()
        {
            let me = this;

            var chartConfig = {
                colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],

                chart: {
                    type: this.type,
                    zoomType:'x',
                    renderTo: this.chart,

                },
                title: {
                    text: this.title
                },
                events: {
                    load: function () {
                       // me.highChartRef (this);
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);

                    }
                },
                subtitle: {
                    text: this.subtitle
                },

                xAxis: {
                    tickWidth: 0,
                    gridLineWidth: 1,
                    lineWidth: 1,
                    labels: {
                        format: '{value:%I:%M %p }',

                        align: 'left',
                        x: 3,
                        y: -3
                    },
                    categories:this.xdata,
                    type: 'datetime',
                    //tickInterval:this.xtickInterval

                },
                yAxis: {
                    lineWidth: 1,
                    tickInterval: this.ytickInterval,
                    title: {
                        text: null
                    },
                    labels: {
                        enabled: true,
                        format: '{value}'
                    },

                },

                series: this.data

            };

            return chartConfig;

        };

         var chartConfig = {
            colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],

            chart: {
                type: this.type,
                zoomType:'x',
                renderTo: this.chart,

            },
            title: {
                text: this.title
            },
            events: {
                load: function () {
                    // me.highChartRef (this);
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 1000);

                }
            },
            subtitle: {
                text: this.subtitle
            },

            xAxis: {
                tickWidth: 0,
                gridLineWidth: 1,
                lineWidth: 1,
                labels: {
                    format: '{value:%I:%M %p }',

                    align: 'left',
                    x: 3,
                    y: -3
                },
                categories:this.xdata,
                type: 'datetime',
                //tickInterval:this.xtickInterval

            },
            yAxis: {
                lineWidth: 1,
                tickInterval: this.ytickInterval,
                title: {
                    text: null
                },
                labels: {
                    enabled: true,
                    format: '{value}'
                },

            },

            series: this.data

        };



        this.state = {config: chartConfig};
       // this.state = {config: this.chartConfigEtc()};
    }

    componentWillMount(){

    }

    componentWillReceiveProps(nextProps){
        let newData=this.state.config;
        newData.series=nextProps.data;
        this.setState({config:newData});
    }
    render() {
        return (
            <div>
                <ReactHighcharts config={this.state.config}></ReactHighcharts>
            </div>
        );
    }
}



