package handlers

import (
	"net/http"
	"backend/models"
	"backend/db"
	"backend/utils"
)

func DeleteTask(w http.ResponseWriter, r *http.Request) {
	id := r.PathValue("id")
	if id == "" {
		utils.SendError(w, "Task ID is required", http.StatusBadRequest)
		return
	}

	var task models.Task
	if err := db.DB.Where("id = ?", id).First(&task).Error; err != nil {
		utils.SendError(w, "Task not found", http.StatusNotFound)
		return
	}

	if err := db.DB.Delete(&task).Error; err != nil {
		utils.SendError(w, "Failed to delete task", http.StatusInternalServerError)
		return
	}

	utils.SendSuccess(w, map[string]interface{}{
		"message": "Task deleted successfully",
	})
}
