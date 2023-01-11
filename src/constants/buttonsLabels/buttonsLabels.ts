export type ItemsType = {
    shape: string;
    title: string;
    type: string | undefined;
};

export const leftButtonsLabels = [
    { title: '+/-', shape: 'small', type: undefined },
    { title: '(', shape: 'small', type: undefined },
    { title: ')', shape: 'small', type: undefined },
    { title: 'Ac', shape: 'ordinary', type: undefined },
    { title: 'del', shape: 'ordinary', type: undefined },
    { title: '/', shape: 'ordinary', type: 'operator' },
    { title: '7', shape: 'ordinary', type: undefined },
    { title: '8', shape: 'ordinary', type: undefined },
    { title: '9', shape: 'ordinary', type: undefined },
    { title: '4', shape: 'ordinary', type: undefined },
    { title: '5', shape: 'ordinary', type: undefined },
    { title: '6', shape: 'ordinary', type: undefined },
    { title: '1', shape: 'ordinary', type: undefined },
    { title: '2', shape: 'ordinary', type: undefined },
    { title: '3', shape: 'ordinary', type: undefined },
    { title: '0', shape: 'wide', type: undefined },
    { title: '.', shape: 'ordinary', type: undefined },
];

export const rightButtonsLabels: ItemsType[] = [
    { title: '%', shape: 'small', type: undefined },
    { title: '*', shape: 'ordinary', type: 'operator' },
    { title: '-', shape: 'ordinary', type: 'operator' },
    { title: '+', shape: 'tall', type: 'operator' },
    { title: '=', shape: 'tall', type: 'operator' },
];

export const specialButtons = ['Ac', 'del', '+/-', '%'];
