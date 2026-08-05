import { loadCultureFiles } from '../common/culture-loader';
import { FormRenderer, Schema } from '@syncfusion/ej2-form-renderer';
import { RadioButton, ChangeArgs, Button } from '@syncfusion/ej2-buttons';
import { userRegistration, customerService, doctorsAppointment } from './datasource';
import { TextArea } from '@syncfusion/ej2-inputs';

(window as any).default = (): void => {
    loadCultureFiles();

    let formRenderer: FormRenderer = new FormRenderer({
        schema: userRegistration
    });
    formRenderer.appendTo('#form-renderer-control');

    let onChange = (args: ChangeArgs) => {
        if (args.value === 'userRegistration') {
            formRenderer.schema = userRegistration;
        } else if (args.value === 'customerservice') {
            formRenderer.schema = customerService;
        } else if (args.value === 'doctorsAppointment') {
            formRenderer.schema = doctorsAppointment;
        }
    }

    let radioButton: RadioButton = new RadioButton({
        label: 'User Registration', name: 'formSchemaOption', value: 'userRegistration', change: onChange, checked: true
    });
    radioButton.appendTo('#userResignation');
    radioButton = new RadioButton({
        label: 'Customer Service', name: 'formSchemaOption', value: 'customerservice', change: onChange
    });
    radioButton.appendTo('#customerService');;
    radioButton = new RadioButton({
        label: 'Doctor Appointment', name: 'formSchemaOption', value: 'doctorsAppointment', change: onChange
    });
    radioButton.appendTo('#doctorsAppointment');
};