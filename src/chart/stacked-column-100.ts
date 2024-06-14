import { loadCultureFiles } from '../common/culture-loader';
import { Chart, StackingColumnSeries, Category, Tooltip, Legend, ILoadedEventArgs, ChartTheme, Highlight } from '@syncfusion/ej2-charts';
Chart.Inject(StackingColumnSeries, Category, Tooltip, Legend, Highlight);
import { Browser } from '@syncfusion/ej2-base';
let chartData: any[] = [
    { x: '2013', y: 9628912, y1: 4298390, y2: 2842133, y3: 2006366  },
    { x: '2014', y: 9609326, y1: 4513769, y2: 3016710, y3: 2165566  },
    { x: '2015', y: 7485587, y1: 4543838, y2: 3034081, y3: 2279503  },
    { x: '2016', y: 7793066, y1: 4999266, y2: 2945295, y3: 2359756  },
    { x: '2017', y: 6856880, y1: 5235842, y2: 3302336, y3: 2505741  }
];

/**
 * Sample for StackingColumn100 Series Sample
 */
(window as any).default = (): void => {
    loadCultureFiles();
    let chart: Chart = new Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            labelIntersectAction: 'Rotate45',
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            rangePadding: 'None',
            interval: 20,
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
            lineStyle: {
                width: 0
            }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                dataSource: chartData, xName: 'x', yName: 'y',
                type: 'StackingColumn100',
                name: 'General Motors', columnWidth:0.5, border:{width:1,color:"white"}
            }, {
                dataSource: chartData, xName: 'x', yName: 'y1',
                type: 'StackingColumn100', name: 'Honda', columnWidth:0.5, border:{width:1,color:"white"}
            }, {
                dataSource: chartData, xName: 'x', yName: 'y2',
                type: 'StackingColumn100', name: 'Suzuki', columnWidth:0.5, border:{width:1,color:"white"}

            }, {
                dataSource: chartData, xName: 'x', yName: 'y3',
                type: 'StackingColumn100', name: 'BMW', columnWidth:0.5, border:{width:1,color:"white"}

            }
        ],
        load: (args: ILoadedEventArgs) => {
            let selectedTheme: string = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
        width : Browser.isDevice ? '100%' : '75%',
        //Initializing Chart Title
        title: 'Motor Vehicle Production by Manufacturer',
        legendSettings: {
            enableHighlight :true
        },
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true, format: '${point.x} : <b>${point.y} (${point.percentage}%)</b>' 
        }
    });
    chart.appendTo('#container');
};