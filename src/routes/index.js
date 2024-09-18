import { Router } from "express";// Importación del router de Express
import productsRoutes from "./products.routes.js";// Importación de las rutas de productos
import cartsRoutes from "./carts.routes.js";// Importación de las rutas de carritos
import sessionRoutes from "./session.routes.js";// Importación de las rutas de las sessions
import emailsRoutes from "./emails.routes.js";// Importación de las rutas de los emails
import loggerTestRoutes from "./loggerTest.routes.js";// Importación de las rutas de logger tests
import userRoutes from "./user.routes.js"// Importación de las rutas de los users


const router = Router();// Creación del router

router.use("/products", productsRoutes);// Utiliza las rutas de productos bajo el prefijo "/products"
router.use("/carts", cartsRoutes);// Utiliza las rutas de carritos bajo el prefijo "/carts"
router.use("/session", sessionRoutes);// Utiliza las rutas de las sessions bajo el prefijo "/sessions"
router.use("/emails", emailsRoutes);// Utiliza las rutas de emails bajo el prefijo "/emails"
router.use("/loggerTest", loggerTestRoutes);// Utiliza las rutas de los logger tests bajo el prefijo "/loggerTest"
router.use("/user", userRoutes);// Utiliza las rutas de emails bajo el prefijo "/user"

export default router;// Exporta el router
