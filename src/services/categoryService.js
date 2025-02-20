const API_URL = "https://localhost:7117/api/Category";

export async function fetchCategories() {
	try {
		const response = await fetch(API_URL);
		if (!response.ok) throw new Error("Failed to fetch categories");
		return await response.json();
	} catch (error) {
		console.error("Error loading categories:", error);
		return [];
	}
}

export async function createCategory(category) {
	try {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name: category }),
		});
		if (!response.ok) throw new Error("Failed to create category");
		return await response.json();
	} catch (error) {
		console.error("Error creating category:", error);
		throw error; // Передаємо помилку далі для обробки
	}
}

export async function deleteCategory(categoryId) {
	try {
		const response = await fetch(`${API_URL}/${categoryId}`, {
			method: "DELETE",
		});
		if (!response.ok) throw new Error("Failed to delete category");
		return await response.json();
	} catch (error) {
		console.error("Error deleting category:", error);
	}
}
