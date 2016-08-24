import React, { Component } from 'react';
import { clamp } from 'ramda';

const range = (from, to) =>
    Array(to - from)
        .fill()
        .map((_, i) => i + from);

const getNextValue = (value, max, keyCode) => {
    const restrict = clamp(1, max);
    const nextValues = new Map([
        [38, restrict(value + 1)],
        [40, restrict(value - 1)],
        ...range(1, max + 1).map(i => [i + 48, i]),
    ]);

    return nextValues.get(keyCode) || value;
};

export default class Rate extends Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.defaultValue };
    }
    onKeyDown(e) {
        const { value } = this.state;
        const { max } = this.props;
        const nextValue = getNextValue(value, max, e.keyCode);

        this.setState({ value: nextValue });
        if (e.keyCode === 38 || e.keyCode === 40) e.preventDefault();
    }
    onClick(index) {
        this.setState({ value: index + 1 });
    }
    get value() {
        return this.state.value;
    }
    reset() {
        this.setState({ value: 0 });
    }
    render() {
        const { max, readOnly, label, labeledBy } = this.props;
        const { value } = this.state;
        const stars = Array(max).fill().map((_, i) => i < value);

        return (
            <span
                role="slider"
                className="rate"
                aria-label={label}
                aria-labelledby={labeledBy}
                data-readonly={readOnly}
                aria-valuemin={1}
                aria-valuemax={max}
                aria-valuenow={value || null}
                aria-valuetext={value ? `${value} out of ${max}` : 'blank'}
                tabIndex={readOnly ? null : 0}
                onKeyDown={e => this.onKeyDown(e)}
            >
                {stars.map((star, index) =>
                    <span
                        key={index}
                        className={[
                            'rate-item',
                            'glyphicon',
                            `glyphicon-${star ? 'star' : 'star-empty'}`,
                        ].join(' ')}
                        aria-hidden="true"
                        onClick={readOnly ? null : () => this.onClick(index)}
                    />
                )}
            </span>
        );
    }
}

Rate.defaultProps = {
    defaultValue: 0,
    max: 5,
};
