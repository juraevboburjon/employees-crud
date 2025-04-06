import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import NewEmployee from "./pages/NewEmployee";
import HomePage from "./pages/HomePage";
import EmployeesInfoModal from "./components/EmployeesInfoModal";
import EditEmployee from "./pages/EditEmployee";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/new-employee" element={<NewEmployee />} />
          {/* <Route path="/read-employee/:id" element={<EmployeesInfoModal />} /> */}
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
        </Route>
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}
export default App;
