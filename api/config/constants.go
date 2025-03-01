package config

type Role string

const (
	RoleAdmin     Role = "admin"
	RoleUser      Role = "user"
	RoleModerator Role = "moderator"
)
