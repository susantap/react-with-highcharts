/**
 * A simple utility class to return default utilities for different chart types
 */
import Highcharts from 'highcharts';
export const CHART_TYPE = {
    PIE :{
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        }
    }
}

/**
 * Simple function to return the merged result
 * @param chartType
 * @param options
 * @returns {*}
 */
export function getDefaultConfig(chartType, options){
    if(CHART_TYPE.hasOwnProperty(chartType))
    {
       return  Object.assign(CHART_TYPE[chartType],options);

    }else {

        throw new Error('Not an expected chart type')
    }

}