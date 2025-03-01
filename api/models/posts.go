package models

import (
	"time"
)

type Posts struct {
	CreatedAt time.Time  `json:"createdAt"`
	UpdatedAt time.Time  `json:"updatedAt"`
	DeletedAt *time.Time `json:"deletedAt,omitempty"`

	ID     uint   `gorm:"primaryKey" json:"id"`
	Title  string `json:"title" validate:"required,min=3,max=100"`
	Body   string `json:"body" validate:"required,min=10"`
	UserID uint   `json:"user_id" validate:"required"`
	User   User   `gorm:"foreignKey:UserID"`
}
