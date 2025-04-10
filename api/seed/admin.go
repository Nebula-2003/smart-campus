package main

import (
	"api/database"
	"api/models"
	"log"

	"golang.org/x/crypto/bcrypt"
)

func hashPassword(password string) string {
	hashed, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	if err != nil {
		log.Fatalf("Error hashing password: %v", err)
	}
	return string(hashed)
}

func main() {
	database.Connect()

	admin := models.User{
		FirstName:  "Admin",
		Email:      "admin@sou.edu",
		Password:   hashPassword("sou_admin"),
		MiddleName: "Of",
		LastName:   "Sou",
		FullName:   "Admin Of Sou",
		Gender:     "Male",
		Role:       "admin",
	}

	// Check if already exists
	var existing models.User
	result := database.DB.Where("email = ?", admin.Email).First(&existing)

	if result.RowsAffected > 0 {
		log.Println("Admin already exists")
		return
	}

	if err := database.DB.Create(&admin).Error; err != nil {
		log.Fatalf("Failed to seed admin: %v", err)
	}

	log.Println("✅ Admin seeded successfully!")
}
