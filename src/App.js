import React from "react";
import { Route, Routes, Navigate  } from "react-router-dom";
import Layout from "./components/hoc/layouts/Layout";
import Home from "./containers/Home/Home";
import Todos from "./containers/Todos/Todos";

 const App = () => {
    return <Layout>
        <Routes>
        <Route exact path="/" element={< Home />}  />
        <Route exact path="/todos" element={< Todos />} />
        <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
        
        </Layout>;   
}

export default App;