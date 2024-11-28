import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import Navigation from './components/Navigation'
// import Footer from './components/Footer'
import video from './images/glass.jpg'
// pages
import Home from './pages/Home'
import Api from './pages/Api'
import Products from './pages/Products';
import AllProducts from './pages/TodosLosProductos';
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import RegisterPage from './pages/RegisterPage';

import { AuthProvider } from "./context/AuthContext"
import { LoginPage } from './pages/LoginPage';
import { TasksPage } from './pages/TasksPage';
import { TaskFormPage } from './pages/TaskFormPage';
import Profile from './pages/Profile';

import { ProtectedRoute } from './ProtectedRoute';
import { TaskProvider } from './context/TaskContext';
import SubFooter from './components/SubFooter';

function App() {
	return (
		<AuthProvider>
			<TaskProvider>
				<Router>
					<Navigation />
					<Routes>
						<Route path="/product" element={<Product />} />
						<Route path="/products" element={<Products />} />
						<Route path="/all" element={<AllProducts />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/about" element={<About />} />
						<Route path="/product/:id" element={<ProductDetail />} />

						{/* new routes */}
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />

						{/* new routes */}
						<Route element={<ProtectedRoute />}>
							<Route path="/tasks" element={<TasksPage />} />
							<Route path="/add-task" element={<TaskFormPage />} />
							<Route path="/tasks/:id" element={<TaskFormPage />} />
							<Route path="/profile" element={<Profile />} />
						</Route>

					</Routes>
					<SubFooter />
				</Router>
			</TaskProvider>
		</AuthProvider>

	);
}

export default App;
