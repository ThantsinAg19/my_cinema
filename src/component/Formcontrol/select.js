import React from 'react';
import { Field, useField } from 'formik';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

const Select = props => {

    const { name, label, options = [], showloading = false, } = props;
    const [, meta] = useField(props)

    const hasError = meta.error && meta.touched

    return (
        <FormGroup
            name={name}
            label={label}
        >
            <Field
                as="select"
                name={name}
                className={`inputField ${hasError ? 'inputError' : ''}`}
                {...props}
            >
                <option value={''} key={''}>
                    {
                            showloading ?
                            'Loading...'
                            :
                            label
                    }
                </option>
                {
                    options.map(({ name, label, key, value, _id }, index) => (
                        <option
                            key={index}
                            value={value || _id}
                        >
                            {name || label || key}
                        </option>
                    ))
                }
            </Field>
            <span className={"messageError"}>{hasError ? meta.error : ''}</span>
        </FormGroup>
    )
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    control: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}
export default Select