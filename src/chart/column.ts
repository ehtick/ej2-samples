import { loadCultureFiles } from '../common/culture-loader';
import { ChartTheme, Chart, ColumnSeries, Category, Legend, DataLabel, Tooltip, ILoadedEventArgs, Highlight } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, DataLabel, Category, Legend, Tooltip, Highlight );
import { Browser } from '@syncfusion/ej2-base';

/**
 * Sample for Column Series
 */
(window as any).default = (): void => {
    loadCultureFiles();
    let chart: Chart = new Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, labelIntersectAction: Browser.isDevice ? 'None' : 'Trim', labelRotation: Browser.isDevice ? -45 : 0, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }
        },
        chartArea: { border: { width: 0 }},
        primaryYAxis:
        {
            title: 'Medal Count', majorTickLines: { width: 0 }, lineStyle: { width: 0 }, maximum: 50, interval: 10,
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Gold', columnSpacing:0.1, tooltipMappingName:'tooltipMappingName' ,
                dataSource: [{ x: 'GBR', y: 27, tooltipMappingName:'Great Britain'  }, { x: 'CHN', y: 26 , tooltipMappingName:'China' }, { x: 'AUS', y: 8, tooltipMappingName:'Australia'}, { x: 'RUS', y: 19, tooltipMappingName:'Russia' }, { x: 'GER', y: 17, tooltipMappingName:'Germany' }, { x: 'UA', y: 2, tooltipMappingName:'Ukraine' }, { x: 'ES', y: 7, tooltipMappingName:'Spain' }, { x: 'UZB', y: 4, tooltipMappingName:'Uzbekistan' }, { x: 'JPN', y: 12, tooltipMappingName:'Japan' }, { x: 'NL', y: 8, tooltipMappingName:'NetherLand' }, { x: 'USA', y: 46, tooltipMappingName:'United States' }],
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Silver', columnSpacing:0.1,tooltipMappingName:'tooltipMappingName' ,
                dataSource: [{ x: 'GBR', y: 23 , tooltipMappingName:'Great Britain'}, { x: 'CHN', y: 18, tooltipMappingName:'China'}, { x: 'AUS', y: 11, tooltipMappingName:'Australia' }, { x: 'RUS', y: 17, tooltipMappingName:'Russia' }, { x: 'GER', y: 10, tooltipMappingName:'Germany' }, { x: 'UA', y: 5, tooltipMappingName:'Ukraine'}, { x: 'ES', y: 4, tooltipMappingName:'Spain' }, { x: 'UZB', y: 2, tooltipMappingName:'Uzbekistan' }, { x: 'JPN', y: 8, tooltipMappingName:'Japan' }, { x: 'NL', y: 7, tooltipMappingName:'NetherLand' }, { x: 'USA', y: 37, tooltipMappingName:'United States' }],    
            },
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Bronze', columnSpacing:0.1,tooltipMappingName:'tooltipMappingName' ,
                dataSource: [{ x: 'GBR', y: 17 , tooltipMappingName:'Great Britain'}, { x: 'CHN', y: 26, tooltipMappingName:'China' }, { x: 'AUS', y: 10, tooltipMappingName:'Australia' }, { x: 'RUS', y: 20, tooltipMappingName:'Russia' }, { x: 'GER', y: 15, tooltipMappingName:'Germany' }, { x: 'UA', y: 24, tooltipMappingName:'Ukraine' }, { x: 'ES', y: 6, tooltipMappingName:'Spain' }, { x: 'UZB', y: 7, tooltipMappingName:'Uzbekistan' }, { x: 'JPN', y: 8, tooltipMappingName:'Japan' }, { x: 'NL', y: 4, tooltipMappingName:'NetherLand' }, { x: 'USA', y: 38, tooltipMappingName:'United States' }],
            }
        ],
        //Initializing Chart title
        width: Browser.isDevice ? '100%' : '75%',
        title: 'Olympic Medal Counts - RIO', tooltip: { enable: true, header:"<b>${point.tooltip}</b>", shared: true },
        legendSettings: {enableHighlight:true},
        load: (args: ILoadedEventArgs) => {
            let selectedTheme: string = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            if (selectedTheme === 'highcontrast') {
            args.chart.series[0].marker.dataLabel.font.color = '#000000';
            args.chart.series[1].marker.dataLabel.font.color = '#000000';
            args.chart.series[2].marker.dataLabel.font.color = '#000000';
            }
        }
    });
    chart.appendTo('#container');
};