import {
    QueryProvider,
    AppRouterProvider,
    AppThemeProvider,
} from "@app/providers/";
import { GlobalStyle, GlobalFont } from "@app/styles";

function App() {
    return (
        <AppThemeProvider>
            <QueryProvider>
                <GlobalFont />
                <GlobalStyle />
                <AppRouterProvider />
            </QueryProvider>
        </AppThemeProvider>
    );
}

export default App;
