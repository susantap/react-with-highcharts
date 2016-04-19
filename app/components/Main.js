/**
 * Created by spattana on 4/6/16.
 */

import React  from 'react';
import Chart from './Highcharts.react';
import Highcharts from 'highcharts';
import {options} from './options_constants';
import {getDefaultConfig, CHART_TYPE} from '../util/util'


module.exports = React.createClass({
    render: function () {
        let pie_options = getDefaultConfig("PIE",options.options_pie)
        //  return React.createElement(Chart, { container: 'series', options:options_gauge ,modules:[SolidGauge] });
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <Chart container="spline" options={options.options_spline}></Chart>
                    </div>
                    <div className="col-md-4">
                        <Chart container="line2" options={options.options_line_2}></Chart>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Chart container="pie" options={pie_options}></Chart>
                    </div>

                    <div className="col-md-4">
                        <Chart container="polar" options={options.options_polar}></Chart>
                    </div>
                    <div className="col-md-4">
                        <Chart container="gauge" options={options.options_gauge}></Chart>
                    </div>

                </div>

            </div>

        )
        // return React.createElement(Chart, { container: 'test', options:  options_line_2 });

    }
});
