/**
 * Created by spattana on 4/6/16. This is the core component to create different charts
 */

import React from 'react';
import HighchartsMore from 'highcharts-more';
import Highcharts from 'highcharts';
import SolidGaugeModule from 'highcharts-solid-gauge';

module.exports = React.createClass({
    
    // When the DOM is ready, create the chart.
    componentDidMount: function () {
        // Extend Highcharts with modules. Most probably we wont be using these modules

        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        // Set container which the chart should render to.
        //new HighchartsMore
        HighchartsMore(Highcharts);
        SolidGaugeModule(Highcharts)
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.props.container,
            this.props.options
        );
    },
    //Destroy chart before unmount.
    componentWillUnmount: function () {
        this.chart.destroy();
    },
    //Create the div which the chart will be rendered to.
    render: function () {

        return (<div id={ this.props.container}></div>)
        
    }
});
