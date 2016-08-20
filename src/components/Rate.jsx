import React, { Component } from 'react';

export default class Rate extends Component {
    render() {
        const { value, max, readOnly, label } = this.props;
        const stars = Array(max).fill().map((_, i) => i < value);

        return (
            <span
                aria-label={label}
                aria-readonly={readOnly}
                aria-valuemin={1}
                aria-valuemax={max}
                aria-valuenow={value}
            >
                {stars.map(s =>
                    <span
                        className={[
                            'glyphicon',
                            `glyphicon-${s ? 'star' : 'star-empty'}`
                        ].join(' ')}
                        aria-hidden="true"
                    />
                )}
            </span>
        );
    }
}

Rate.defaultProps = {
    max: 5,
    readOnly: false,
};
