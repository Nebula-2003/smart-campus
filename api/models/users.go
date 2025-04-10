package models

import (
	"time"

	"gorm.io/gorm"
)

type Gender string
type Role string

const (
	GenderMale   Gender = "Male"
	GenderFemale Gender = "Female"
	GenderOther  Gender = "Other"

	RoleStudent Role = "student"
	RoleTeacher Role = "teacher"
	RoleAdmin   Role = "admin"
)

type User struct {
	gorm.Model

	// Personal Info
	FirstName  string    `json:"first_name"`
	MiddleName string    `json:"middle_name"`
	LastName   string    `json:"last_name"`
	FullName   string    `json:"full_name"`
	Gender     Gender    `gorm:"type:text CHECK(gender IN ('Male','Female','Other'))" json:"gender"`
	DOB        time.Time `json:"dob"`

	//Account
	Email    string `gorm:"unique" json:"email"`
	Password string `json:"password"`

	// Contact Info
	Address         string `json:"address"`
	ContactNo       string `json:"contact_no"`
	ParentContactNo string `json:"parent_contact_no"`

	// Academic Info
	EnrollmentNo string `gorm:"unique" json:"enrollment_no"`
	Semester     int    `json:"semester"`
	College      string `json:"college"`
	Stream       string `json:"stream"`
	Branch       string `json:"branch"`

	// Role
	Role Role `gorm:"type:text CHECK(role IN ('student','teacher','admin'))" json:"role"`
}
