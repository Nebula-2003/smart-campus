package config

type Role string

const (
	RoleAdmin   Role = "admin"
	RoleFaculty Role = "faculty"
	RoleStudent Role = "student"
)
