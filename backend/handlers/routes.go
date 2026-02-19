package handlers

import "net/http"

// RegisterRoutes registers all generated API routes
func RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("DELETE /api/tasks/{id}", DeleteTask)
}
