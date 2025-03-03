package initializers

import "smart-campus/api/models"

func SyncDB() {
	DB.AutoMigrate(&models.User{})
	DB.AutoMigrate(&models.Assignment{})
}
