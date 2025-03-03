package middleware

import (
	"bytes"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

var validate = validator.New()

type ValidationErrorResponse struct {
	Field   string `json:"field"`
	Message string `json:"message"`
}

func ValidateStruct(data interface{}) []*ValidationErrorResponse {
	var errors []*ValidationErrorResponse
	err := validate.Struct(data)
	if err != nil {
		for _, err := range err.(validator.ValidationErrors) {
			var element ValidationErrorResponse
			element.Field = err.Field()
			element.Message = err.Tag() + " validation failed"
			errors = append(errors, &element)
		}
	}
	return errors
}

// ValidationMiddleware for generic validation
func ValidationMiddleware[T any](obj T) gin.HandlerFunc {
	return func(c *gin.Context) {
		// Read the request body
		bodyBytes, err := ioutil.ReadAll(c.Request.Body)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read request body"})
			c.Abort()
			return
		}

		// Restore the body so it can be read again later
		c.Request.Body = ioutil.NopCloser(bytes.NewBuffer(bodyBytes))

		// Bind the JSON payload to data
		if err := c.ShouldBindJSON(&obj); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
			c.Abort()
			return
		}

		// Validate the structure
		errors := ValidateStruct(obj)
		if len(errors) > 0 {
			c.JSON(http.StatusBadRequest, gin.H{"validation_errors": errors})
			c.Abort()
			return
		}

		// Store the validated body in the context
		c.Set("validatedBody", obj)
		c.Next()
	}
}
