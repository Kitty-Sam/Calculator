import React from 'react';

import { Alert, DevSettings, View } from 'react-native';
import { styles } from './style';
import { Display } from '~components/Display';
import { KeyPad } from '~components/KeyPad';
import { calculateInputData, evalForInput } from '~utils/Calculate/calculate';
import { HistoryContext } from '~context/HistoryContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { specialButtons } from '~constants/buttonsLabels/buttonsLabels';

export type CalculatorStateType = {
    input: string;
    result: string;
    isEqual: boolean;
    history: string[];
};

export type CalculatorCCScreenPropsType = {};

export default class CalculatorCCScreen extends React.Component<CalculatorCCScreenPropsType, CalculatorStateType> {
    constructor(props: CalculatorCCScreenPropsType) {
        super(props);
        this.state = {
            input: '',
            result: '',
            isEqual: false,
            history: [],
        };
    }

    storeHistory = async (value: string[]) => {
        try {
            await AsyncStorage.setItem('history', JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    getHistory = async () => {
        try {
            const savedHistory = await AsyncStorage.getItem('history');
            if (savedHistory) {
                const resultedHistory = await JSON.parse(savedHistory);
                this.setState({ ...this.state, history: resultedHistory });
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.getHistory();
        this.setState({ ...this.state, isEqual: false });
    }

    componentDidUpdate() {
        this.storeHistory(this.state.history);
    }

    onPressHandler = (key: string) => {
        const { input, history } = this.state;
        if (!input && specialButtons.includes(key)) {
            Alert.alert('Enter expression at first');
            return;
        }
        if (!input) {
            this.setState({ ...this.state, input: key });
        }
        if (input) {
            switch (key) {
                case 'Ac': {
                    this.setState({ ...this.state, input: '', result: '' });
                    break;
                }
                case '%': {
                    const takePercent = (expression: string) => {
                        return String(+expression / 100);
                    };
                    this.setState({
                        ...this.state,
                        input: takePercent(input),
                    });
                    break;
                }
                case 'del': {
                    this.setState({
                        ...this.state,
                        input: input.slice(0, input.length - 1),
                    });
                    break;
                }
                case '=': {
                    this.setState({ ...this.state, isEqual: true });
                    try {
                        this.setState({
                            ...this.state,
                            result: calculateInputData(evalForInput(input)),
                            input: calculateInputData(evalForInput(input)),
                            history: history.concat([input + '=' + calculateInputData(evalForInput(input))]),
                        });
                    } catch (error: any) {
                        Alert.alert(error.message);
                        setTimeout(() => {
                            DevSettings.reload();
                        }, 2000);
                    }
                    break;
                }
                case '+/-':
                    const changeOperator = (expression: string) => {
                        return String(+expression * -1);
                    };
                    this.setState({
                        ...this.state,
                        input: changeOperator(input),
                    });
                    break;
                default:
                    this.setState({
                        ...this.state,
                        input: `${input}${key}`,
                    });
            }
        }
    };

    render() {
        return (
            <View style={styles.rootContainer}>
                <Display input={this.state.input} result={this.state.result} isEqual={this.state.isEqual} />
                <KeyPad onPressHandler={this.onPressHandler} />
            </View>
        );
    }
}

CalculatorCCScreen.contextType = HistoryContext;
