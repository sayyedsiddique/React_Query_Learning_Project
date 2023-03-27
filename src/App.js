import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
