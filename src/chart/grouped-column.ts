import { loadCultureFiles } from '../common/culture-loader';
import { ChartTheme, Chart, ColumnSeries, Category, Legend, DataLabel, Tooltip, ILoadedEventArgs } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, DataLabel, Category, Legend, Tooltip);
import { Browser } from '@syncfusion/ej2-base';

/**
 * Sample for Column Series
 */
(window as any).default = (): void => {
    loadCultureFiles();
    let chart: Chart = new Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
        },
        chartArea: { border: { width: 0 } },
        primaryYAxis:
        {
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            title: 'Medal Count',
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'USA Total Medals', groupName: 'USA', columnWidth: 0.7,
                dataSource: [{ x: '2012', y: 104 }, { x: '2016', y: 121 }, { x: '2020', y: 113 }], columnSpacing: 0.1,
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'USA Gold Medals', groupName: 'USA', columnWidth: 0.5,
                dataSource: [{ x: '2012', y: 46 }, { x: '2016', y: 46 }, { x: '2020', y: 39 }], columnSpacing: 0.1,
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'UK Total Medals', groupName: 'UK', columnWidth: 0.7, 
                dataSource: [{ x: '2012', y: 65 }, { x: '2016', y: 67 },{ x: '2020', y: 65 }], columnSpacing: 0.1,
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'UK Gold Medals', groupName: 'UK', columnWidth: 0.5,
                dataSource: [{ x: '2012', y: 29 }, { x: '2016', y: 27 },{ x: '2020', y: 22 }], columnSpacing: 0.1,
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'China Total Medals', groupName: 'China', columnWidth: 0.7, 
                dataSource: [{ x: '2012', y: 91 }, { x: '2016', y: 70 },{ x: '2020', y: 88 }], columnSpacing: 0.1,
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'China Gold Medals', groupName: 'China', columnWidth: 0.5,
                dataSource: [{ x: '2012', y: 38 }, { x: '2016', y: 26 },{ x: '2020', y: 38 }], columnSpacing: 0.1,
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            },
        ],
        //Initializing Chart title
        width: Browser.isDevice ? '100%' : '75%',
        title: 'Olympics Medal Tally', tooltip: { enable: true },
        load: (args: ILoadedEventArgs) => {
            let selectedTheme: string = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    chart.appendTo('#container');
};