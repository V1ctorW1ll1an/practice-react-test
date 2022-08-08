import CustomAlert from "./components/CustomAlert";
import theme from "./theme";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <CustomAlert />
        </ChakraProvider>
    );
}

export default App;
