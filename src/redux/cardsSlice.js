import { createSlice } from "@reduxjs/toolkit";
import shuffle from "../services";

const items = ['angular2', 'vue', 'react', 'grunt', 'phantomjs', 'ember', 'babel', 'ionic', 'gulp', 'meteor', 'yeoman', 'yarn', 'nodejs', 'bower', 'browserify']
const initialValue = items.concat(items)
const initialState = {
    items: shuffle(initialValue),
    matches: [],
    firstSelect: false,
    point: 100,
    time: 0,
    cardOpening: true
}

const cardsSlice = createSlice({
    name: "cardsSlice",
    initialState,
    reducers: {
        setFirstSelect: (state, action) => {
            state.firstSelect = action.payload
        },

        increaseTime: (state) => {
            if (state.firstSelect !== false) {
                state.time += 1
            }
        },

        replay: (state,) => {            
            state.firstSelect = false
            state.cardOpening = true
            state.matches= []
            state.point = 100
            state.time = 0
            state.items = shuffle(state.items)
            
        },

        isSameCard: (state, action) => {
            if (state.items[state.firstSelect] === state.items[action.payload]) {
                state.point += 50
                state.matches.push(state.firstSelect, action.payload)
                state.firstSelect = false
            } else {
                state.firstSelect = false
                state.point -= 10
            }
            state.cardOpening = true
        },

        increasePoint: (state) => {
            state.point += 50
        },

        decreasePoint: (state) => {
            state.point -= 10
        },

        shuffleCards: (state) => {
            state.items = shuffle(state.items)
        },

        disableCardOpening: (state) => {
            state.cardOpening = false
        }
    }
})


export const cardsSelector = (state) => (state.cards.items)
export const firstSelector = (state) => (state.cards.firstSelect)
export const matchesSelector = (state) => (state.cards.matches)
export const { setFirstSelect, isSameCard, increasePoint, decreasePoint, shuffleCards, disableCardOpening, increaseTime, replay } = cardsSlice.actions
export default cardsSlice.reducer