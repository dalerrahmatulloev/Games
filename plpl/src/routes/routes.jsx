import { lazy } from "react";

export const Layout = lazy(() => import("../layout/layout"))
export const Games = lazy(() => import("../pages/games/games"))
export const Tictactoe = lazy(() => import("../pages/tic_tac_toe/tictactoe"))
export const Packman = lazy(() => import("../pages/packman/packman"))