# BigCommerce Management API 🛒💻

Welcome to **BigCommerce-Management-API**, the ultimate TypeScript wrapper for the BigCommerce Management API! 🚀 This open-source library makes it easy for developers to interact with BigCommerce APIs and build seamless integrations with their stores. With this library, you can quickly spin up APIs to manage your store data, products, orders, and more.

---

## Features ✨
- 📦 **Comprehensive API Coverage**: Access all BigCommerce Management APIs.
- 🛠️ **TypeScript Support**: Fully typed methods for safer, more predictable code.
- ⚡ **Easy to Use**: Simplified interface to get you started quickly.
- 🌍 **Open Source**: Contributions are welcome to make it even better.

---

## Installation 📥

Install the library via npm:

```bash
npm install bigcommerce-management-api
```

---

## Getting Started 🚀

Here's how to get up and running with the **BigCommerce-Management-API**.

### 1️⃣ Import the Library
First, import the library into your project.

```typescript
import { BigCommerceClient } from 'bigcommerce-management-api';
```

### 2️⃣ Initialize the Client
You’ll need your **Store Hash** and **Access Token** from your BigCommerce account.

```typescript
const bigCommerce = new BigCommerceClient({
  storeHash: 'your-store-hash',
  accessToken: 'your-access-token',
});
```

### 3️⃣ Example Usage
Start interacting with your BigCommerce store!

#### Get All Products
```typescript
(async () => {
  const products = await bigCommerce.getProducts();
  console.log(products);
})();
```

#### Create a New Product
```typescript
(async () => {
  const newProduct = await bigCommerce.createProduct({
    name: 'Awesome T-Shirt',
    price: 19.99,
    categories: [1, 2],
    type: 'physical',
  });
  console.log(newProduct);
})();
```

#### Update an Existing Product
```typescript
(async () => {
  const updatedProduct = await bigCommerce.updateProduct(123, { price: 25.99 });
  console.log(updatedProduct);
})();
```

#### Delete a Product
```typescript
(async () => {
  await bigCommerce.deleteProduct(123);
  console.log('Product deleted');
})();
```

---

## API Reference 📚

### Available Methods

- `getProducts()`: Fetches all products from your store.
- `createProduct(data)`: Creates a new product with the provided data.
- `updateProduct(productId, data)`: Updates an existing product with the given ID.
- `deleteProduct(productId)`: Deletes a product by ID.
- **...and more!**

Detailed documentation can be found in the [API Docs](https://developer.bigcommerce.com/api-reference).

---

## Contributing 🤝

We welcome contributions to make this project better! To contribute:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License 📄

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Questions? 🤔

If you have any questions or run into issues, feel free to open an issue on GitHub or contact us directly. We’re here to help you make the most of your BigCommerce store!

Code hard, bro harder! 💻💪
