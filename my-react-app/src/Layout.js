// Filename - Layout.js

import React from "react";
import Board from "./Board";
import Info from "./info";
import "./css/layout.css";

const Layout = ({ reset, setReset, winner, setWinner }) => {
    return (
        <div className="layout">
            <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} />
            <Info />
        </div>
    );
};

export default Layout;
