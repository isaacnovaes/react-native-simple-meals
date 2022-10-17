import { useMemo, createContext, useReducer } from 'react';

type ActionType =
    | { type: 'ADD_MEAL'; mealID: string }
    | { type: 'REMOVE_MEAL'; mealID: string };

type StateType = {
    favoriteMealsID: string[];
};

const initialState: StateType = {
    favoriteMealsID: [],
};

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'ADD_MEAL': {
            const newFavoriteMealsID = [
                action.mealID,
                ...state.favoriteMealsID,
            ];
            const uniqueValues = [...new Set(newFavoriteMealsID)];
            return {
                favoriteMealsID: uniqueValues,
            };
        }
        case 'REMOVE_MEAL': {
            return {
                favoriteMealsID: state.favoriteMealsID.filter(
                    (id) => id !== action.mealID
                ),
            };
        }
        default:
            return state;
    }
};

const Context = createContext<{
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ state: initialState, dispatch: () => {} });

type ProviderPropsType = {
    children: React.ReactNode;
};

function ContextProvider({ children }: ProviderPropsType) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const data = useMemo(() => {
        return { state, dispatch };
    }, [state]);

    return <Context.Provider value={data}>{children}</Context.Provider>;
}

export { Context, ContextProvider };
