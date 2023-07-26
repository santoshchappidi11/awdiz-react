import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  user: null,
  prodAdded: null,
  prodRemoved: null,
  cartCleared: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    case "ADDED_TO_CART":
      return { ...state, prodAdded: action.payload };
    case "REMOVE_FROM_CART":
      return { ...state, prodRemoved: action.payload };
    case "CLEAR_CART":
      return { ...state, cartCleared: action.payload };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function login(userDetails) {
    localStorage.setItem("current-user", JSON.stringify(userDetails));
    dispatch({
      type: "LOGIN",
      payload: userDetails,
    });
  }

  const logout = () => {
    localStorage.removeItem("current-user");
    dispatch({
      type: "LOGOUT",
    });
    alert("You are logged out successfully!");
  };

  const productAdded = (user) => {
    dispatch({
      type: "ADDED_TO_CART",
      payload: user.cart,
    });
  };

  const productRemoved = (user) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: user.cart,
    });
  };

  const cartCleared = (user) => {
    dispatch({
      type: "CLEAR_CART",
      payload: user.cart,
    });
  };

  useEffect(() => {
    const currentUseLoggedIn =
      JSON.parse(localStorage.getItem("current-user")) || [];

    if (currentUseLoggedIn) {
      dispatch({
        type: "LOGIN",
        payload: currentUseLoggedIn,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        state,
        productAdded,
        productRemoved,
        cartCleared,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
