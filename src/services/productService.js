const API_URL = "https://localhost:7117/api/Product";

export async function fetchProducts() {
	try {
		const response = await fetch(API_URL);
		if (!response.ok) throw new Error("Failed to fetch products");

		return await response.json();
	} catch (error) {
		console.error("Error loading products:", error);
		return [];
	}
}

export async function createProduct(product) {
	try {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(product),
			mode: "cors",
		});
		if (!response.ok) throw new Error("Failed to create product");
		return await response.json();
	} catch (error) {
		console.error("Error creating product:", error);
	}
}

export async function deleteProduct(productId) {
	try {
		const response = await fetch(`${API_URL}/${productId}`, {
			method: "DELETE",
		});
		if (!response.ok) throw new Error("Failed to delete product");
		return true;
	} catch (error) {
		console.error("Error deleting product:", error);
		return false;
	} 
}

export async function ProductByCategoryId(categoryId) {
	try {
		const response = await fetch(`${API_URL}/category/${categoryId}`);
		if (!response.ok) throw new Error("Failed by categoryId product");
		return await response.json();
	} catch (error) {
		console.error("Error by categoryId product:", error);
	}
}
