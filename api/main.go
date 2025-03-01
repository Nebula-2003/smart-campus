package main

import (
	"github.com/Nebula-2003/goJwt/controllers"
	"github.com/Nebula-2003/goJwt/initializers"
	"github.com/Nebula-2003/goJwt/middleware"
	"github.com/Nebula-2003/goJwt/models"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadENV()
	initializers.Connect()
	initializers.SyncDB()
}

func main() {
	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.POST("/sign-up", middleware.ValidationMiddleware(models.User{}), controllers.Register)
	r.POST("/login", controllers.Login)

	r.Run()
}
