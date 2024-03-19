import { loadCultureFiles } from '../common/culture-loader';
/**
 * Dropdownlist Default functionality Sample
 */
import { DropDownList , VirtualScroll } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, WebApiAdaptor  } from '@syncfusion/ej2-data';


DropDownList.Inject(VirtualScroll);

let records: { [key: string]: Object }[] = [];

for (let i = 1; i <= 150; i++) {
    let item: { [key: string]: Object } = {};
    item.id = 'id' + i;
    item.text = `Item ${i}`;

    // Generate a random number between 1 and 4 to determine the group
    const randomGroup = Math.floor(Math.random() * 4) + 1;
    switch (randomGroup) {
        case 1:
            item.group = 'Group A';
            break;
        case 2:
            item.group = 'Group B';
            break;
        case 3:
            item.group = 'Group C';
            break;
        case 4:
            item.group = 'Group D';
            break;
        default:
            break;
    }
    records.push(item);
}

(window as any).default = (): void => {
    loadCultureFiles();
    // initialize DropDownList component
    let localObj: DropDownList = new DropDownList({
        //set the local data to dataSource property
        dataSource: records,
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        allowFiltering: true,
        fields: { text: 'text', value: 'id' },
        // set the placeholder to DropDownList component
        placeholder: 'e.g. Item 1'
    });
    localObj.appendTo('#local');

    let remoteObj: DropDownList = new DropDownList({
        //set the remote data to dataSource property
        dataSource: new DataManager({
            url: 'https://services.syncfusion.com/js/production/api/orders',
            adaptor: new WebApiAdaptor ,
            crossDomain: true
        }),
        fields: { text: 'OrderID', value: 'OrderID' },
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        allowFiltering: true,
        // set the placeholder to DropDownList component
        placeholder: 'OrderID'
    });
    remoteObj.appendTo('#remote');

    let groupObj: DropDownList = new DropDownList({
        //set the local data to dataSource property
        dataSource: records,
        //enable the virtualization property
        enableVirtualization: true,
        popupHeight: '200px',
        allowFiltering: true,
        fields: { groupBy: 'group', text: 'text', value: 'id' },
        // set the placeholder to DropDownList component
        placeholder: 'e.g. Item 1'
    });
    groupObj.appendTo('#group');
};