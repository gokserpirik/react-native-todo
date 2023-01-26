import { createSlice } from "@reduxjs/toolkit";
import db, { auth } from "../firebase";
import {
  doc,
  updateDoc,
} from "firebase/firestore";

const initialUser = {
  appSamples: {
    inputOpen: false,
  },
  UserCredential: {},
  userData: {

    todos: [
      { text: "loading...", id: 1, completed: false },
   
    ],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialUser },
  reducers: {
    updateUser: (state, action) => {
      state.value = action.payload;
    },
    logoutUser: (state) => {
      state.value = initialUser;
    },
    updateData: (state, action) => {
      state.value.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.value.userData.todos = [
        { text: action.payload.text, id: Math.floor(Math.random() * 1000), completed: false },
        ...state.value.userData.todos,
      ];

      const userRef = doc(db, "users", auth.currentUser.uid);
      async function updateTodo(todo) {
        await updateDoc(userRef, {
          todos: todo,
        });
      }

      updateTodo(state.value.userData.todos);
    },

    updateSelectedTodo: (state, action) => {
      state.value.userData.todos = state.value.userData.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      const userRef = doc(db, "users", auth.currentUser.uid);
      async function updateTodo(todo) {
        await updateDoc(userRef, {
          todos: todo,
        });
      }

      updateTodo(state.value.userData.todos);
    },
    setInputOpen: (state) => {
      state.value.appSamples.inputOpen = !state.value.appSamples.inputOpen;
    },
    setUserCredential: (state, action) => {
      state.value.UserCredential = action.payload;
    },
    loginData: (state, action) => {
      state.value.userData = action.payload;
    },

    updateDescribedTodo: (state, action) => {
      const description = action.payload.description 
      state.value.userData.todos = state.value.userData.todos.map((todo) => {
        if (todo.id === action.payload.id) {

          return { ...todo, description: description };
        }
        return todo;
      });
      const userRef = doc(db, "users", auth.currentUser.uid);
      async function updateTodo(todo) {
        await updateDoc(userRef, {
          todos: todo,
        });
      }

      updateTodo(state.value.userData.todos);
    },

    deleteTodo: (state, action) => {
      state.value.userData.todos = state.value.userData.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      const userRef = doc(db, "users", auth.currentUser.uid);
      async function updateTodo(todo) {
        await updateDoc(userRef, {
          todos: todo,
        });
      }

      updateTodo(state.value.userData.todos);
    }
  },
});

export const {
  updateUser,
  logoutUser,
  updateData,
  addTodo,
  updateSelectedTodo,
  setInputOpen,
  setUserCredential,
  loginData,
  updateDescribedTodo,
  deleteTodo
} = userSlice.actions;

export default userSlice.reducer;
