import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  console.log("App rendered");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/chats/:chat_uid" element={<HomePage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;