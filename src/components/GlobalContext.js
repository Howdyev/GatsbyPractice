import React, { createContext } from "react"

// First, we have to prepare some data and functions, that we're later gonna use
// in our reducer

const initialState = {
  openMenu: false,
}

const actions = {
  SET_MENU: "SET_MENU",
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_MENU:
      return { ...state, openMenu: action.value }
    default:
      return state
  }
}

// Then we are creating a context out of the scope of the function
// "GlobalContextProvider" so that we can export it
// and use it in our pages

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  // Within our overarching component, we now create a React-Reducer with the data that
  // we've prepared. This gives us a current state and a dispatch function to
  // invoke an action of the reducer function declared earlier.

  const [state, dispatch] = React.useReducer(reducer, initialState)

  // Equipped with "state" and "dispatch" we can now create a value-object, that goes
  // into our ContextProvider.

  const value = {
    openMenu: state.openMenu,
    setOpenMenu: value => {
      dispatch({ type: actions.SET_MENU, value })
    },
  }

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

// The exported GlobalContextProvider will only be used in our layout/index.js,
// while the general GlobalContext can be used by any Page or Component (with
// the help of useContext).

export { GlobalContextProvider as default, GlobalContext }