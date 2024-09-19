import { loadCultureFiles } from '../common/culture-loader';
/**
 * MultiColumn ComboBox Sorting Sample
 */
import { MultiColumnComboBox, ColumnModel, SortOrder } from '@syncfusion/ej2-multicolumn-combobox';
import * as data from './dataSource.json';

(window as any).default = (): void => {
    loadCultureFiles();

    const columns: ColumnModel[] = [
        { field: 'Name', header: 'Name', width: 100 },
        { field: 'YearOfJoining', header: 'Year Of Joining', width: 100 },                      
        { field: 'Status', header: 'Status', width: 60 },
        { field: 'Location', header: 'Location', width: 90 },
        { field: 'Experience', header: 'Experience in Year', width: 120 }
      ];

    // Initialize multicolumn ComboBox component
    let sortingComboboxObj: MultiColumnComboBox = new MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: (data as any).workDetails,
        //set column of the multicolumn combobox
        columns: columns,
        //set the fields of the multicolumn combobox
        fields: { text: 'Name', value: 'YearOfJoining' },
        //set the placeholder to multiColumn comboBox input element
        placeholder: 'Select a name',
        // set the height of the popup element
        popupHeight: '230px',
        //set allowsorting to true to enable sort
        allowSorting: true,
        //set sort order to ascending
        sortOrder: SortOrder.Ascending,
        sortType: 'MultiColumn',
    });
    sortingComboboxObj.appendTo('#sorting');
};