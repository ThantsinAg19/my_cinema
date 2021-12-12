import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import Datepicker from './datepicker';
import Select from './select';
import Textarea from './textarea';
import Radio from './radio';
import CheckBox from './checkbox';
import FormDateTimeLocal, { CURRENT_DATE_TIME } from './datetime_local';
import MultiSelect from './multiselect';

export const Types = {
    radio: "radio",
    checkbox: "checkbox",
    select: "select",
    date: "date",
    textarea: "textarea",
    autocomplete: "autocomplete",
    datetime_local: "datetime_local",
    multi_select: "multi_select"
}

let ENUM_TYPES = []

for (const t in Types) {
    ENUM_TYPES.push(Types[t])
}


const FormControl = (props) => {
    const { control } = props;
    switch (control) {
        case Types.radio:
            return <Radio {...props} />
        case Types.checkbox:
            return <CheckBox {...props} />
        case Types.select:
            return <Select {...props} />
        case Types.date:
            return <Datepicker {...props} />
        case Types.textarea:
            return <Textarea {...props} />
        case Types.datetime_local:
            return <FormDateTimeLocal {...props} />
        case Types.multi_select:
            return <MultiSelect {...props}/>
        default:
            return <Input {...props} />
    }
}

FormControl.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    touched: PropTypes.object,
    errors: PropTypes.object,
    control: PropTypes.oneOf(ENUM_TYPES),
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.number
    ])
}
export default FormControl

export {
    CURRENT_DATE_TIME
}