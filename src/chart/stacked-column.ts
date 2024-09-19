import { loadCultureFiles } from '../common/culture-loader';
import { Chart, StackingColumnSeries, Category, Legend, Tooltip, ILoadedEventArgs, ChartTheme, Highlight } from '@syncfusion/ej2-charts';
import { Browser } from '@syncfusion/ej2-base';
import { IAxisLabelRenderEventArgs} from '@syncfusion/ej2/charts';
import { EmitType } from '@syncfusion/ej2/base';
Chart.Inject(StackingColumnSeries, Category, Legend, Tooltip, Highlight);

/**
 * Sample for StackedColumn Series
 */

(window as any).default = (): void => {
    loadCultureFiles();
    let chart: Chart = new Chart({

        //Initializing Primary X Axis
        primaryXAxis: {
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            interval: 1,
            lineStyle: { width: 0 },
            labelIntersectAction: 'Rotate45',
            valueType: 'Category'
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            title: 'Vehicles Production (In Millions)',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
            labelFormat: '{value}',
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'StackingColumn',
                dataSource: [
                    { x: '2013', y: 9628912 },
                    { x: '2014', y: 9609326 },
                    { x: '2015', y: 7485587 },
                    { x: '2016', y: 7793066 },
                    { x: '2017', y: 6856880 }],
                xName: 'x', width: 2,
                yName: 'y', name: 'General Motors', columnWidth:0.6 , border:{width:1,color:"white"}
            },
            {
                type: 'StackingColumn',
                dataSource: [
                    { x: '2013', y: 4298390 },
                    { x: '2014', y: 4513769 },
                    { x: '2015', y: 4543838 },
                    { x: '2016', y: 4999266 },
                    { x: '2017', y: 5235842 }],
                xName: 'x', width: 2,
                yName: 'y', name: 'Honda', columnWidth:0.6 , border:{width:1,color:"white"}
            },
            {
                type: 'StackingColumn',
                dataSource: [
                    { x: '2013', y: 2842133 },
                    { x: '2014', y: 3016710 },
                    { x: '2015', y: 3034081 },
                    { x: '2016', y: 2945295 },
                    { x: '2017', y: 3302336 }],
                xName: 'x', width: 2,
                yName: 'y', name: 'Suzuki', columnWidth:0.6 , border:{width:1,color:"white"}

            },
            {
                type: 'StackingColumn',
                dataSource: [
                    { x: '2013', y: 2006366  },
                    { x: '2014', y: 2165566  },
                    { x: '2015', y: 2279503  },
                    { x: '2016', y: 2359756  },
                    { x: '2017', y: 2505741  }],
                xName: 'x', width: 2,
                yName: 'y', name: 'BMW', columnWidth:0.6 , border:{width:1,color:"white"}

            }
        ],

        //Initializing Chart title
        title: 'Motor Vehicle Production by Manufacturer',
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true
        },
        width : Browser.isDevice ? '100%' : '75%',
        legendSettings: {
            enableHighlight :true
        },
        load: (args: ILoadedEventArgs) => {
            let selectedTheme: string = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        axisLabelRender: function (args) {
            args.text = args.text.replace("0000000", "0M").replace("000000", "M");
        }
    });
    chart.appendTo('#container');
};