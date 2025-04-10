package main

import (
	"api/controllers"
	"api/database"

	"api/middleware"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	app := fiber.New()
	app.Use(logger.New())
	database.Connect()

	app.Post("/users", middleware.JWTProtected(), controllers.CreateUser)
	app.Get("/users", middleware.JWTProtected(), controllers.GetUsers)
	app.Get("/users/:id", middleware.JWTProtected(), controllers.GetUser)
	app.Put("/users/:id", middleware.JWTProtected(), controllers.UpdateUser)
	app.Delete("/users/:id", middleware.JWTProtected(), controllers.DeleteUser)
	app.Post("/login", controllers.Login)

	app.Listen(":3000")
}
