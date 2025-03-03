package models

import (
	"time"
)

type Assignment struct {
	CreatedAt time.Time  `json:"-"`
	UpdatedAt time.Time  `json:"-"`
	DeletedAt *time.Time `json:"-"`
	Deleted   bool       `json:"-"`

	AssignmentID uint   `gorm:"primaryKey" json:"assignment_id"`
	CourseID     string `json:"title" validate:"required,min=3,max=100"`
	ClassID      string `json:"body" validate:"required,min=10"`
	UserID       uint   `json:"user_id" validate:"required"`
	User         User   `gorm:"foreignKey:UserID"`
}
