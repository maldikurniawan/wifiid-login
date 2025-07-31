import { NotFound } from "@/components";
import { BeliVoucher, LoginPage } from "@/pages";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/beli-voucher" element={<BeliVoucher />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App