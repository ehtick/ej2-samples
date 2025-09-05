import { loadCultureFiles } from '../common/culture-loader';
import { Gantt, Selection, Edit, Toolbar } from '@syncfusion/ej2-gantt';
import { taskModeData } from './data-source';

/**
 * Default Gantt sample
 */

Gantt.Inject(Selection, Edit, Toolbar);
(window as any).default = (): void => {
    loadCultureFiles();
    let gantt: Gantt = new Gantt(
        {
        dataSource: taskModeData,
        allowSorting: true,
        enableContextMenu: true,
        height: '650px',
        rowHeight:46,
        taskbarHeight:25,
        allowSelection: true,
        highlightWeekends: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            endDate: 'EndDate',
            dependency: 'Predecessor',
            child: 'Children',
            manual: 'isManual',
        },
        taskMode : 'Custom',
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search'],
        columns: [
            { field: 'TaskID', visible: false},
            {field: 'TaskName'},
            { field: 'isManual'}
        ],
        validateManualTasksOnLinking: true,
        treeColumnIndex: 1,
        editSettings: {
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            position: '35%'
        },
        projectStartDate: new Date("02/18/2025"),
        projectEndDate: new Date('03/30/2025'),
    });
    gantt.appendTo('#TaskMode');
};
