package initializers

import "github.com/Nebula-2003/goJwt/models"

func SyncDB() {
	DB.AutoMigrate(&models.User{})
	DB.AutoMigrate(&models.Posts{})
}
