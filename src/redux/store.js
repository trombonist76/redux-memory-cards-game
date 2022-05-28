import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";
import recentGamesSlice from "./recentGamesSlice";

const store = configureStore({
    reducer:{
        cards:cardsSlice,
        recentGames:recentGamesSlice
    }
})

export default store