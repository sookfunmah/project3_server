import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';

import * as Pages from './pages';

const { AuthorPosts, CategoryPosts, CreatePost, Dashboard, DeletePost, EditPosts, ErrorPage, Home, Login, Logout, Members, PostDetail, Register, UserProfile } = Pages;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home />},
      {path: "posts/:id", element: <PostDetail />},
      {path: "register", element: <Register />},
      {path: "login", element: <Login />},
      {path: "profile/:id", element: <UserProfile />},
      {path: "members", element: <Members />},
      {path: "create", element: <CreatePost />},
      {path: "posts/categories/:category", element: <CategoryPosts />},
      {path: "posts/users/:id", element: <AuthorPosts />},
      {path: "myposts/:id", element: <Dashboard />},
      {path: "posts/:id/edit", element: <EditPosts />},
      {path: "posts/:id/delete", element: <DeletePost />},
      {path: "logout", element: <Logout />}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

