import { loadCultureFiles } from '../common/culture-loader';
import { Grid, Resize, Sort, Group, Filter, ColumnMenu, Page, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { orderDetails } from './data-source';

Grid.Inject(Resize, Sort, Group, Filter, ColumnMenu, Page, Edit, Toolbar);

/**
 * Column menu in grid sample
 */
(window as any).default = (): void => {
    loadCultureFiles();
    let grid: Grid = new Grid(
        {
            dataSource: orderDetails,
            allowGrouping: true,
            allowSorting: true,
            allowFiltering: true,
            filterSettings: { type: 'CheckBox' },
            allowPaging: true,
            groupSettings: { showGroupedColumn: true },
            showColumnMenu: true,
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 160, textAlign: 'Right', showInColumnChooser: false, isPrimaryKey: true, validationRules: { required: true, number: true } },
                { field: 'CustomerName', headerText: 'Customer Name', width: 200, validationRules: { required: true, minLength: 5 } },
                { field: 'Freight', format: 'C2', width: 160, textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 } },
                { field: 'ShipName', headerText: 'Ship Name', width: 200 },
                { field: 'ShipCountry', visible: false, headerText: 'Ship Country', width: 200, editType: 'dropdownedit' },
                { field: 'ShipCity', headerText: 'Ship City', width: 150 }
            ]
        });
    grid.appendTo('#Grid');
};
