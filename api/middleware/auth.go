package middleware

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func CheckRole(roles ...string) gin.HandlerFunc {
	return func(c *gin.Context) {
		// If no roles are specified, allow access
		if len(roles) == 0 {
			c.Next()
			return
		}
		guard(c)
		user, exists := c.Get("user")
		if !exists {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "User not found in context"})
			c.Abort()
			return
		}

		// Assert user as jwt.MapClaims
		claims, ok := user.(jwt.MapClaims)
		if !ok {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid user claims"})
			c.Abort()
			return
		}

		// Get user role from claims
		userRole, ok := claims["role"].(string)
		if !ok {
			c.JSON(http.StatusForbidden, gin.H{"error": "User role not found"})
			c.Abort()
			return
		}

		// Check if user's role is in the allowed roles
		for _, role := range roles {
			if role == userRole {
				c.Next()
				return
			}
		}

		// If we get here, the user's role wasn't in the allowed roles
		c.JSON(http.StatusForbidden, gin.H{"error": "Insufficient permissions"})
		c.Abort()
	}
}

func guard(c *gin.Context) {
	bearerToken := c.Request.Header["Authorization"][0]
	tokenString := strings.Split(bearerToken, " ")[1]
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return []byte("AllYourBase"), nil
	})
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid or expired token"})
		c.Abort()
		return
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		c.Set("user", claims)
		c.Next()
	} else {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
		c.Abort()
		return
	}
}
