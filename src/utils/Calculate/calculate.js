//const for expression

export const initialState = {
    value: '',
    operator: '',
    nextValue: '',
    isEqual: false,
};

const AddCommand = '+';
const SubtractCommand = '-';
const MultiplyCommand = '*';
const DivideCommand = '/';

const numberPressHandler = (value, state) => {
    if (state.operator) {
        if (!state.value) {
            return { ...state, nextValue: `${value}` };
        }
        return {
            ...state,
            nextValue: `${state.nextValue}${value}`,
        };
    } else {
        if (!state.value) {
            return { ...state, value: `${value}` };
        }
        return {
            ...state,
            value: state.isEqual ? `${value}` : `${state.value}${value}`,
            isEqual: false,
        };
    }
};

const equalPressHandler = (state) => {
    const { nextValue, value, operator } = state;
    const resetState = {
        operator: '',
        nextValue: '',
        isEqual: true,
    };

    switch (operator) {
        case AddCommand:
            return {
                ...resetState,
                value: `${+value + +nextValue}`,
            };
        case SubtractCommand:
            return {
                ...resetState,
                value: `${+value - +nextValue}`,
            };
        case MultiplyCommand:
            return {
                ...resetState,
                value: `${+value * +nextValue}`,
            };
        case DivideCommand:
            return {
                ...resetState,
                value: `${+value / +nextValue}`,
            };
        default:
            return state;
    }
};

export const calculate = (type, value, state) => {
    switch (type) {
        case 'delete':
            return { ...state, value: state.isEqual ? state.value : state.value.slice(0, -1) };
        case 'number':
            return numberPressHandler(value, state);
        case 'clean':
            return initialState;
        case 'change_operator':
            return {
                ...state,
                value: `${parseFloat(state.value) * -1}`,
            };
        case 'percent':
            return {
                ...state,
                value: `${parseFloat(state.value) * 0.01}`,
            };
        case 'operator':
            const result = equalPressHandler(state);
            return { ...state, operator: value, value: result.value, nextValue: '' };
        case 'equal':
            return equalPressHandler(state);
        default:
            return state;
    }
};
