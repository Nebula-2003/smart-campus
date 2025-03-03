package models

import (
	"time"

	"smart-campus/api/config"
)

type User struct {
	CreatedAt time.Time  `json:"-"`
	UpdatedAt time.Time  `json:"-"`
	DeletedAt *time.Time `json:"-"`
	Deleted   bool       `json:"-"`

	UserID   uint        `gorm:"primaryKey" json:"user_id"`
	Email    string      `gorm:"unique" json:"email" validate:"required,email"`
	Name     string      `json:"name" validate:"required,min=2,max=50"`
	Password string      `json:"password" validate:"required,min=8"`
	Role     config.Role `json:"role" gorm:"type:varchar(20)" validate:"required"`
}
