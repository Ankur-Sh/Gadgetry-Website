import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = { ...action.payload, id: nanoid() };
            state.cartItems.push(newItem);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});
const likeSlice = createSlice({
    name: "like",
    initialState: {
        likeGadgets: [],
    },
    reducers: {
        toggleLike: (state, action) => {
            const gadget = action.payload;
            const isLiked = state.likeGadgets.some(
                (liked) => liked._id === gadget._id
            );

            if (isLiked) {
                state.likeGadgets = state.likeGadgets.filter(
                    (liked) => liked._id !== gadget._id
                );
            } else {
                state.likeGadgets.push(gadget);
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { toggleLike } = likeSlice.actions;
export const likeReducer = likeSlice.reducer;
export default cartSlice.reducer;
// const initialState = {
//     todos: [
//         {
//             id: 1,
//             text: "Hello World",
//         },
//     ],
// };

// export const todoSlice = createSlice({
//     name: "todo",
//     initialState,
//     reducers: {
//         addTodo: (state, action) => {
//             const todo = {
//                 id: nanoid(),
//                 text: action.payload,
//             };
//             state.todos.push(todo);
//         },
//         removeTodo: (state, action) => {
//             state.todos = state.todos.filter(
//                 (todo) => todo.id !== action.payload
//             );
//         },
//     },
// });

// export const { addTodo, removeTodo } = todoSlice.actions;
// export default todoSlice.reducer;

// export default (state = { gadgets: [] }, action) => {
//     switch (action.type) {
//         case "CREATE":
//             return { ...state, gadgets: [...state.gadgets, action.payload] };
//         case "FETCH_ALL":
//             return {
//                 ...state,
//                 gadgets: action.payload.data,
//             };
//         default:
//             return state;
//     }
// };
