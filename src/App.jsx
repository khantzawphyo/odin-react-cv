import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "@layouts/RootLayout";
import Home from "@pages/Home";
import TemplateSelect from "@pages/TemplateSelect";
import Editor from "@pages/Editor";
import NotFound from "@pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<TemplateSelect />} />
          <Route path="editor" element={<Editor />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
