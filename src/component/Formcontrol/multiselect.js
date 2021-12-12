import React from 'react';
import Select from 'react-select'
import PropTypes from 'prop-types';
import { Field, useField } from 'formik';

import FormGroup from './FormGroup';

const MultiSelect = props => {

    const { name, label, options = [], } = props;
    const [, meta] = useField(props)

    const hasError = meta.error && meta.touched

    return (
        <FormGroup
            name={name}
            label={label}
        >
            <Field name={name} {...props}>
                {({
                    field,
                    form: { setFieldValue },
                    meta
                }) => {
                    const hasError = meta.error && meta.touched
                    return (
                        <React.Fragment>
                            <Select
                                options={options}
                                getOptionValue={option => option?.id || option?.value}
                                getOptionLabel={option => option?.label || option?.name}
                                isMulti={true}
                                closeMenuOnSelect={false}
                                onChange={(value) => {
                                    const idList = value.map(v => v.id)
                                    setFieldValue(name, idList)
                                }}
                            />
                            <span className={"messageError"}>{hasError ? meta.error : ''}</span>
                        </React.Fragment>
                    )
                }}
            </Field>
            <span className={"messageError"}>{hasError ? meta.error : ''}</span>
        </FormGroup>
    )
}

MultiSelect.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    control: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}
export default MultiSelect