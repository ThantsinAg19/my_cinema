import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types'
import FormGroup from './FormGroup';

import styled from 'styled-components';

const CheckBoxWrapper = styled.label`
    margin-right: 1.5 rem;
    position: relative;
    cursor:pointer;
    user-select: none;
    input[type="checkbox"] {
        margin-right: 0.3rem;
    }
`;

const CheckBox = ({ name, options = [], label }) => (
    <FormGroup
        name={ name }
        label={ label }
    >
        <Field name={ name }>
            {
                ({ field }) => (
                    options.map((opt, index) => (
                        <CheckBoxWrapper key={ index }>
                            <input
                                type="checkbox"
                                { ...field }
                                value={ opt.value}
                                checked={ field.value === opt.value }
                            />
                            {opt.key || opt.label || opt.name }
                        </CheckBoxWrapper>
                    ))
                )
            }
        </Field>

    </FormGroup>
)

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            value: PropTypes.string.isRequired
        })
    )
}

export default CheckBox;