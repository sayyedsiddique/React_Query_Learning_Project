import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import './App.css';

function App() {
  // Create a client
const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <div>Hello, React Query</div>
    </QueryClientProvider>
    </div>
  );
}

export default App;
