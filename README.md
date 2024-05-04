# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Xóa các file không cần thiết

- B1: Xóa file: App.test.js, reportWebVitals.js, setupTest.js, logo.svg
- B2: Sửa lại trong index.jsx : Xóa hàm reportWebVitals() và import reportWebVitals from './reportWebVitals'

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

### Các thư viện cần tải

- npm i @reduxjs/toolkit react-redux 

### Các bước sử dụng Redux Toolkit

- B1: Tạo file store

```jsx
import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"

const store = configureStore({
    reducer: {
        // slice
        cart: cartSlice
    }
})

export default store;
```

- B2: Tạo file slice (ví dụ cartSlice)

```jsx
import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        k: 0
    },
    reducers: {
        // addToCart: (state) => {
        //     state.k = 20
        // }
        // addToCart: (state, action) => {
        //     state.k = action.payload
        // }
        addToCart: (state) => {
            state.k = state.k + 1
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
```

- B3: Chỉnh sửa lại file index.jsx

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './utils/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

- B4: Thực hiện chỉnh sửa state

```jsx
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addToCart } from '../utils/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()

    const addingToCart = () => {
      dispatch(addToCart());
    }

    return (
        <div>
            <button 
                className='bg-green-800 p-[16px] text-white text-[24px] mt-[10px] border-none outline-none cursor-pointer'
                onClick={addingToCart}
            >
                Add to cart 0
            </button>
        </div>
    )
}

export default Cart
```

- B5: Lấy state cập nhật Navbar

```jsx
import React from 'react'
import {useSelector} from 'react-redux'

const Navbar = () => {

  const k = useSelector(store => store.cart.k)
  console.log("K: ",k);

  return (
    <div className='bg-red-500 p-[16px]'>
        <h1>Cart <span>0</span></h1>
    </div>
  )
}

export default Navbar
```