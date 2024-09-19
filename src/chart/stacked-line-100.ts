import { loadCultureFiles } from '../common/culture-loader';
import { Chart, Category, Legend, Tooltip, ILoadedEventArgs, ChartTheme, StackingLineSeries, Highlight} from '@syncfusion/ej2-charts';
import { Browser } from '@syncfusion/ej2-base';
Chart.Inject(StackingLineSeries, Category, Legend, Tooltip, Highlight);

/**
 * Sample for StackedLine Series
 */

let chartData: Object[] = [
    { x: 'Jan', y: 90, y1: 40, y2: 70, y3: 120 },
    { x: 'Feb', y: 80, y1: 90, y2: 110, y3: 70 },
    { x: 'Mar', y: 50, y1: 80, y2: 120, y3: 50 },
    { x: 'Apr', y: 70, y1: 30, y2: 60, y3: 180 },
    { x: 'May', y: 30, y1: 80, y2: 80, y3: 30 },
    { x: 'Jun', y: 10, y1: 40, y2: 30, y3: 270 },
    { x: 'Jul', y: 100, y1: 30, y2: 70, y3: 40 },
    { x: 'Aug', y: 55, y1: 95, y2: 55, y3: 75 },
    { x: 'Sep', y: 20, y1: 50, y2: 40, y3: 65 },
    { x: 'Oct', y: 40, y1: 20, y2: 80, y3: 95 },
    { x: 'Nov', y: 45, y1: 15, y2: 45, y3: 195 },
    { x: 'Dec', y: 75, y1: 45, y2: 65, y3: 115 }
];
(window as any).default = (): void => {
    loadCultureFiles();
    let chart: Chart = new Chart({
        primaryXAxis: {
            majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
            interval: 1, lineStyle: { width: 0 }, valueType: 'Category' , labelRotation: Browser.isDevice ? -45 : 0, labelIntersectAction: Browser.isDevice ? 'None' : 'Trim'
        },
        primaryYAxis:
        {
            lineStyle: { width: 0 }, interval: 20, minorTickLines: { width: 0 },
            majorTickLines: { width: 0 }, majorGridLines: { width: 1 }, minorGridLines: { width: 1 },
        },
        chartArea: { border: { width: 0 } },
        series: [
            {
                type: 'StackingLine100', dataSource: chartData, marker: { visible: true, shape: 'Circle', width: 7, isFilled: true, height: 7},
               xName: 'x', width: 2, yName: 'y', name: 'John'
            },
            {
                type: 'StackingLine100', dataSource: chartData, marker: { visible: true, isFilled: true, shape: 'Diamond', width: 7, height: 7 },
               xName: 'x', width: 2, yName: 'y1', name: 'Peter'
            },
            {
                type: 'StackingLine100', dataSource: chartData, marker: { visible: true, isFilled: true, shape: 'Rectangle', width: 5, height: 5},
                 xName: 'x', width: 2, yName: 'y2', name: 'Steve'

            },
            {
                type: 'StackingLine100', dataSource: chartData, marker: { isFilled: true, visible: true, shape: 'Triangle', width: 6, height: 6 },
              xName: 'x', width: 2, yName: 'y3', name: 'Charle'

            }
        ],
        tooltip: {
            enable: true,
            format: '${point.x} : <b>${point.y} (${point.percentage}%)</b>'
        },
        title: 'Family Expenses for Year', width: Browser.isDevice ? '100%' : '75%',
        legendSettings: {enableHighlight:true},
        load: (args: ILoadedEventArgs) => {
            let selectedTheme: string = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    chart.appendTo('#container');
};