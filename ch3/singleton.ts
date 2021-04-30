class AppState {
    public counter = 0;
    private static appStateReference: AppState;

    private constructor() {}

    static getInstance(): AppState {
        if (AppState.appStateReference === undefined) {
            AppState.appStateReference = new AppState();

            return AppState.appStateReference;
        }

        return AppState.appStateReference;
    }
}

const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();
appState1.counter++;
appState2.counter++;
appState2.counter++;

console.log(appState1.counter)
